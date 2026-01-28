import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Package,
  HardHat,
  Building2,
  Clock,
  BadgeCheck,
  DollarSign,
  MessageCircle,
  Mail,
  MapPin,
  Send
} from 'lucide-react';
import ClientsSection from '../components/ClientsSection';

function HomePage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <img
                src="/linking_empire_group_general_supplies_-_1_(1).png"
                alt="Linking Empire Group Logo"
                className="h-20 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-navy">Linking Empire Group</h1>
                <p className="text-xs text-gold">توريدات عمومية ومقاولات</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-navy hover:text-gold transition-colors font-semibold"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-navy hover:text-gold transition-colors font-semibold"
              >
                خدماتنا
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-navy hover:text-gold transition-colors font-semibold"
              >
                شركاء النجاح
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-navy hover:text-gold transition-colors font-semibold"
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-navy hover:text-gold transition-colors font-semibold"
              >
                اتصل بنا
              </button>
              <a
                href="tel:+201552222167"
                className="bg-gold text-white px-6 py-2 rounded-lg hover:bg-gold-dark transition-colors font-semibold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
              </a>
            </div>

            <button
              className="md:hidden text-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-navy hover:text-gold transition-colors font-semibold text-right"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-navy hover:text-gold transition-colors font-semibold text-right"
              >
                خدماتنا
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-navy hover:text-gold transition-colors font-semibold text-right"
              >
                شركاء النجاح
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-navy hover:text-gold transition-colors font-semibold text-right"
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-navy hover:text-gold transition-colors font-semibold text-right"
              >
                اتصل بنا
              </button>
              <a
                href="tel:+201552222167"
                className="bg-gold text-white px-6 py-2 rounded-lg hover:bg-gold-dark transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
              </a>
            </div>
          )}
        </nav>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(31, 58, 86, 0.85), rgba(31, 58, 86, 0.85)), url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ lineHeight: '1.8' }}>
            شريكك الاستراتيجي في<br className="md:hidden" /><span className="hidden md:inline"><br /></span>التوريدات العمومية والمقاولات
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
            نلتزم بأعلى معايير الجودة والدقة في التنفيذ لخدمة مشاريعكم
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate('/supplies')}
              className="bg-navy text-white px-12 py-5 rounded-lg hover:bg-navy-dark transition-all transform hover:scale-105 font-bold text-lg shadow-2xl w-full sm:w-auto"
            >
              بنود التوريدات
            </button>
            <button
              onClick={() => navigate('/contracting')}
              className="bg-gold text-white px-12 py-5 rounded-lg hover:bg-gold-dark transition-all transform hover:scale-105 font-bold text-lg shadow-2xl w-full sm:w-auto"
            >
              بنود المقاولات
            </button>
          </div>
        </div>
      </section>

      <ClientsSection />

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-gold/10 rounded-full mb-6">
              <Building2 className="w-16 h-16 text-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              من نحن
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-navy">Linking Empire Group</span> هي شركة رائدة في مجال التوريدات العمومية والمقاولات، نربط بين الجودة والتنفيذ المتميز لنقدم لعملائنا حلولاً متكاملة تلبي احتياجاتهم بدقة واحترافية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              نفخر بسجلنا الحافل في تنفيذ المشاريع الكبرى، حيث نضع ثقة عملائنا في المقام الأول ونسعى دائماً لتحقيق أعلى معايير الجودة في كل ما نقدمه.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              خدماتنا
            </h2>
            <p className="text-lg text-gray-600">
              نقدم مجموعة شاملة من الخدمات المتخصصة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all hover:border-gold group">
              <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Package className="w-10 h-10 text-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">التوريدات العمومية</h3>
              <p className="text-gray-600 leading-relaxed">
                نوفر جميع أنواع التوريدات العمومية بأعلى معايير الجودة وأفضل الأسعار التنافسية في السوق
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all hover:border-gold group">
              <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <HardHat className="w-10 h-10 text-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">المقاولات والإنشاءات</h3>
              <p className="text-gray-600 leading-relaxed">
                تنفيذ مشاريع البناء والإنشاءات بخبرة عالية ودقة متناهية مع الالتزام بالمواعيد المحددة
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all hover:border-gold group">
              <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <Building2 className="w-10 h-10 text-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">تجهيزات الفنادق والشركات</h3>
              <p className="text-gray-600 leading-relaxed">
                توريد وتركيب كافة التجهيزات اللازمة للفنادق والشركات بأحدث المواصفات العالمية
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              لماذا تختارنا؟
            </h2>
            <p className="text-xl text-gray-300">
              نقدم لك أفضل الخدمات بمعايير عالمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-gold w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">دقة في المواعيد</h3>
              <p className="text-gray-300 leading-relaxed">
                نلتزم بتسليم المشاريع في الوقت المحدد دون تأخير
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">أفضل الأسعار</h3>
              <p className="text-gray-300 leading-relaxed">
                نوفر أسعاراً تنافسية مع الحفاظ على أعلى معايير الجودة
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <BadgeCheck className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">جودة معتمدة</h3>
              <p className="text-gray-300 leading-relaxed">
                جميع منتجاتنا وخدماتنا معتمدة وفق المعايير الدولية
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                تواصل معنا
              </h2>
              <p className="text-lg text-gray-600">
                نحن هنا للإجابة على جميع استفساراتك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-4 rounded-full">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">اتصل بنا</h4>
                      <a href="tel:+201552222167" className="text-lg text-gray-700 hover:text-gold transition-colors">
                        +201552222167
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-4 rounded-full">
                      <MessageCircle className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">واتساب</h4>
                      <a
                        href="https://wa.me/201552222167"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-700 hover:text-gold transition-colors"
                      >
                        تواصل عبر الواتساب
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-4 rounded-full">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">الموقع</h4>
                      <p className="text-gray-700">مصر</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-navy font-semibold mb-2">الاسم</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="+20 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold mb-2">الرسالة</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold text-white py-3 rounded-lg hover:bg-gold-dark transition-colors font-bold text-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    إرسال
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/linking_empire_group_general_supplies_-_1_(1).png"
                alt="Linking Empire Group Logo"
                className="h-14 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">Linking Empire Group</h3>
                <p className="text-sm text-gold">توريدات عمومية ومقاولات</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© 2026 Linking Empire Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/201552222167"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default HomePage;
