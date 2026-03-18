import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, FileText, Upload } from "lucide-react";

const Admin = () => {
  const { user, loading, signOut } = useAuth();

  if (loading) {
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
          <span className="text-sm text-muted-foreground font-body">{user.email}</span>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-1" /> Sign Out
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-8 flex flex-col items-center text-center gap-4">
            <FileText className="w-12 h-12 text-primary" />
            <h2 className="font-display text-xl font-semibold text-foreground">Blog Posts</h2>
            <p className="text-muted-foreground font-body text-sm">Create, edit and publish insights and articles.</p>
            <Button className="mt-2" disabled>Coming Soon</Button>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 flex flex-col items-center text-center gap-4">
            <Upload className="w-12 h-12 text-accent" />
            <h2 className="font-display text-xl font-semibold text-foreground">File Uploads</h2>
            <p className="text-muted-foreground font-body text-sm">Upload judgements, images and legal documents.</p>
            <Button className="mt-2" disabled>Coming Soon</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
