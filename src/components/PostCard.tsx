
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Share } from "lucide-react";

interface PostCardProps {
  post: any;
  onLike: (postId: number) => void;
}

export const PostCard = ({ post, onLike }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
            <p className="text-sm text-gray-500">@{post.user.username} • {post.timestamp}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
        
        {post.image && (
          <div className="rounded-xl overflow-hidden">
            <img
              src={post.image}
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
              onClick={() => onLike(post.id)}
              className={`flex items-center space-x-2 hover:bg-red-50 transition-colors ${
                post.liked ? "text-red-500" : "text-gray-600"
              }`}
            >
              <Heart className={`h-5 w-5 ${post.liked ? "fill-current" : ""}`} />
              <span>{post.likes}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span>{post.comments}</span>
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
