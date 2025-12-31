import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import { Filter } from 'lucide-react';

export const Catalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('ALL');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'ALL') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const categories: { id: Category; label: string }[] = [
    { id: 'ALL', label: 'Все' },
    { id: 'ANIMALS', label: 'Зверята' },
    { id: 'DOLLS', label: 'Куклы' },
    { id: 'DECOR', label: 'Интерьер' },
  ];

  return (
    <div className="pt-32 pb-24 fade-in">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl text-primary-900 mb-4">Каталог</h1>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Выберите готового друга или вдохновитесь для индивидуального заказа.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-primary-800 text-white shadow-md'
                  : 'bg-white text-primary-600 hover:bg-primary-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-primary-50 rounded-xl">
            <Filter size={48} className="mx-auto text-primary-300 mb-4" />
            <p className="text-primary-600 text-lg">В этой категории пока пусто.</p>
            <button 
              onClick={() => setActiveFilter('ALL')}
              className="text-accent hover:underline mt-2"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
