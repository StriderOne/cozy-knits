import React, { useState } from 'react';
import { Button } from '../components/Button';
import { OrderForm } from '../types';
import { Send, Camera, ExternalLink } from 'lucide-react';

export const CustomOrder: React.FC = () => {
  const [formData, setFormData] = useState<OrderForm>({
    name: '',
    contactType: 'TELEGRAM',
    contactValue: '',
    productType: 'Зверушка',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Формируем сообщение
    const message = `👋 Здравствуйте! Меня зовут ${formData.name}.
🧶 Хочу заказать: ${formData.productType}.
📝 Детали заказа: ${formData.details}.
📱 Мой контакт для связи: ${formData.contactValue} (${formData.contactType === 'TELEGRAM' ? 'Telegram' : 'WhatsApp'}).`;

    const encodedMessage = encodeURIComponent(message);
    
    // Логика редиректа
    // ЗАМЕНИТЕ НОМЕР/ЮЗЕРНЕЙМ на реальные
    if (formData.contactType === 'WHATSAPP') {
      window.open(`https://wa.me/79000000000?text=${encodedMessage}`, '_blank');
    } else {
      // Для Telegram
      window.open(`https://t.me/cozyknits_admin?text=${encodedMessage}`, '_blank');
    }

    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 fade-in min-h-screen bg-primary-50">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Information Side */}
          <div className="md:w-5/12 bg-primary-800 text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Индивидуальный заказ</h2>
              <p className="text-primary-200 mb-8 leading-relaxed">
                Хотите игрушку, которой больше ни у кого нет? Или нужно повторить работу в другом цвете?
                Мы с радостью воплотим вашу идею в жизнь.
              </p>
              
              <ul className="space-y-4 text-sm text-primary-100">
                <li className="flex gap-3">
                   <div className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center font-bold">1</div>
                   <span>Заполните форму заявки</span>
                </li>
                <li className="flex gap-3">
                   <div className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center font-bold">2</div>
                   <span>Вас перенаправит в мессенджер с готовым сообщением</span>
                </li>
                <li className="flex gap-3">
                   <div className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center font-bold">3</div>
                   <span>Обсуждаем детали и предоплату</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 text-sm text-primary-400">
               Средний срок изготовления: 5-7 дней
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 p-10">
            {isSubmitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary-900">Переходим в мессенджер...</h3>
                  <p className="text-primary-600">Если окно чата не открылось автоматически, нажмите кнопку ниже.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>Заполнить заново</Button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-primary-50 border border-primary-200 focus:ring-2 focus:ring-accent focus:outline-none transition-all"
                    placeholder="Мария"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactType" className="block text-sm font-medium text-primary-700 mb-1">Где вам ответить?</label>
                    <select
                      id="contactType"
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary-50 border border-primary-200 focus:ring-2 focus:ring-accent focus:outline-none"
                    >
                      <option value="TELEGRAM">Telegram</option>
                      <option value="WHATSAPP">WhatsApp</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contactValue" className="block text-sm font-medium text-primary-700 mb-1">Телефон / Никнейм</label>
                    <input
                      type="text"
                      id="contactValue"
                      name="contactValue"
                      required
                      value={formData.contactValue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary-50 border border-primary-200 focus:ring-2 focus:ring-accent focus:outline-none"
                      placeholder="@username или +7..."
                    />
                  </div>
                </div>

                <div>
                   <label htmlFor="productType" className="block text-sm font-medium text-primary-700 mb-1">Тип игрушки</label>
                    <select
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-primary-50 border border-primary-200 focus:ring-2 focus:ring-accent focus:outline-none"
                    >
                      <option value="Зверушка">Зверушка</option>
                      <option value="Кукла">Кукла</option>
                      <option value="Погремушка">Погремушка / Грызунок</option>
                      <option value="Плед">Детский плед</option>
                      <option value="Другое">Другое</option>
                    </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-primary-700 mb-1">Пожелания (цвет, размер, детали)</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-primary-50 border border-primary-200 focus:ring-2 focus:ring-accent focus:outline-none resize-none"
                    placeholder="Опишите игрушку вашей мечты..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-1">Референс (фото пример)</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-primary-200 border-dashed rounded-lg hover:bg-primary-50 transition-colors cursor-pointer relative">
                    <div className="space-y-1 text-center">
                      <Camera className="mx-auto h-12 w-12 text-primary-400" />
                      <div className="flex text-sm text-primary-600 justify-center">
                        <span className="relative rounded-md font-medium text-primary-500">
                          (Отправьте фото прямо в чат)
                        </span>
                      </div>
                      <p className="text-xs text-primary-400">Функция загрузки доступна в чате</p>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <span>Перейти в {formData.contactType === 'TELEGRAM' ? 'Telegram' : 'WhatsApp'}</span>
                  <ExternalLink size={20} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};