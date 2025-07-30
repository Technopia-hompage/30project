import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Award } from "lucide-react";
// Using the CEO image from assets

export function CeoMessage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mx-auto mb-6">
            <Quote className="text-white h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {language === 'jp' && '社長メッセージ｜創業30周年に寄せて'}
            {language === 'ko' && '사장 메시지｜창업 30주년을 맞이하여'}
            {language === 'en' && 'CEO Message | On Our 30th Anniversary'}
            {language === 'zh' && '总裁致辞｜庆祝创业30周年'}
          </h1>
        </div>

        {/* CEO Message Content */}
        <div className="max-w-4xl mx-auto">
          {/* Message Content */}
          <div>
            <Card className="shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none text-slate-700">
                  <div className="mb-8">
                    <Quote className="text-corporate-blue h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                      {language === 'jp' && '創業30周年を迎えて'}
                      {language === 'ko' && '창업 30주년을 맞이하며'}
                      {language === 'en' && 'Celebrating Our 30th Anniversary'}
                      {language === 'zh' && '庆祝创业30周年'}
                    </h2>
                  </div>

                  {language === 'jp' && (
                    <div className="space-y-6">
                      <p>
                        この度、株式会社テクノピアは創業30周年という大きな節目を迎えることができました。これもひとえに、お客様、お取引先様、そして社員一同のご支援とご協力の賜物と心より感謝申し上げます。
                      </p>
                      <p>
                        1995年の創業以来、私たちは常に技術革新と品質向上を追求し続けてまいりました。時代の変化とともに、お客様のニーズも多様化し、私たちもそれに応えるべく進化を続けています。
                      </p>
                      <p>
                        この30年間で培った技術力と経験を基に、これからも皆様にご満足いただける製品とサービスの提供に努めてまいります。また、持続可能な社会の実現に向けて、環境に配慮した事業活動にも積極的に取り組んでまいります。
                      </p>
                      <p>
                        30周年は終わりではなく、新たなスタートだと考えております。次の30年に向けて、さらなる成長と発展を目指し、社員一丸となって努力してまいります。
                      </p>
                      <p>
                        今後とも変わらぬご支援とご愛顧を賜りますよう、よろしくお願い申し上げます。
                      </p>
                    </div>
                  )}

                  {language === 'ko' && (
                    <div className="space-y-6">
                      <p>
                        이번에 주식회사 테크노피아는 창업 30주년이라는 큰 전환점을 맞이할 수 있었습니다. 이는 오로지 고객님, 거래처 여러분, 그리고 임직원 모두의 지원과 협력의 결과라고 진심으로 감사드립니다.
                      </p>
                      <p>
                        1995년 창업 이래, 저희는 항상 기술 혁신과 품질 향상을 추구해 왔습니다. 시대의 변화와 함께 고객의 니즈도 다양화되었고, 저희도 이에 부응하기 위해 계속 진화하고 있습니다.
                      </p>
                      <p>
                        이 30년간 축적한 기술력과 경험을 바탕으로, 앞으로도 여러분께 만족하실 수 있는 제품과 서비스 제공에 노력하겠습니다. 또한 지속 가능한 사회 실현을 위해 환경을 고려한 사업 활동에도 적극적으로 임하겠습니다.
                      </p>
                      <p>
                        30주년은 끝이 아니라 새로운 시작이라고 생각합니다. 다음 30년을 향해 더욱 성장하고 발전하기 위해 임직원 일동이 하나가 되어 노력하겠습니다.
                      </p>
                      <p>
                        앞으로도 변함없는 지원과 사랑을 부탁드립니다.
                      </p>
                    </div>
                  )}

                  {language === 'en' && (
                    <div className="space-y-6">
                      <p>
                        Technopia Corporation has reached the significant milestone of our 30th anniversary. This achievement is entirely due to the support and cooperation of our customers, business partners, and all our employees, for which we are deeply grateful.
                      </p>
                      <p>
                        Since our founding in 1995, we have continuously pursued technological innovation and quality improvement. As times have changed, customer needs have become more diverse, and we have continued to evolve to meet these demands.
                      </p>
                      <p>
                        Based on the technical expertise and experience we have accumulated over these 30 years, we will continue to strive to provide products and services that satisfy our customers. We are also actively working on environmentally conscious business activities toward the realization of a sustainable society.
                      </p>
                      <p>
                        We consider this 30th anniversary not as an end, but as a new beginning. Toward the next 30 years, we will work together as one team to achieve further growth and development.
                      </p>
                      <p>
                        We ask for your continued support and patronage in the future.
                      </p>
                    </div>
                  )}

                  {language === 'zh' && (
                    <div className="space-y-6">
                      <p>
                        这次，株式会社Technopia迎来了创业30周年这一重大里程碑。这完全得益于客户、合作伙伴以及全体员工的支持与合作，我们深表感谢。
                      </p>
                      <p>
                        自1995年创业以来，我们始终追求技术创新和质量提升。随着时代的变化，客户需求也日趋多样化，我们也在不断进化以满足这些需求。
                      </p>
                      <p>
                        基于30年来积累的技术实力和经验，我们将继续努力提供让客户满意的产品和服务。同时，为了实现可持续发展的社会，我们也积极开展环保的商业活动。
                      </p>
                      <p>
                        30周年不是终点，而是新的起点。面向下一个30年，我们将团结一心，努力实现进一步的成长和发展。
                      </p>
                      <p>
                        今后也请继续给予我们不变的支持和厚爱。
                      </p>
                    </div>
                  )}

                  <div className="mt-12 pt-8 border-t border-slate-200 text-right">
                  
                    <p className="text-slate-600">株式会社テクノピア</p>
                    <p className="text-slate-600">代表取締役社長 朴 栽世</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}