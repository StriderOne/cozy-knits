import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-primary-100">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-square">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-primary-800/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            Под заказ
          </div>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 text-xs font-bold text-accent tracking-wider uppercase">
          {product.category === 'ANIMALS' ? 'Зверята' : product.category === 'DOLLS' ? 'Куклы' : 'Декор'}
        </div>
        
        <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
          <h3 className="font-serif text-xl font-semibold text-primary-900 mb-2">{product.name}</h3>
        </Link>
        
        <p className="text-primary-500 text-sm line-clamp-2 mb-4 flex-grow">
          {product.shortDescription}
        </p>

        <div className="pt-4 border-t border-primary-50 flex items-center justify-between">
            <span className="font-semibold text-primary-800">{product.price.toLocaleString('ru-RU')} ₽</span>
            <Link 
              to={`/product/${product.id}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
            >
              Подробнее <ArrowRight size={16} />
            </Link>
        </div>
      </div>
    </div>
  );
};
