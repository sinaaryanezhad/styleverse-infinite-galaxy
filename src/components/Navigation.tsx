import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-cosmic font-bold text-cosmic hover:text-primary transition-colors">
              StyleVerse
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-cyber">
              Features
            </a>
        <Link to="/ar-fitting" className="text-foreground hover:text-primary transition-colors font-cyber">
          AR Fitting
        </Link>
        <Link to="/nft-studio" className="text-foreground hover:text-primary transition-colors font-cyber">
          NFT Studio
        </Link>
            <a href="#marketplace" className="text-foreground hover:text-primary transition-colors font-cyber">
              Marketplace
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors font-cyber">
              Community
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="cosmic" size="sm">
              Enter Portal
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;