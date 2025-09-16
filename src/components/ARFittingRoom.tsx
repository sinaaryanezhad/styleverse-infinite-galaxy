import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Avatar3D from './Avatar3D';
import ClothingSelector from './ClothingSelector';
import CustomizationPanel from './CustomizationPanel';

interface Outfit {
  id: string;
  name: string;
  type: 'jacket' | 'pants' | 'dress' | 'shoes';
  color: string;
  price: number;
  nft: boolean;
}

const ARFittingRoom = () => {
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);
  const [currentColor, setCurrentColor] = useState('#3b82f6');
  const [isARMode, setIsARMode] = useState(false);

  const outfits: Outfit[] = [
    { id: '1', name: 'Cosmic Jacket', type: 'jacket', color: '#3b82f6', price: 299, nft: true },
    { id: '2', name: 'Nebula Dress', type: 'dress', color: '#8b5cf6', price: 399, nft: true },
    { id: '3', name: 'Stellar Pants', type: 'pants', color: '#06b6d4', price: 199, nft: false },
    { id: '4', name: 'Galaxy Boots', type: 'shoes', color: '#f59e0b', price: 159, nft: false },
  ];

  const handleOutfitSelect = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
    setCurrentColor(outfit.color);
  };

  const handleColorChange = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-primary/20 bg-glass backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-cosmic font-bold text-cosmic">AR Fitting Room</h1>
              <p className="text-muted-foreground">Try on infinite styles with Universe AI</p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={isARMode ? "default" : "outline"}
                onClick={() => setIsARMode(!isARMode)}
                className="font-cyber"
              >
                {isARMode ? "Exit AR" : "Enable AR"}
              </Button>
              {selectedOutfit && (
                <Button variant="cosmic" className="font-cyber">
                  Add to Cart - ${selectedOutfit.price}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Avatar Section */}
          <div className="lg:col-span-2">
            <Card className="glass border-primary/20 h-[600px]">
              <CardHeader>
                <CardTitle className="font-cosmic text-cosmic flex items-center gap-2">
                  3D Avatar
                  {selectedOutfit?.nft && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/40">
                      NFT
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full p-0">
                <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-b from-background/50 to-primary/5">
                  <Canvas
                    camera={{ position: [0, 0, 5], fov: 50 }}
                    shadows
                  >
                    <Suspense fallback={null}>
                      <Environment preset="studio" />
                      <ambientLight intensity={0.5} />
                      <spotLight 
                        position={[10, 10, 10]} 
                        angle={0.15} 
                        penumbra={1} 
                        shadow-mapSize={[512, 512]}
                        intensity={1}
                        color="#00ffff"
                      />
                      <spotLight 
                        position={[-10, 10, 10]} 
                        angle={0.15} 
                        penumbra={1} 
                        intensity={0.5}
                        color="#ff00ff"
                      />
                      
                      <Avatar3D 
                        selectedOutfit={selectedOutfit}
                        currentColor={currentColor}
                      />
                      
                      <ContactShadows 
                        opacity={0.4} 
                        scale={10} 
                        blur={1} 
                        far={10} 
                        resolution={256} 
                        color="#000000" 
                      />
                      <OrbitControls 
                        enablePan={false} 
                        enableZoom={true} 
                        maxPolarAngle={Math.PI / 2}
                        minDistance={3}
                        maxDistance={8}
                      />
                    </Suspense>
                  </Canvas>
                </div>
              </CardContent>
            </Card>

            {/* Universe AI Chat */}
            <Card className="glass border-primary/20 mt-4">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-cosmic flex items-center justify-center">
                    <span className="text-sm">🤖</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-cyber text-primary">Universe AI:</span> 
                      {selectedOutfit 
                        ? `Looking cosmic in that ${selectedOutfit.name}! Try saying "make it ${currentColor === '#3b82f6' ? 'purple' : 'blue'}" to change the color.`
                        : "Welcome to your personal fitting room! Select an outfit to get started, and I'll help you customize it."
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls Section */}
          <div className="space-y-6">
            <ClothingSelector 
              outfits={outfits}
              selectedOutfit={selectedOutfit}
              onOutfitSelect={handleOutfitSelect}
            />
            
            {selectedOutfit && (
              <CustomizationPanel 
                selectedOutfit={selectedOutfit}
                currentColor={currentColor}
                onColorChange={handleColorChange}
              />
            )}

            {/* AR Instructions */}
            <Card className="glass border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent font-cyber text-sm">AR Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p>• Rotate: Drag to rotate the avatar</p>
                <p>• Zoom: Scroll to zoom in/out</p>
                <p>• AR Mode: Enable camera overlay</p>
                <p>• Voice: Say "make it blue" to change colors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARFittingRoom;