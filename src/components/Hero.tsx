import { Button } from "@/components/ui/button";
import heroPortal from "@/assets/hero-portal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Portal Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroPortal})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/90" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Campaign Banner */}
        <div className="inline-block mb-8">
          <div className="glass rounded-full px-6 py-3 border border-primary/30">
            <p className="text-sm font-cosmic text-primary animate-pulse-glow">
              What's Your Infinite Style? Ask Universe AI!
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cosmic font-bold mb-6">
          <span className="text-cosmic">StyleVerse</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-cyber mb-4 text-foreground/90">
          Enter the Metaverse Fashion Galaxy
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Create, wear, and share infinite fashion designs in an immersive cyberpunk universe. 
          Step through the portal and discover your cosmic style with Universe AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="portal" size="lg" className="group">
            <span className="mr-2">🌌</span>
            Enter the Portal
            <div className="absolute inset-0 rounded-lg bg-gradient-portal opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Button>
          
          <Button variant="cosmic" size="lg" className="group">
            <span className="mr-2">✨</span>
            Explore AR Fitting
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-cosmic font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Styles Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-cosmic font-bold text-secondary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Design Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-cosmic font-bold text-accent mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Social Engagement</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;