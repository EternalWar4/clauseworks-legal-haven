import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  published: boolean;
  created_at: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
  loading?: boolean;
}

const BlogPostList = ({ posts, onEdit, onDelete, onCreate, loading }: BlogPostListProps) => {
  if (loading) {
    return <p className="text-muted-foreground font-body text-center py-12">Loading posts…</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-foreground">Blog Posts</h2>
        <Button onClick={onCreate} size="sm">
          <Plus className="w-4 h-4 mr-1" /> New Post
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="bg-card rounded-lg border border-border p-12 text-center">
          <p className="text-muted-foreground font-body mb-4">No posts yet. Create your first article.</p>
          <Button onClick={onCreate}>
            <Plus className="w-4 h-4 mr-1" /> Create Post
          </Button>
        </div>
      ) : (
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium max-w-[200px] truncate">{post.title}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{post.category}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                    {format(new Date(post.created_at), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>
                    <Badge variant={post.published ? "default" : "secondary"}>
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => onEdit(post.id)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          if (confirm("Delete this post? This cannot be undone.")) {
                            onDelete(post.id);
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
