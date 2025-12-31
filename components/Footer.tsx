import React from 'react';
import { Instagram, Send, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-primary-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">CozyKnits</h3>
            <p className="text-primary-300 text-sm leading-relaxed max-w-xs">
              Мастерская душевных игрушек. Мы создаем маленьких друзей, которые дарят большие эмоции.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-white font-medium uppercase tracking-wider text-sm">Меню</h4>
            <ul className="space-y-2 text-sm text-primary-300">
              <li><Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link></li>
              <li><Link to="/custom-order" className="hover:text-white transition-colors">Индивидуальный заказ</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">О качестве</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-white font-medium uppercase tracking-wider text-sm">Контакты</h4>
            <div className="space-y-3 text-sm text-primary-300">
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <Instagram size={18} /> @cozyknits_workshop
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                <Send size={18} /> Telegram
              </a>
              <a href="mailto:hello@cozyknits.ru" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} /> hello@cozyknits.ru
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={18} /> Москва, доставка по РФ
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-xs text-primary-500">
          © {new Date().getFullYear()} CozyKnits. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
