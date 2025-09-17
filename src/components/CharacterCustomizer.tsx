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

interface CharacterCustomizerProps {
  characters: Character[];
  selectedCharacter: Character | null;
  onCharacterSelect: (character: Character) => void;
}

const CharacterCustomizer = ({ characters, selectedCharacter, onCharacterSelect }: CharacterCustomizerProps) => {
  const getGenderIcon = (gender: string) => {
    switch (gender) {
      case 'male': return '👨';
      case 'female': return '👩';
      default: return '🧑';
    }
  };

  const getBodyIcon = (body: string) => {
    switch (body) {
      case 'athletic': return '💪';
      case 'slim': return '🏃';
      case 'muscular': return '🏋️';
      default: return '👤';
    }
  };

  const skinTones = [
    { name: 'Light', value: '#ffdbac' },
    { name: 'Medium', value: '#f4c2a1' },
    { name: 'Dark', value: '#d4a574' },
    { name: 'Cosmic', value: '#e6ccff' },
    { name: 'Cyber', value: '#c8f7ff' },
  ];

  const bodyTypes = ['slim', 'athletic', 'muscular', 'curvy'];
  const genders = ['male', 'female', 'neutral'];

  return (
    <div className="space-y-4">
      {/* Character Presets */}
      <Card className="glass border-primary/20">
        <CardHeader>
          <CardTitle className="font-cosmic text-primary text-sm">Characters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {characters.map((character) => (
            <div
              key={character.id}
              className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer hover-glow ${
                selectedCharacter?.id === character.id
                  ? 'border-primary bg-primary/10 glow-primary'
                  : 'border-primary/20 hover:border-primary/40'
              }`}
              onClick={() => onCharacterSelect(character)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  {getGenderIcon(character.gender)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-cyber text-sm font-semibold text-foreground">
                      {character.name}
                    </h3>
                    {selectedCharacter?.id === character.id && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40 text-xs">
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground capitalize">
                    {character.body} • {character.gender}
                  </p>
                </div>
                <div
                  className="w-4 h-4 rounded-full border border-primary/40"
                  style={{ backgroundColor: character.skin }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skin Tone Customization */}
      <Card className="glass border-secondary/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm text-secondary">Skin Tone</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-2">
            {skinTones.map((tone) => (
              <button
                key={tone.value}
                className="w-8 h-8 rounded-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: tone.value }}
                title={tone.name}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Body Type */}
      <Card className="glass border-accent/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm text-accent">Body Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {bodyTypes.map((body) => (
              <Button
                key={body}
                variant="outline"
                size="sm"
                className="font-cyber text-xs border-accent/20 hover:border-accent/40 hover:bg-accent/10 capitalize"
              >
                {getBodyIcon(body)} {body}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gender */}
      <Card className="glass border-primary/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm">Gender</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {genders.map((gender) => (
              <Button
                key={gender}
                variant="outline"
                size="sm"
                className="font-cyber text-xs border-primary/20 hover:border-primary/40 hover:bg-primary/10 capitalize"
              >
                {getGenderIcon(gender)}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass border-secondary/20">
        <CardHeader>
          <CardTitle className="font-cyber text-sm text-secondary">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full font-cyber text-xs border-secondary/20">
            🎲 Random Character
          </Button>
          <Button variant="outline" size="sm" className="w-full font-cyber text-xs border-secondary/20">
            📱 Save Character
          </Button>
          <Button variant="outline" size="sm" className="w-full font-cyber text-xs border-secondary/20">
            💾 Load Character
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterCustomizer;