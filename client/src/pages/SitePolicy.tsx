import { FileText } from "lucide-react";

export function SitePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mx-auto mb-6">
            <FileText className="text-white h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            サイトポリシー
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none text-slate-700">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">このサイトの利用について</h2>
              <p className="mb-6">
                当サイトは株式会社テクノピア（以下「当社」）が運営しています。当サイトを利用される前に以下の注意点をお読みいただき、ご了承いただいたうえでご利用ください。なお、当社は当サイトの利用条件を予告なしに変更することがございますので、最新のご利用条件をご確認ください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">当サイトを利用した売り込み</h2>
              <p className="mb-4">
                電話やメール、当サイトのフォームを利用した当社への売り込みの一切をお断りしています。
              </p>
              <p className="mb-4">
                特に、お問い合わせフォームを利用した売り込みが多くみうけられます。しかし、当社のフォームは、当社の既存のお客さまからの連絡や取り扱い商材に関してのお問い合わせ等を目的として設置したものです。売り込みはこの目的外の利用であり、当社業務の阻害要因となることから、サイトポリシーの記載とおりフォームを利用した売り込みの一切を固くお断りいたします。
              </p>
              <p>
                お問い合わせフォームや電話、メールを利用して、繰り返し売り込みをおこなう企業様には、しかるべき対応を取らせていただく場合があります。
              </p>
            </section>

            <div className="text-center mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600">以上</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}