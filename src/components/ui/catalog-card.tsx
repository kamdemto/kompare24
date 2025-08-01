import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, ExternalLink, Clock } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent, CardFooter } from './card';
import { Badge } from './badge';

interface CatalogCardProps {
  id: string;
  title: string;
  company: string;
  validUntil: string;
  imageUrl: string;
  viewCount: number;
  category: string;
  isNew?: boolean;
  isPremium?: boolean;
}

const CatalogCard: React.FC<CatalogCardProps> = ({
  id,
  title,
  company,
  validUntil,
  imageUrl,
  viewCount,
  category,
  isNew = false,
  isPremium = false
}) => {

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-[9/16] overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge variant="outline" className="bg-white/95 backdrop-blur-sm border-white/20 text-foreground">
              {category}
            </Badge>
            {isNew && (
              <Badge className="bg-secondary text-secondary-foreground">
                Nouveau
              </Badge>
            )}
            {isPremium && (
              <Badge className="bg-gradient-secondary text-secondary-foreground">
                Sassayé
              </Badge>
            )}
          </div>

          {/* Quick Action Button */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          {/* Valid Until */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-foreground font-medium">
                Valable jusqu'au {validUntil}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-foreground line-clamp-2 leading-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{company}</p>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{viewCount} vues</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Expire le {validUntil}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/catalogue/${id}`}>
            Consulter le catalogue
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogCard;