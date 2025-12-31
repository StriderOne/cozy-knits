import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { HERO_TITLE, HERO_SUBTITLE, PRODUCTS } from '../constants';

export const Home: React.FC = () => {
  // Get featured products (e.g., first 3)
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="font-serif text-5xl md:text-7xl font-medium text-primary-900 leading-tight">
              {HERO_TITLE}
            </h1>
            <p className="text-lg text-primary-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {HERO_SUBTITLE}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/catalog">
                <Button className="w-full sm:w-auto">Перейти в каталог</Button>
              </Link>
              <Link to="/custom-order">
                <Button variant="outline" className="w-full sm:w-auto">Индивидуальный заказ</Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/hero/800/900" 
                alt="Knitted toy hero" 
                className="rounded-2xl shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-2xl z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Почему выбирают нас</span>
            <h2 className="font-serif text-4xl text-primary-900">Качество в деталях</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-primary-50 rounded-2xl text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-accent">
                <Star size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold">Premium Пряжа</h3>
              <p className="text-primary-600">
                Используем только сертифицированный хлопок и полушерсть. Не скатывается и не теряет цвет.
              </p>
            </div>
            
            <div className="p-8 bg-primary-50 rounded-2xl text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-accent">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold">Безопасность</h3>
              <p className="text-primary-600">
                Фурнитура на безопасном креплении изнутри. Идеально подходит даже для самых маленьких.
              </p>
            </div>
            
            <div className="p-8 bg-primary-50 rounded-2xl text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-accent">
                <HeartHandshake size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold">С Душой</h3>
              <p className="text-primary-600">
                Каждая игрушка создается вручную с любовью к своему делу. Вы получаете уникальное изделие.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel/Grid */}
      <section className="py-24 bg-primary-50">
        <div className="container mx-auto px-4">
           <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Популярное</span>
              <h2 className="font-serif text-4xl text-primary-900 mt-2">Любимцы наших клиентов</h2>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center text-primary-800 font-medium hover:text-accent transition-colors gap-2">
              Смотреть все <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/catalog">
              <Button variant="outline">Смотреть все работы</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
