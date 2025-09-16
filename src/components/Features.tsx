import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import arFittingRoom from "@/assets/clothing-store-mannequins.jpg";
import fashionShow from "@/assets/neon-dress.jpg";

const Features = () => {
  const features = [
    {
      icon: "🎭",
      title: "AR Fitting Rooms",
      description: "Try on infinite designs with real-time customization powered by Universe AI",
      image: arFittingRoom,
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: "🎨",
      title: "Infinite Design Studio",
      description: "Create cosmic fashion with AI assistance, from nebula textures to starry patterns",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: "💎",
      title: "NFT Marketplace",
      description: "Mint and trade your designs as NFTs on Polygon blockchain with exclusive drops",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: "🚀",
      title: "Virtual Fashion Shows",
      description: "Showcase your creations on cosmic runways and connect with the style community",
      image: fashionShow,
      gradient: "from-primary/20 to-secondary/5"
    },
    {
      icon: "🤖",
      title: "Universe AI Assistant",
      description: "Get personalized style suggestions and trend insights from our cosmic AI",
      gradient: "from-secondary/20 to-accent/5"
    },
    {
      icon: "🌍",
      title: "Cross-Platform Reality",
      description: "Access StyleVerse on mobile, desktop, VR, and WebXR for unlimited creativity",
      gradient: "from-accent/20 to-primary/5"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-6">
            <span className="text-cosmic">Infinite Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the tools that make StyleVerse the ultimate metaverse fashion destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`glass border border-primary/20 hover:border-primary/40 transition-all duration-300 hover-glow group ${
                feature.image ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <CardTitle className="text-xl font-cosmic text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {feature.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-cosmic rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-portal rounded-full blur-3xl opacity-10 animate-float" />
    </section>
  );
};

export default Features;