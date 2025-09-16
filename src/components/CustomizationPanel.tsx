import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Outfit {
  id: string;
  name: string;
  type: 'jacket' | 'pants' | 'dress' | 'shoes';
  color: string;
  price: number;
  nft: boolean;
}

interface CustomizationPanelProps {
  selectedOutfit: Outfit;
  currentColor: string;
  onColorChange: (color: string) => void;
}

const CustomizationPanel = ({ selectedOutfit, currentColor, onColorChange }: CustomizationPanelProps) => {
  const colors = [
    { name: 'Cosmic Blue', value: '#3b82f6' },
    { name: 'Nebula Purple', value: '#8b5cf6' },
    { name: 'Stellar Cyan', value: '#06b6d4' },
    { name: 'Galaxy Gold', value: '#f59e0b' },
    { name: 'Aurora Pink', value: '#ec4899' },
    { name: 'Void Black', value: '#1f2937' },
    { name: 'Star White', value: '#f8fafc' },
    { name: 'Mars Red', value: '#ef4444' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="space-y-4">
      {/* Outfit Info */}
      <Card className="glass border-secondary/20">
        <CardHeader>
          <CardTitle className="font-cosmic text-secondary flex items-center gap-2">
            Customize
            {selectedOutfit.nft && (
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/40">
                NFT
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-cyber text-foreground mb-1">{selectedOutfit.name}</h3>
            <p className="text-sm text-muted-foreground capitalize">
              {selectedOutfit.type} • ${selectedOutfit.price}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Color Selection */}
      <Card className="glass border-primary/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm">Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                className={`w-12 h-12 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                  currentColor === color.value 
                    ? 'border-primary shadow-lg shadow-primary/25' 
                    : 'border-primary/20 hover:border-primary/40'
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => onColorChange(color.value)}
                title={color.name}
              >
                {currentColor === color.value && (
                  <div className="w-full h-full rounded-md bg-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Current: {colors.find(c => c.value === currentColor)?.name || 'Custom'}
          </p>
        </CardContent>
      </Card>

      {/* Size Selection */}
      <Card className="glass border-accent/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm">Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <Button
                key={size}
                variant="outline"
                size="sm"
                className="font-cyber border-accent/20 hover:border-accent/40 hover:bg-accent/10"
              >
                {size}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <Card className="glass border-secondary/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm flex items-center gap-2">
            <span>🤖</span> AI Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs font-cyber border-secondary/20 hover:border-secondary/40"
            onClick={() => onColorChange('#8b5cf6')}
          >
            Make it more cosmic
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs font-cyber border-secondary/20 hover:border-secondary/40"
            onClick={() => onColorChange('#06b6d4')}
          >
            Try stellar blue
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-xs font-cyber border-secondary/20 hover:border-secondary/40"
            onClick={() => onColorChange('#f59e0b')}
          >
            Add galaxy glow
          </Button>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-2">
        <Button variant="cosmic" className="w-full font-cyber">
          Add to Cart - ${selectedOutfit.price}
        </Button>
        {selectedOutfit.nft && (
          <Button variant="outline" className="w-full font-cyber border-accent/40 text-accent hover:bg-accent/10">
            Mint as NFT - $50
          </Button>
        )}
        <Button variant="outline" className="w-full font-cyber text-xs">
          Share Style
        </Button>
      </div>
    </div>
  );
};

export default CustomizationPanel;