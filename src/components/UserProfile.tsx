
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostCard } from "./PostCard";
import { useProfile } from "@/hooks/useProfile";
import { usePosts } from "@/hooks/usePosts";
import { useAuth } from "@/hooks/useAuth";

export const UserProfile = () => {
  const { profile, loading: profileLoading } = useProfile();
  const { posts, loading: postsLoading, toggleLike } = usePosts();
  const { user } = useAuth();

  const userPosts = posts.filter(post => post.user_id === user?.id);

  if (profileLoading) {
    return (
      <div className="space-y-6">
        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-8 animate-pulse">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="h-24 w-24 bg-gray-200 rounded-full"></div>
              <div className="flex-1 space-y-4">
                <div className="h-8 bg-gray-200 rounded w-48"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-64"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Profile not found</h3>
        <p className="text-gray-600">Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="shadow-lg border-0 bg-white">
        <CardContent className="p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profile.avatar_url} alt={profile.full_name} />
              <AvatarFallback className="text-2xl">{profile.full_name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900">{profile.full_name}</h1>
              <p className="text-gray-600 text-lg">@{profile.username}</p>
              {profile.bio && <p className="mt-2 text-gray-700">{profile.bio}</p>}
              
              <div className="flex justify-center sm:justify-start space-x-8 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{userPosts.length}</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Posts Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Your Posts</h2>
        {postsLoading ? (
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : userPosts.length > 0 ? (
          userPosts.map((post) => (
            <PostCard key={post.id} post={post} onLike={() => toggleLike(post.id)} />
          ))
        ) : (
          <Card className="shadow-lg border-0 bg-white">
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">No posts yet. Share your first post!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
