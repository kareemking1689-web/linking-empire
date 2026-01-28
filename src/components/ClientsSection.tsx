import { Building2 } from 'lucide-react';

const GOVERNMENT_CLIENTS = [
  'هيئة قناة السويس',
  'محطة معالجة الصرف الصحي بالزقازيق',
  'محطة معالجة الصرف الصحي بجنوب سيناء',
  'الاتحاد المصري لكرة السلة'
];

const CORPORATE_CLIENTS = [
  'أسيك للتعدين',
  'يوني فارما للصناعات الدوائية',
  'مصر للتشييد والبناء',
  'الزمردة للصناعات الغذائية',
  'كونكورد للخدمات البيئية',
  'اليابان لحلول الغذاء',
  'الخليل فارما للتوزيع الدوائي',
  'نيو هوب للأسمدة والمواد الكيماوية',
  'إيجل باور للمحولات الكهربائية',
  'جلوبال تراك للاستيراد والهندسة',
  'تلا للمدارس الخاصة',
  'الحرية للمدارس الخاصة'
];

function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gold/10 rounded-full mb-6">
            <Building2 className="w-16 h-16 text-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            شركاء النجاح
          </h2>
          <p className="text-lg text-gray-600">
            نفخر بالشراكات الاستراتيجية مع أرقى المؤسسات الحكومية والخاصة
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy mb-8 text-right">
              القطاع الحكومي والعام
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GOVERNMENT_CLIENTS.map((client, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-navy/5 to-gold/5 border-2 border-navy/10 rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-navy w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-navy font-semibold group-hover:text-gold transition-colors text-right">
                      {client}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy mb-8 text-right">
              القطاع الخاص والشركات
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORPORATE_CLIENTS.map((client, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gold/5 to-navy/5 border-2 border-gold/20 rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gold w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-navy transition-colors">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-navy font-semibold group-hover:text-gold transition-colors text-right">
                      {client}
                    </p>
                  </div>
                </div>
              ))}

              <div className="group bg-gradient-to-br from-gold/10 to-navy/10 border-2 border-gold border-dashed rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-gold mb-2">+99</p>
                  <p className="text-navy font-semibold text-lg">عملاء آخرون</p>
                  <p className="text-gray-600 text-sm mt-2">في جميع أنحاء الجمهورية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
