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
  Send,
  FileText
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
        <nav className="container mx-auto px-4 py-1">
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
                href="/portofolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-gold transition-colors font-semibold flex items-center gap-1"
              >
                <FileText className="w-4 h-4" />
                البروفايل
              </a>
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
                href="/portofolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-gold transition-colors font-semibold flex items-center gap-2 text-right"
              >
                <FileText className="w-4 h-4" />
                البروفايل
              </a>
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
            <a
              href="/portofolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-navy transition-all transform hover:scale-105 font-bold text-lg shadow-2xl w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              بروفايل الشركة
            </a>
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

      <footer className="bg-navy text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-right">
              <div className="flex items-center gap-3 justify-center md:justify-start">
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
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                شريكك الاستراتيجي في التوريدات العمومية والمقاولات منذ عام 2023، نلتزم بأعلى معايير الجودة والدقة في التنفيذ.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="font-bold text-gold text-base border-b border-gold/30 pb-2 w-full text-center md:text-right mb-1">روابط سريعة</h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-2 w-full">
                {[
                  { label: 'الرئيسية', id: 'home' },
                  { label: 'خدماتنا', id: 'services' },
                  { label: 'شركاء النجاح', id: 'clients' },
                  { label: 'من نحن', id: 'about' },
                  { label: 'تواصل معنا', id: 'contact' },
                ].map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-gold transition-colors text-sm text-center md:text-right"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="font-bold text-gold text-base border-b border-gold/30 pb-2 w-full text-center md:text-right mb-1">تواصل معنا</h4>
              <a href="tel:+201552222167" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm">
                <Phone className="w-4 h-4 text-gold" />
                +201552222167
              </a>
              <a href="https://wa.me/201552222167" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-gold flex-shrink-0">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.025 7.773L0 32l8.424-2.01A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.767-1.853l-.485-.288-5.003 1.194 1.237-4.87-.317-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.63-.199-.896.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.464.299-.863.1-.398-.2-1.683-.62-3.205-1.98-1.184-1.057-1.984-2.363-2.216-2.761-.232-.398-.025-.614.174-.812.179-.178.398-.464.597-.696.2-.232.266-.398.399-.663.133-.266.066-.498-.033-.697-.1-.199-.896-2.161-1.228-2.959-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.498-.365.398-1.394 1.362-1.394 3.323s1.427 3.854 1.626 4.12c.2.265 2.809 4.287 6.807 6.013.951.411 1.693.656 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.099-.166-.365-.265-.763-.464z"/>
                </svg>
                واتساب
              </a>
              <div className="flex items-center gap-4 mt-1">
                <a
                  href="https://wa.me/201552222167"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="bg-[#25D366] p-2.5 rounded-full hover:scale-110 transition-transform"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.025 7.773L0 32l8.424-2.01A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.767-1.853l-.485-.288-5.003 1.194 1.237-4.87-.317-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.63-.199-.896.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.464.299-.863.1-.398-.2-1.683-.62-3.205-1.98-1.184-1.057-1.984-2.363-2.216-2.761-.232-.398-.025-.614.174-.812.179-.178.398-.464.597-.696.2-.232.266-.398.399-.663.133-.266.066-.498-.033-.697-.1-.199-.896-2.161-1.228-2.959-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.498-.365.398-1.394 1.362-1.394 3.323s1.427 3.854 1.626 4.12c.2.265 2.809 4.287 6.807 6.013.951.411 1.693.656 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.099-.166-.365-.265-.763-.464z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583299505254"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-[#1877F2] p-2.5 rounded-full hover:scale-110 transition-transform"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-4 text-center">
            <p className="text-gray-400 text-sm">© 2023–2026 Linking Empire Group. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/201552222167"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe5d] transition-all transform hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.025 7.773L0 32l8.424-2.01A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.767-1.853l-.485-.288-5.003 1.194 1.237-4.87-.317-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.63-.199-.896.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.464.299-.863.1-.398-.2-1.683-.62-3.205-1.98-1.184-1.057-1.984-2.363-2.216-2.761-.232-.398-.025-.614.174-.812.179-.178.398-.464.597-.696.2-.232.266-.398.399-.663.133-.266.066-.498-.033-.697-.1-.199-.896-2.161-1.228-2.959-.323-.776-.651-.671-.896-.683l-.763-.013c-.265 0-.696.1-1.061.498-.365.398-1.394 1.362-1.394 3.323s1.427 3.854 1.626 4.12c.2.265 2.809 4.287 6.807 6.013.951.411 1.693.656 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.099-.166-.365-.265-.763-.464z"/>
        </svg>
      </a>
    </div>
  );
}

export default HomePage;
