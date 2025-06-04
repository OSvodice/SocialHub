
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Share } from "lucide-react";
import { Post } from "@/hooks/usePosts";
import { useAuth } from "@/hooks/useAuth";
import { formatDistanceToNow } from "date-fns";

interface PostCardProps {
  post: Post;
  onLike: () => void;
}

export const PostCard = ({ post, onLike }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const { user } = useAuth();
  
  const isLiked = post.likes?.some(like => like.user_id === user?.id);
  const likesCount = post.likes?.length || 0;
  const commentsCount = post.comments?.length || 0;

  const timeAgo = formatDistanceToNow(new Date(post.created_at), { addSuffix: true });

  return (
    <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.profiles?.avatar_url} alt={post.profiles?.full_name} />
            <AvatarFallback>{post.profiles?.full_name?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900">{post.profiles?.full_name || 'Unknown User'}</h3>
            <p className="text-sm text-gray-500">@{post.profiles?.username || 'unknown'} • {timeAgo}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
        
        {post.image_url && (
          <div className="rounded-xl overflow-hidden">
            <img
              src={post.image_url}
              alt="Post content"
              className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLike}
              className={`flex items-center space-x-2 hover:bg-red-50 transition-colors ${
                isLiked ? "text-red-500" : "text-gray-600"
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
              <span>{likesCount}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span>{commentsCount}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              <Share className="h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>
        </div>
        
        {showComments && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
            <p className="text-sm text-gray-600 text-center">
              Comments feature coming soon! 💬
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
