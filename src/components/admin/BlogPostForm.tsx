import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save } from "lucide-react";

export interface BlogPostData {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  published: boolean;
}

interface BlogPostFormProps {
  initialData?: BlogPostData;
  onSubmit: (data: BlogPostData) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

const CATEGORIES = [
  "Litigation",
  "Arbitration",
  "Company Law",
  "Civil Law",
  "Criminal Law",
  "Legal Updates",
];

const BlogPostForm = ({ initialData, onSubmit, onCancel, loading }: BlogPostFormProps) => {
  const [form, setForm] = useState<BlogPostData>({
    title: initialData?.title ?? "",
    excerpt: initialData?.excerpt ?? "",
    content: initialData?.content ?? "",
    category: initialData?.category ?? CATEGORIES[0],
    published: initialData?.published ?? false,
    id: initialData?.id,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <Button type="button" variant="ghost" size="sm" onClick={onCancel}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>
        <h2 className="font-display text-xl font-semibold text-foreground">
          {initialData ? "Edit Post" : "New Post"}
        </h2>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          required
          maxLength={200}
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Post title"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          required
          maxLength={500}
          rows={3}
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          placeholder="A brief summary of the post…"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          required
          rows={12}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Full article content…"
        />
      </div>

      <div className="flex items-center gap-3">
        <Switch
          id="published"
          checked={form.published}
          onCheckedChange={(checked) => setForm({ ...form, published: checked })}
        />
        <Label htmlFor="published" className="cursor-pointer">
          {form.published ? "Published" : "Draft"}
        </Label>
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="submit" disabled={loading}>
          <Save className="w-4 h-4 mr-1" />
          {loading ? "Saving…" : "Save Post"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default BlogPostForm;
