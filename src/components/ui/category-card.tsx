import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent } from './card';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  catalogCount: number;
  gradient?: string;
  isPremium?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  href,
  icon: Icon,
  catalogCount,
  gradient = "bg-gradient-primary",
  isPremium = false
}) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Premium
          </div>
        </div>
      )}

      <CardContent className="p-0">
        {/* Header with Gradient */}
        <div className={`${gradient} p-6 text-white relative`}>
          <div className="flex items-center justify-between">
            <Icon className="h-12 w-12" />
            <div className="text-right">
              <div className="text-2xl font-bold">{catalogCount}</div>
              <div className="text-sm opacity-90">Catalogues</div>
            </div>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <div className="w-full h-full bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>

          <Button 
            asChild 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            <Link to={href} className="flex items-center justify-center">
              Voir les catalogues
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;