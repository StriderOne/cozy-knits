import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { ChevronLeft, Check, AlertCircle } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState<string>('');
  
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h2 className="font-serif text-3xl text-primary-900 mb-4">Товар не найден</h2>
        <Link to="/catalog">
          <Button variant="outline">Вернуться в каталог</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 fade-in">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link to="/catalog" className="inline-flex items-center text-primary-500 hover:text-primary-800 transition-colors">
            <ChevronLeft size={20} /> Назад в каталог
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-primary-50 shadow-lg">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105 cursor-zoom-in"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col h-full">
            <div className="mb-auto">
              <span className="text-accent font-bold tracking-wider uppercase text-sm">
                 {product.category === 'ANIMALS' ? 'Зверята' : product.category === 'DOLLS' ? 'Куклы' : 'Декор'}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-900 mt-2 mb-6">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-medium text-primary-800">{product.price.toLocaleString('ru-RU')} ₽</span>
                {product.inStock ? (
                  <span className="flex items-center gap-1 text-green-600 text-sm font-medium px-3 py-1 bg-green-50 rounded-full">
                    <Check size={16} /> В наличии
                  </span>
                ) : (
                   <span className="flex items-center gap-1 text-orange-600 text-sm font-medium px-3 py-1 bg-orange-50 rounded-full">
                    <AlertCircle size={16} /> Под заказ
                  </span>
                )}
              </div>

              <div className="prose prose-stone mb-8 text-primary-600">
                <p>{product.fullDescription}</p>
              </div>

              <div className="space-y-4 mb-10 border-t border-primary-200 pt-6">
                 <div className="flex justify-between md:justify-start gap-8">
                    <span className="font-bold text-primary-900 w-24">Материалы:</span>
                    <span className="text-primary-600">{product.materials}</span>
                 </div>
                 <div className="flex justify-between md:justify-start gap-8">
                    <span className="font-bold text-primary-900 w-24">Размер:</span>
                    <span className="text-primary-600">{product.dimensions}</span>
                 </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4 bg-primary-50 p-6 rounded-2xl border border-primary-100">
              <p className="text-center text-sm text-primary-500 font-medium mb-2 uppercase tracking-wide">Купить на маркетплейсах</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.marketplaceLinks.wildberries && (
                  <Button variant="wb" href={product.marketplaceLinks.wildberries} className="w-full">
                    Wildberries
                  </Button>
                )}
                {product.marketplaceLinks.ozon && (
                  <Button variant="ozon" href={product.marketplaceLinks.ozon} className="w-full">
                    Ozon
                  </Button>
                )}
                {product.marketplaceLinks.yandex && (
                  <Button variant="yandex" href={product.marketplaceLinks.yandex} className="w-full">
                    Яндекс.Маркет
                  </Button>
                )}
              </div>
              {!product.inStock && (
                <div className="mt-4 pt-4 border-t border-primary-200 text-center">
                    <Link to="/custom-order" className="text-accent font-medium hover:underline">
                        Заказать индивидуальное изготовление
                    </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
