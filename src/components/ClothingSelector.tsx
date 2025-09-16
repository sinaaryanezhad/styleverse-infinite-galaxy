import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Outfit {
  id: string;
  name: string;
  type: 'jacket' | 'pants' | 'dress' | 'shoes';
  color: string;
  price: number;
  nft: boolean;
}

interface ClothingSelectorProps {
  outfits: Outfit[];
  selectedOutfit: Outfit | null;
  onOutfitSelect: (outfit: Outfit) => void;
}

const ClothingSelector = ({ outfits, selectedOutfit, onOutfitSelect }: ClothingSelectorProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'jacket': return '🧥';
      case 'dress': return '👗';
      case 'pants': return '👖';
      case 'shoes': return '👟';
      default: return '👕';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'jacket': return 'from-primary/20 to-primary/5';
      case 'dress': return 'from-secondary/20 to-secondary/5';
      case 'pants': return 'from-accent/20 to-accent/5';
      case 'shoes': return 'from-primary/20 to-secondary/5';
      default: return 'from-muted/20 to-muted/5';
    }
  };

  return (
    <Card className="glass border-primary/20">
      <CardHeader>
        <CardTitle className="font-cosmic text-cosmic">Select Outfit</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {outfits.map((outfit) => (
          <div 
            key={outfit.id}
            className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer hover-glow ${
              selectedOutfit?.id === outfit.id 
                ? 'border-primary bg-primary/10' 
                : 'border-primary/20 hover:border-primary/40'
            }`}
            onClick={() => onOutfitSelect(outfit)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getTypeColor(outfit.type)} flex items-center justify-center text-lg`}>
                  {getTypeIcon(outfit.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-cyber text-sm font-semibold text-foreground">
                      {outfit.name}
                    </h3>
                    {outfit.nft && (
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/40 text-xs">
                        NFT
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground capitalize">
                    {outfit.type} • ${outfit.price}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full border border-primary/40"
                  style={{ backgroundColor: outfit.color }}
                />
                {selectedOutfit?.id === outfit.id && (
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </div>
            </div>
          </div>
        ))}
        
        {outfits.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <div className="text-4xl mb-2">👕</div>
            <p className="text-sm">No outfits available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClothingSelector;