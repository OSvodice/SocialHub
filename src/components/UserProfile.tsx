
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostCard } from "./PostCard";

interface UserProfileProps {
  user: any;
  posts: any[];
}

export const UserProfile = ({ user, posts }: UserProfileProps) => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="shadow-lg border-0 bg-white">
        <CardContent className="p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600 text-lg">@{user.username}</p>
              <p className="mt-2 text-gray-700">{user.bio}</p>
              
              <div className="flex justify-center sm:justify-start space-x-8 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.posts}</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.followers}</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.following}</div>
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
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.id} post={post} onLike={() => {}} />
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
