import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import BlogPostList from "@/components/admin/BlogPostList";
import BlogPostForm, { type BlogPostData } from "@/components/admin/BlogPostForm";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  published: boolean;
  created_at: string;
  author_id: string | null;
}

const Admin = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [saving, setSaving] = useState(false);
  const [view, setView] = useState<"list" | "create" | "edit">("list");
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoadingPosts(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error loading posts", description: error.message, variant: "destructive" });
    } else {
      setPosts((data as BlogPost[]) ?? []);
    }
    setLoadingPosts(false);
  }, []);

  useEffect(() => {
    if (user) fetchPosts();
  }, [user, fetchPosts]);

  const handleCreate = async (data: BlogPostData) => {
    setSaving(true);
    const { error } = await supabase.from("blog_posts").insert({
      title: data.title.trim(),
      excerpt: data.excerpt.trim(),
      content: data.content.trim(),
      category: data.category,
      published: data.published,
      author_id: user?.id,
    });
    setSaving(false);

    if (error) {
      toast({ title: "Error creating post", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Post created" });
    setView("list");
    fetchPosts();
  };

  const handleUpdate = async (data: BlogPostData) => {
    if (!data.id) return;
    setSaving(true);
    const { error } = await supabase
      .from("blog_posts")
      .update({
        title: data.title.trim(),
        excerpt: data.excerpt.trim(),
        content: data.content.trim(),
        category: data.category,
        published: data.published,
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.id);
    setSaving(false);

    if (error) {
      toast({ title: "Error updating post", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Post updated" });
    setView("list");
    setEditingPost(null);
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Error deleting post", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Post deleted" });
    fetchPosts();
  };

  const startEdit = (id: string) => {
    const post = posts.find((p) => p.id === id);
    if (post) {
      setEditingPost(post);
      setView("edit");
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30">
        <p className="text-muted-foreground font-body">Loading…</p>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-primary">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground font-body hidden sm:inline">{user.email}</span>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-1" /> Sign Out
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {view === "list" && (
          <BlogPostList
            posts={posts}
            onEdit={startEdit}
            onDelete={handleDelete}
            onCreate={() => setView("create")}
            loading={loadingPosts}
          />
        )}

        {view === "create" && (
          <BlogPostForm
            onSubmit={handleCreate}
            onCancel={() => setView("list")}
            loading={saving}
          />
        )}

        {view === "edit" && editingPost && (
          <BlogPostForm
            initialData={editingPost}
            onSubmit={handleUpdate}
            onCancel={() => { setView("list"); setEditingPost(null); }}
            loading={saving}
          />
        )}
      </main>
    </div>
  );
};

export default Admin;
