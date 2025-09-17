import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-cosmic font-bold text-cosmic mb-4">StyleVerse</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Infinite fashion possibilities in the metaverse. Create, wear, and share your cosmic style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-cyber font-semibold text-foreground mb-3">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/ar-fitting" className="hover:text-primary transition-colors">AR Fitting</Link></li>
                <li><Link to="/nft-studio" className="hover:text-primary transition-colors">Design Studio</Link></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Fashion Shows</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cyber font-semibold text-foreground mb-3">Marketplace</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-secondary transition-colors">NFT Collections</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Physical Items</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Exclusive Drops</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cyber font-semibold text-foreground mb-3">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cyber font-semibold text-foreground mb-3">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Developer API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary/10">
            <p className="text-muted-foreground text-sm">
              © 2025 StyleVerse. Powered by Universe AI. #StyleVerseInfinity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
