import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-cosmic blur-3xl opacity-20 rounded-full" />
        
        <div className="relative z-10 glass rounded-3xl p-12 border border-primary/20">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-6">
            <span className="text-cosmic">Ready to Enter</span><br />
            <span className="text-foreground">the StyleVerse?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the cosmic fashion revolution and create your infinite style with Universe AI. 
            Your metaverse wardrobe awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="portal" size="xl" className="group min-w-[200px]">
              <span className="mr-2">🌌</span>
              Launch StyleVerse
            </Button>
            
            <Button variant="hologram" size="xl" className="min-w-[200px]">
              <span className="mr-2">📱</span>
              Download App
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              iOS & Android
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              WebXR & VR Ready
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              NFT Marketplace
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;