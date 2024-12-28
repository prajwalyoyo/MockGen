import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#demo" className="text-muted-foreground hover:text-foreground">Demo</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
              <li><a href="#api" className="text-muted-foreground hover:text-foreground">API Reference</a></li>
              <li><a href="#guides" className="text-muted-foreground hover:text-foreground">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/prajwalyoyo" className="text-muted-foreground hover:text-foreground">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <p className="text-center text-muted-foreground">
            © 2024 MockGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;