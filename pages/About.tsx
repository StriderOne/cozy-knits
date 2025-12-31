import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 fade-in">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-serif text-5xl text-primary-900 mb-6">О Мастерской</h1>
          <p className="text-xl text-primary-600 leading-relaxed">
            CozyKnits — это небольшая семейная мастерская, где каждый моток пряжи превращается в историю. 
            Мы не просто вяжем игрушки, мы создаем воспоминания детства.
          </p>
        </div>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="md:w-1/2">
             <img 
               src="https://picsum.photos/seed/knittingprocess/800/600" 
               alt="Process of knitting" 
               className="rounded-2xl shadow-xl w-full"
             />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl text-primary-800">Как все началось</h2>
            <p className="text-primary-600 leading-relaxed">
              Все началось с рождения моей дочери. Я искала для нее первую игрушку — безопасную, тактильно приятную и "живую". 
              Магазинные варианты из пластика казались холодными. Тогда я взяла в руки крючок.
            </p>
            <p className="text-primary-600 leading-relaxed">
              Спустя 5 лет это увлечение переросло в мастерскую, где главными принципами стали качество и безопасность.
              Мы не гонимся за тиражами, предпочитая уделять внимание каждой петельке.
            </p>
          </div>
        </div>

        {/* Materials / Quality Grid */}
        <div className="bg-primary-50 rounded-3xl p-8 md:p-16">
          <h2 className="font-serif text-3xl text-primary-900 text-center mb-12">Наши стандарты качества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm">
                <Sparkles />
              </div>
              <h3 className="font-serif text-xl font-bold">Материалы</h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                Мы используем пряжу <b>YarnArt Jeans</b> (55% хлопок, 45% полиакрил) и <b>Alize Cotton Gold</b>. 
                Она гипоаллергенна, мягкая, не скатывается после стирки и сохраняет цвет годами.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm">
                <ShieldCheck />
              </div>
              <h3 className="font-serif text-xl font-bold">Безопасность</h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                Все пластиковые детали (глазки, носики) имеют <b>безопасное винтовое крепление</b> изнутри. 
                Ребенок не сможет их оторвать или отгрызть. Наполнитель — первичный холлофайбер.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm">
                <Heart />
              </div>
              <h3 className="font-serif text-xl font-bold">Уход</h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                Игрушки можно стирать! Рекомендуется ручная стирка или деликатный режим в машинке при 30°C. 
                Сушить на горизонтальной поверхности. Каждая игрушка приходит с памяткой по уходу.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
