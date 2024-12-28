import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary">MockGen</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="https://github.com/prajwalyoyo/MockGen" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </nav>
        </div>
        {/* Light / Dark Theme toggle (WIP) */}
        {/* <div className="flex items-center gap-4">
          <ThemeToggle />
        </div> */}
      </div>
    </header>
  );
};

export default Header;