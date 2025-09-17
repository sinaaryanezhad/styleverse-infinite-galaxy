import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  type: string;
  color: string;
  price: number;
  nft: boolean;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface NFTExporterProps {
  character: Character | null;
  outfits: Outfit[];
  totalValue: number;
}

const NFTExporter = ({ character, outfits, totalValue }: NFTExporterProps) => {
  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return '⭐';
      case 'epic': return '💜';
      case 'rare': return '💙';
      default: return '🔹';
    }
  };

  const nftValue = Math.floor(totalValue * 1.5 + 100);

  return (
    <div className="space-y-4">
      {/* NFT Preview */}
      <Card className="glass border-accent/20">
        <CardHeader>
          <CardTitle className="font-cosmic text-accent text-sm flex items-center gap-2">
            <span>🎨</span> NFT Export
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {character ? (
            <>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-cosmic flex items-center justify-center text-2xl">
                  🎭
                </div>
                <h3 className="font-cyber text-foreground">{character.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {outfits.length} items equipped
                </p>
              </div>

              {/* NFT Stats */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Rarity Score</span>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/40">
                    {Math.floor(Math.random() * 100) + 50}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Est. Value</span>
                  <span className="text-sm font-cyber text-accent">${nftValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Network</span>
                  <span className="text-xs text-primary">Ethereum</span>
                </div>
              </div>

              {/* Equipped Items */}
              {outfits.length > 0 && (
                <div>
                  <h4 className="text-xs font-cyber text-foreground mb-2">Equipped Items</h4>
                  <div className="space-y-1">
                    {outfits.slice(0, 3).map((outfit) => (
                      <div key={outfit.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs">{getRarityIcon(outfit.rarity)}</span>
                          <span className="text-xs text-muted-foreground truncate">
                            {outfit.name}
                          </span>
                        </div>
                        <div
                          className="w-3 h-3 rounded-sm border border-primary/40"
                          style={{ backgroundColor: outfit.color }}
                        />
                      </div>
                    ))}
                    {outfits.length > 3 && (
                      <p className="text-xs text-muted-foreground text-center">
                        +{outfits.length - 3} more items
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Export Actions */}
              <div className="space-y-2">
                <Button 
                  variant="default" 
                  className="w-full font-cyber bg-gradient-cosmic hover:opacity-90"
                  disabled={outfits.length === 0}
                >
                  Mint NFT - ${nftValue}
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="font-cyber text-xs border-accent/40">
                    📱 Share
                  </Button>
                  <Button variant="outline" size="sm" className="font-cyber text-xs border-accent/40">
                    💾 Save
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <div className="text-4xl mb-2">🎭</div>
              <p className="text-sm">Select a character to start</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Blockchain Info */}
      <Card className="glass border-primary/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm flex items-center gap-2">
            <span>⛓️</span> Blockchain
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Network</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs text-primary">Ethereum</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Gas Fee</span>
            <span className="text-xs text-secondary">~$25</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Royalty</span>
            <span className="text-xs text-accent">10%</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full font-cyber text-xs border-primary/40 hover:border-primary/60"
          >
            Connect Wallet
          </Button>
        </CardContent>
      </Card>

      {/* AI Enhancement */}
      <Card className="glass border-secondary/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm text-secondary flex items-center gap-2">
            <span>🤖</span> AI Enhancement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full font-cyber text-xs border-secondary/20 hover:border-secondary/40"
          >
            Auto-Style
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full font-cyber text-xs border-secondary/20 hover:border-secondary/40"
          >
            Rarity Boost
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full font-cyber text-xs border-secondary/20 hover:border-secondary/40"
          >
            Generate Variants
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NFTExporter;