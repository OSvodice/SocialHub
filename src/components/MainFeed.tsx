
import { PostCard } from "./PostCard";

interface MainFeedProps {
  posts: any[];
  onLike: (postId: number) => void;
}

export const MainFeed = ({ posts, onLike }: MainFeedProps) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
};
