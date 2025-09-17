import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Avatar3D from './Avatar3D';
import ClothingLibrary from './ClothingLibrary';
import CharacterCustomizer from './CharacterCustomizer';
import NFTExporter from './NFTExporter';

interface Character {
  id: string;
  name: string;
  skin: string;
  body: string;
  gender: 'male' | 'female' | 'neutral';
}

interface Outfit {
  id: string;
  name: string;
  type: 'jacket' | 'pants' | 'dress' | 'shoes' | 'top' | 'accessory';
  color: string;
  price: number;
  nft: boolean;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const NFTDesignStudio = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedOutfits, setSelectedOutfits] = useState<Outfit[]>([]);
  const [currentColor, setCurrentColor] = useState('#3b82f6');
  const [designMode, setDesignMode] = useState<'realln' | 'slaanarioe' | 'game'>('game');
  const [activeTab, setActiveTab] = useState('character');

  const characters: Character[] = [
    { id: '1', name: 'Cosmic Avatar', skin: '#ffdbac', body: 'athletic', gender: 'neutral' },
    { id: '2', name: 'Cyber Punk', skin: '#f4c2a1', body: 'slim', gender: 'female' },
    { id: '3', name: 'Space Marine', skin: '#d4a574', body: 'muscular', gender: 'male' },
  ];

  const clothingCategories = [
    { id: 'heicln', name: 'Heicln', icon: '👕', items: [
      { id: '1', name: 'Cosmic Hoodie', type: 'jacket' as const, color: '#ff6b9d', category: 'heicln', rarity: 'legendary' as const },
      { id: '2', name: 'Neon Jacket', type: 'jacket' as const, color: '#4ecdc4', category: 'heicln', rarity: 'epic' as const },
      { id: '3', name: 'Holographic Coat', type: 'jacket' as const, color: '#45b7d1', category: 'heicln', rarity: 'rare' as const },
    ]},
    { id: 'sunds', name: 'Sunds', icon: '👗', items: [
      { id: '4', name: 'Galaxy Dress', type: 'dress' as const, color: '#9b59b6', category: 'sunds', rarity: 'legendary' as const },
      { id: '5', name: 'Stellar Gown', type: 'dress' as const, color: '#e74c3c', category: 'sunds', rarity: 'epic' as const },
      { id: '6', name: 'Nebula Outfit', type: 'dress' as const, color: '#f39c12', category: 'sunds', rarity: 'rare' as const },
    ]},
    { id: 'bottom', name: 'Bottom', icon: '👖', items: [
      { id: '7', name: 'Cyber Pants', type: 'pants' as const, color: '#3498db', category: 'bottom', rarity: 'common' as const },
      { id: '8', name: 'Quantum Leggings', type: 'pants' as const, color: '#e67e22', category: 'bottom', rarity: 'rare' as const },
    ]},
  ];

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleOutfitToggle = (outfit: Outfit) => {
    setSelectedOutfits(prev => {
      const exists = prev.find(o => o.id === outfit.id);
      if (exists) {
        return prev.filter(o => o.id !== outfit.id);
      }
      return [...prev, { ...outfit, price: Math.floor(Math.random() * 500) + 50, nft: true }];
    });
  };

  const handleColorChange = (color: string) => {
    setCurrentColor(color);
  };

  const mainOutfit = selectedOutfits[0] || null;

  return (
    <div className="min-h-screen bg-background">
      {/* Cosmic Header */}
      <div className="border-b border-primary/20 bg-glass backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-cosmic font-bold text-cosmic">VIRTUAL CLOTHING</h1>
              <p className="text-muted-foreground">Create • Design • Mint</p>
            </div>
          </div>
          
          {/* Mode Selector */}
          <div className="flex gap-3">
            {(['realln', 'slaanarioe', 'game'] as const).map((mode) => (
              <Button
                key={mode}
                variant={designMode === mode ? "default" : "outline"}
                onClick={() => setDesignMode(mode)}
                className={`font-cyber capitalize ${
                  designMode === mode 
                    ? 'bg-primary text-primary-foreground glow-primary' 
                    : 'border-primary/40 hover:border-primary/60'
                }`}
              >
                {mode}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Panel - Character & Clothing Library */}
          <div className="lg:col-span-1 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-glass border-primary/20">
                <TabsTrigger value="character" className="font-cyber">Character</TabsTrigger>
                <TabsTrigger value="library" className="font-cyber">Library</TabsTrigger>
              </TabsList>
              
              <TabsContent value="character" className="space-y-4">
                <CharacterCustomizer 
                  characters={characters}
                  selectedCharacter={selectedCharacter}
                  onCharacterSelect={handleCharacterSelect}
                />
              </TabsContent>
              
              <TabsContent value="library" className="space-y-4">
                <ClothingLibrary 
                  categories={clothingCategories}
                  selectedOutfits={selectedOutfits}
                  onOutfitToggle={handleOutfitToggle}
                />
              </TabsContent>
            </Tabs>
          </div>

          {/* Center - 3D Character Display */}
          <div className="lg:col-span-2">
            <Card className="glass border-primary/20 h-[700px]">
              <CardHeader>
                <CardTitle className="font-cosmic text-cosmic flex items-center gap-2">
                  Character Studio
                  {selectedCharacter && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40">
                      {selectedCharacter.name}
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full p-0">
                <div className="w-full h-[600px] rounded-lg overflow-hidden bg-gradient-to-b from-background/50 to-primary/5 relative">
                  <Canvas
                    camera={{ position: [0, 0, 5], fov: 50 }}
                    shadows
                  >
                    <Suspense fallback={null}>
                      <Environment preset="studio" />
                      <ambientLight intensity={0.4} />
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
                      <spotLight 
                        position={[0, -10, 10]} 
                        angle={0.3} 
                        penumbra={1} 
                        intensity={0.3}
                        color="#ffff00"
                      />
                      
                      <Avatar3D 
                        selectedOutfit={mainOutfit}
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
                  
                  {/* Overlay UI */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {selectedOutfits.map((outfit) => (
                      <Badge 
                        key={outfit.id} 
                        variant="secondary" 
                        className="bg-accent/20 text-accent border-accent/40"
                      >
                        {outfit.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Character Info */}
            {selectedCharacter && (
              <Card className="glass border-primary/20 mt-4">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-cosmic flex items-center justify-center">
                      <span className="text-sm">✨</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-cyber text-foreground">{selectedCharacter.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Body: {selectedCharacter.body} • Gender: {selectedCharacter.gender}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Panel - Customization & Export */}
          <div className="lg:col-span-1 space-y-6">
            {/* Color Customization */}
            <Card className="glass border-secondary/20">
              <CardHeader>
                <CardTitle className="font-cyber text-sm text-secondary">Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    '#ff6b9d', '#4ecdc4', '#45b7d1', 
                    '#9b59b6', '#e74c3c', '#f39c12',
                    '#2ecc71', '#f1c40f', '#e67e22'
                  ].map((color) => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                        currentColor === color 
                          ? 'border-primary shadow-lg shadow-primary/25' 
                          : 'border-primary/20 hover:border-primary/40'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Game Stats */}
            <Card className="glass border-accent/20">
              <CardHeader>
                <CardTitle className="font-cyber text-sm text-accent">Game</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎮</div>
                  <h3 className="font-cyber text-accent">Carace</h3>
                  <div className="w-16 h-16 mx-auto mt-2 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-cosmic" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Confetti</span>
                    <div className="flex gap-1">
                      {['$', '5es', '3x'].map((icon, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs">
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full text-xs font-cyber border-accent/40">
                    Configuini
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* NFT Export */}
            <NFTExporter 
              character={selectedCharacter}
              outfits={selectedOutfits}
              totalValue={selectedOutfits.reduce((sum, outfit) => sum + outfit.price, 0)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDesignStudio;