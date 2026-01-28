import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, HardHat } from 'lucide-react';

function ContractingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4">
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
        </nav>
      </header>

      <button
        onClick={() => navigate('/')}
        className="fixed top-24 right-4 md:right-8 z-40 flex items-center gap-2 text-navy hover:text-gold transition-colors font-semibold"
      >
        <ArrowRight className="w-5 h-5" />
        العودة
      </button>

      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(31, 58, 86, 0.85), rgba(31, 58, 86, 0.85)), url(https://images.pexels.com/photos/3938021/pexels-photo-3938021.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block p-6 bg-gold/20 rounded-full mb-8">
            <HardHat className="w-20 h-20 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            بنود المقاولات
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            تنفيذ المشاريع الإنشائية بخبرة عالية وجودة عالمية مع الالتزام الكامل بالمواعيد
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            نتولى جميع جوانب المشاريع من التصميم والإشراف إلى التنفيذ والتسليم بمعايير احترافية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+201552222167"
              className="bg-gold text-white px-8 py-4 rounded-lg hover:bg-gold-dark transition-all transform hover:scale-105 font-bold text-lg"
            >
              اطلب عرض مشروع
            </a>
            <a
              href="https://wa.me/201552222167"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 font-bold text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-right">
              أنواع المشاريع
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'مشاريع البناء والإنشاءات',
                'الصيانة والترميم',
                'المشاريع الصناعية',
                'مشاريع الهياكل الفولاذية',
                'الطرق والبنية التحتية',
                'مشاريع معالجة المياه والصرف',
                'التجهيزات والتركيبات',
                'تحسين البيئة والنظافة'
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg border-r-4 border-gold transition-all"
                >
                  <h3 className="text-xl font-bold text-navy text-right mb-3">
                    {service}
                  </h3>
                  <div className="w-16 h-1 bg-gold rounded-full ml-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              تواصل معنا لمشروعك
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              دعنا نساعدك في تحويل أفكارك إلى واقع بجودة عالمية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+201552222167"
                className="bg-gold text-white px-8 py-3 rounded-lg hover:bg-gold-dark transition-all font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل بنا
              </a>
              <a
                href="https://wa.me/201552222167"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
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

export default ContractingPage;
