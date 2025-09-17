import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Outfit {
  id: string;
  name: string;
  type: 'jacket' | 'pants' | 'dress' | 'shoes' | 'top' | 'accessory';
  color: string;
  price?: number;
  nft?: boolean;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface Category {
  id: string;
  name: string;
  icon: string;
  items: Outfit[];
}

interface ClothingLibraryProps {
  categories: Category[];
  selectedOutfits: Outfit[];
  onOutfitToggle: (outfit: Outfit) => void;
}

const ClothingLibrary = ({ categories, selectedOutfits, onOutfitToggle }: ClothingLibraryProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-accent/30 to-accent/10 border-accent/50';
      case 'epic': return 'from-primary/30 to-primary/10 border-primary/50';
      case 'rare': return 'from-secondary/30 to-secondary/10 border-secondary/50';
      default: return 'from-muted/20 to-muted/10 border-muted/30';
    }
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'bg-accent/20 text-accent border-accent/40';
      case 'epic': return 'bg-primary/20 text-primary border-primary/40';
      case 'rare': return 'bg-secondary/20 text-secondary border-secondary/40';
      default: return 'bg-muted/20 text-muted-foreground border-muted/40';
    }
  };

  const isSelected = (outfit: Outfit) => {
    return selectedOutfits.some(selected => selected.id === outfit.id);
  };

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <Card key={category.id} className="glass border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="font-cosmic text-sm flex items-center gap-2">
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {category.items.map((outfit) => (
              <div
                key={outfit.id}
                className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer hover-glow relative overflow-hidden ${
                  isSelected(outfit)
                    ? `bg-gradient-to-r ${getRarityColor(outfit.rarity)} transform scale-105`
                    : 'border-primary/20 hover:border-primary/40 bg-background/50'
                }`}
                onClick={() => onOutfitToggle(outfit)}
              >
                {/* Rarity Glow */}
                {outfit.rarity !== 'common' && (
                  <div className="absolute inset-0 bg-gradient-to-r opacity-20 pointer-events-none"
                       style={{
                         background: outfit.rarity === 'legendary' ? 'var(--gradient-cosmic)' :
                                   outfit.rarity === 'epic' ? 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))' :
                                   'linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--primary)))'
                       }} />
                )}
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-lg border border-primary/40 flex-shrink-0"
                      style={{ backgroundColor: outfit.color }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-cyber text-xs font-semibold text-foreground">
                          {outfit.name}
                        </h3>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getRarityBadge(outfit.rarity)}`}
                        >
                          {outfit.rarity}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground capitalize">
                        {outfit.type}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isSelected(outfit) && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {category.items.length === 0 && (
              <div className="text-center py-4 text-muted-foreground">
                <div className="text-2xl mb-1">{category.icon}</div>
                <p className="text-xs">No items available</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
      
      {/* Add Item Button */}
      <Button 
        variant="outline" 
        className="w-full font-cyber border-dashed border-primary/40 hover:border-primary/60 text-primary"
      >
        + Add Custom Item
      </Button>
    </div>
  );
};

export default ClothingLibrary;