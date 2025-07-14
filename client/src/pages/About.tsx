import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/i18n";
import { Target, Eye, Heart, Building, Users, Globe, Award } from "lucide-react";
import ceoImage from "@assets/スクリーンショット 2025-06-04 150711.png";
import organizationChart from "@assets/organization-chart.svg";

export function About() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {getTranslation('company.title', language)}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {getTranslation('company.subtitle', language)}
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">30</div>
              <div className="text-slate-600">{getTranslation('company.stats.years', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">25</div>
              <div className="text-slate-600">{getTranslation('company.stats.employees', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">10+</div>
              <div className="text-slate-600">{getTranslation('company.stats.locations', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">1000+</div>
              <div className="text-slate-600">{getTranslation('company.stats.partners', language)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission Card */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.mission.title', language)}
                </h3>
                <p className="text-slate-600 text-lg">
                  {getTranslation('company.mission.content', language)}
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.vision.title', language)}
                </h3>
                <p className="text-slate-600 text-lg">
                  {getTranslation('company.vision.content', language)}
                </p>
              </CardContent>
            </Card>

            {/* Values Card */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                  <Heart className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.values.title', language)}
                </h3>
                <p className="text-slate-600 text-lg">
                  {getTranslation('company.values.content', language)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                {language === 'jp' && '社長メッセージ｜創業30周年に寄せて'}
                {language === 'ko' && '사장 메시지 | 창업 30주년을 맞이하여'}
                {language === 'en' && 'CEO Message | On Our 30th Anniversary'}
                {language === 'zh' && '总裁致辞 | 创业30周年'}
              </h3>
              <div className="text-slate-600 text-base mb-8 leading-relaxed space-y-4">
                {language === 'jp' && (
                  <>
                    <p>株式会社テクノピアは1995年の創業以来、「技術で社会に貢献する」という信念のもと、医療・ヘルスケア・環境分野を中心に、多岐にわたる製品とサービスを提供してまいりました。</p>
                    <p>特に、人々の「視界の未来」を支えるオルソケラトロジーレンズの普及に注力し、多くの医療機関と患者様の信頼を築いてきたことは、私たちの誇りです。</p>
                    <p>変化の激しい時代の中でも、私たちは「安心」「信頼」「挑戦」という価値を大切にしながら、常にお客様の声に耳を傾け、グローバルな視点で新たな価値を生み出し続けてきました。</p>
                    <p>"YES"から始まったテクノピアの挑戦は、「NOを言わない」、「不可能を可能にする」という情熱とともに、30年にわたり多くの価値を創造し、成長を遂げてきました。</p>
                    <p>その歩みは、お客様からのご支援・ご信頼があってこそのものです。</p>
                    <p>これからの30年も、社員一人ひとりとともに、テクノピアを作っていきます。「未来を見据えた技術」で、より良い社会と人々の幸福に貢献してまいります。</p>
                    <p>今後とも、変わらぬご支援を賜りますよう心よりお願い申し上げます。</p>
                  </>
                )}
                {language === 'ko' && (
                  <>
                    <p>주식회사 테크노피아는 1995년 창업 이래 "기술로 사회에 기여한다"는 신념 하에 의료·헬스케어·환경 분야를 중심으로 다양한 제품과 서비스를 제공해왔습니다.</p>
                    <p>특히 사람들의 "시야의 미래"를 지원하는 오르토케라톨로지 렌즈 보급에 주력하여 많은 의료기관과 환자들의 신뢰를 구축해온 것이 저희의 자랑입니다.</p>
                    <p>변화가 격한 시대 속에서도 저희는 "안심", "신뢰", "도전"이라는 가치를 소중히 여기며 항상 고객의 목소리에 귀를 기울이고 글로벌한 관점에서 새로운 가치를 창출해 왔습니다.</p>
                    <p>"YES"에서 시작된 테크노피아의 도전은 "NO라고 말하지 않는다", "불가능을 가능하게 한다"는 열정과 함께 30년에 걸쳐 많은 가치를 창조하고 성장을 이루어왔습니다.</p>
                    <p>그 걸음은 고객들의 지원과 신뢰가 있었기에 가능한 것이었습니다.</p>
                    <p>앞으로의 30년도 직원 한 사람 한 사람과 함께 테크노피아를 만들어 나가겠습니다. "미래를 내다보는 기술"로 더 나은 사회와 사람들의 행복에 기여해 나가겠습니다.</p>
                    <p>앞으로도 변함없는 지원을 부탁드립니다.</p>
                  </>
                )}
                {language === 'en' && (
                  <>
                    <p>Since our founding in 1995, Technopia Corporation has provided a wide range of products and services, primarily in the medical, healthcare, and environmental fields, based on our belief of "contributing to society through technology."</p>
                    <p>In particular, we are proud to have focused on promoting orthokeratology lenses that support people's "future of vision" and built trust with many medical institutions and patients.</p>
                    <p>Even in rapidly changing times, we have valued "security," "trust," and "challenge," always listening to our customers' voices and continuing to create new value from a global perspective.</p>
                    <p>Technopia's challenge that began with "YES" has created many values and achieved growth over 30 years with the passion of "never saying NO" and "making the impossible possible."</p>
                    <p>This journey has been possible thanks to the support and trust of our customers.</p>
                    <p>For the next 30 years, we will continue to build Technopia together with each and every employee. We will contribute to a better society and people's happiness with "technology that looks to the future."</p>
                    <p>We sincerely ask for your continued support.</p>
                  </>
                )}
                {language === 'zh' && (
                  <>
                    <p>技术乌托邦株式会社自1995年创业以来，秉承"以技术为社会做贡献"的信念，以医疗·健康护理·环境领域为中心，提供多样化的产品和服务。</p>
                    <p>特别是专注于推广支持人们"视野未来"的角膜塑形镜，与众多医疗机构和患者建立了信任关系，这是我们的骄傲。</p>
                    <p>即使在变化剧烈的时代中，我们也珍视"安心"、"信赖"、"挑战"的价值，始终倾听客户的声音，从全球视角持续创造新价值。</p>
                    <p>从"YES"开始的技术乌托邦挑战，以"不说NO"、"让不可能成为可能"的热情，在30年间创造了众多价值，实现了成长。</p>
                    <p>这一历程正是因为有了客户的支持和信赖才得以实现。</p>
                    <p>未来的30年，我们也将与每一位员工一起打造技术乌托邦。以"面向未来的技术"为更美好的社会和人们的幸福做出贡献。</p>
                    <p>今后也请继续给予我们不变的支持。</p>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={ceoImage} 
                alt="CEO Portrait" 
                className="rounded-2xl shadow-2xl w-64 h-auto mb-6"
              />
              <div className="text-center">
                <div className="text-xl font-semibold text-slate-900 mb-1">
                  {language === 'jp' && '朴 栽世'}
                  {language === 'ko' && '박 재세'}
                  {language === 'en' && 'JS. Park'}
                  {language === 'zh' && '朴 栽世'}
                </div>
                <div className="text-slate-600">
                  {language === 'jp' && '代表取締役社長'}
                  {language === 'ko' && '대표이사 사장'}
                  {language === 'en' && 'President & CEO'}
                  {language === 'zh' && '董事长兼总裁'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {language === 'jp' && '品質方針'}
              {language === 'ko' && '품질 방침'}
              {language === 'en' && 'Quality Policy'}
              {language === 'zh' && '质量方针'}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Main Quality Policy Statement */}
                  <div className="bg-gradient-to-r from-corporate-blue/5 to-blue-50 rounded-lg p-6 border-l-4 border-corporate-blue">
                    <p className="text-lg leading-relaxed text-slate-700">
                      {language === 'jp' && (
                        <>
                          当社の品質方針は、<br />
                          <strong className="text-corporate-blue">「顧客の要求事項を満足させる製品を継続的かつ安定的に提供し、医療機器業界ならびに医療を必要としている人々をとおして社会に貢献する」</strong><br />
                          ことである。
                        </>
                      )}
                      {language === 'ko' && (
                        <>
                          당사의 품질 방침은<br />
                          <strong className="text-corporate-blue">「고객의 요구사항을 만족시키는 제품을 지속적이고 안정적으로 제공하여, 의료기기 업계 및 의료를 필요로 하는 사람들을 통해 사회에 기여한다」</strong><br />
                          는 것입니다.
                        </>
                      )}
                      {language === 'en' && (
                        <>
                          Our quality policy is to<br />
                          <strong className="text-corporate-blue">"continuously and stably provide products that satisfy customer requirements, contributing to society through the medical device industry and people who need medical care."</strong>
                        </>
                      )}
                      {language === 'zh' && (
                        <>
                          我公司的质量方针是<br />
                          <strong className="text-corporate-blue">「持续稳定地提供满足客户要求的产品，通过医疗器械行业以及需要医疗的人们为社会做贡献」</strong>
                        </>
                      )}
                    </p>
                  </div>

                  {/* Quality Implementation Details */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      {language === 'jp' && '顧客の要求事項とは、コスト、納期を含んだ「品質」に具体化されるために工程を見直し改善し安定した「品質」を維持できるようにする。'}
                      {language === 'ko' && '고객의 요구사항은 비용, 납기를 포함한 「품질」로 구체화되기 때문에 공정을 재검토하고 개선하여 안정된 「품질」을 유지할 수 있도록 합니다.'}
                      {language === 'en' && 'Customer requirements are embodied in "quality" including cost and delivery time, so we review and improve processes to maintain stable "quality".'}
                      {language === 'zh' && '客户要求体现在包括成本、交期在内的「质量」中，因此要重新审视改善工程，以便能够维持稳定的「质量」。'}
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        {language === 'jp' && '顧客の要求に応えるために'}
                        {language === 'ko' && '고객의 요구에 응하기 위해'}
                        {language === 'en' && 'To Meet Customer Requirements'}
                        {language === 'zh' && '为了满足客户要求'}
                      </h3>
                      <ol className="space-y-3 text-slate-600">
                        <li className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-corporate-blue text-white text-sm rounded-full flex items-center justify-center font-semibold">1</span>
                          <span>
                            {language === 'jp' && '顧客の要求事項を確実に理解する。'}
                            {language === 'ko' && '고객의 요구사항을 확실히 이해한다.'}
                            {language === 'en' && 'Understand customer requirements accurately.'}
                            {language === 'zh' && '确实理解客户的要求事项。'}
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-corporate-blue text-white text-sm rounded-full flex items-center justify-center font-semibold">2</span>
                          <span>
                            {language === 'jp' && '顧客からの反応及び業界の動向、監督官庁の施政方針を確認する。'}
                            {language === 'ko' && '고객의 반응 및 업계 동향, 감독관청의 시정방침을 확인한다.'}
                            {language === 'en' && 'Monitor customer feedback, industry trends, and regulatory policies.'}
                            {language === 'zh' && '确认客户反应以及行业动向、监管部门的施政方针。'}
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-corporate-blue text-white text-sm rounded-full flex items-center justify-center font-semibold">3</span>
                          <span>
                            {language === 'jp' && '不具合品の発生防止のために品質確認体制を確立する。'}
                            {language === 'ko' && '불량품 발생 방지를 위해 품질 확인 체제를 확립한다.'}
                            {language === 'en' && 'Establish quality assurance systems to prevent defective products.'}
                            {language === 'zh' && '为防止不良品的发生建立质量确认体制。'}
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-corporate-blue text-white text-sm rounded-full flex items-center justify-center font-semibold">4</span>
                          <span>
                            {language === 'jp' && '従業員のレベルアップを図るために「教育・訓練」を行う。'}
                            {language === 'ko' && '직원의 레벨업을 위해 「교육·훈련」을 실시한다.'}
                            {language === 'en' && 'Conduct "education and training" to improve employee capabilities.'}
                            {language === 'zh' && '为提高员工水平进行「教育·培训」。'}
                          </span>
                        </li>
                      </ol>
                    </div>

                    {/* Management Commitment */}
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <p className="text-slate-700 leading-relaxed">
                        {language === 'jp' && '経営者である私は、本品質システムの管理監督者として、本品質システムの履行に関してすべての責任を負うとともに従業員に本品質管理マニュアルの趣旨・内容を理解・認識させ、遵守させる。'}
                        {language === 'ko' && '경영자인 나는, 본 품질시스템의 관리감독자로서, 본 품질시스템의 이행에 관해 모든 책임을 지는 동시에 직원들에게 본 품질관리 매뉴얼의 취지·내용을 이해·인식시키고, 준수하게 한다.'}
                        {language === 'en' && 'As the management supervisor of this quality system, I take full responsibility for the implementation of this quality system and ensure that employees understand, recognize, and comply with the purpose and content of this quality management manual.'}
                        {language === 'zh' && '作为经营者的我，作为本质量系统的管理监督者，对本质量系统的履行承担全部责任，同时让员工理解认识本质量管理手册的宗旨内容，并遵守执行。'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Organizational Chart and Certifications */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    {language === 'jp' && '組織図'}
                    {language === 'ko' && '조직도'}
                    {language === 'en' && 'Organizational Chart'}
                    {language === 'zh' && '组织图'}
                  </h3>
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <img 
                      src={organizationChart} 
                      alt="Technopia Organizational Chart"
                      className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                      onClick={() => window.open(organizationChart, '_blank')}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    {language === 'jp' && '業許可及び認証'}
                    {language === 'ko' && '업허가 및 인증'}
                    {language === 'en' && 'Licenses & Certifications'}
                    {language === 'zh' && '业务许可及认证'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* JAWA 인증서 */}
                    <div className="bg-white rounded-lg p-4 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
                      <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4">
                        <img 
                          src="/attached_assets/ninsyou10_1752453924698.jpg" 
                          alt="JAWA 団体PL保険加入証 - Japan Light Alloy Wheel Association PL Insurance Certificate"
                          className="w-full h-full object-contain bg-gray-50 cursor-pointer hover:scale-105 transition-transform duration-200"
                          onClick={() => window.open('/attached_assets/ninsyou10_1752453924698.jpg', '_blank')}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-slate-900 mb-2">
                          {language === 'jp' && 'JAWA 団体PL保険加入証'}
                          {language === 'ko' && 'JAWA 단체PL보험가입증'}
                          {language === 'en' && 'JAWA Group PL Insurance Certificate'}
                          {language === 'zh' && 'JAWA团体PL保险加入证'}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {language === 'jp' && '日本軽合金ホイール協会'}
                          {language === 'ko' && '일본경합금휠협회'}
                          {language === 'en' && 'Japan Light Alloy Wheel Association'}
                          {language === 'zh' && '日本轻合金轮毂协会'}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                          {language === 'jp' && '証券番号: NL13362701'}
                          {language === 'ko' && '증권번호: NL13362701'}
                          {language === 'en' && 'Certificate No: NL13362701'}
                          {language === 'zh' && '证券号码: NL13362701'}
                        </p>
                      </div>
                    </div>

                    {/* 機械工具商 인증서 */}
                    <div className="bg-white rounded-lg p-4 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
                      <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4">
                        <img 
                          src="/attached_assets/ninsyou6_s_1752453933654.jpg" 
                          alt="機械工具商 認定証 - Machinery and Tools Dealer Certification"
                          className="w-full h-full object-contain bg-gray-50 cursor-pointer hover:scale-105 transition-transform duration-200"
                          onClick={() => window.open('/attached_assets/ninsyou6_s_1752453933654.jpg', '_blank')}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-slate-900 mb-2">
                          {language === 'jp' && '機械工具商 認定証'}
                          {language === 'ko' && '기계공구상 인정증'}
                          {language === 'en' && 'Machinery & Tools Dealer Certificate'}
                          {language === 'zh' && '机械工具商认定证'}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {language === 'jp' && '東京都認定'}
                          {language === 'ko' && '도쿄도 인정'}
                          {language === 'en' && 'Tokyo Metropolitan Government Certified'}
                          {language === 'zh' && '东京都认定'}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                          {language === 'jp' && '登録番号: 30100990745'}
                          {language === 'ko' && '등록번호: 30100990745'}
                          {language === 'en' && 'Registration No: 30100990745'}
                          {language === 'zh' && '登记号码: 30100990745'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-slate-500 text-sm">
                      {language === 'jp' && '画像をクリックすると、拡大することができます。'}
                      {language === 'ko' && '이미지를 클릭하면 확대할 수 있습니다.'}
                      {language === 'en' && 'Click on images to enlarge them.'}
                      {language === 'zh' && '点击图片可以放大。'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '会社概要'}
            {language === 'ko' && '회사 개요'}
            {language === 'en' && 'Company Overview'}
            {language === 'zh' && '公司概况'}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                {language === 'jp' && '基本情報'}
                {language === 'ko' && '기본 정보'}
                {language === 'en' && 'Basic Information'}
                {language === 'zh' && '基本信息'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Building className="h-5 w-5 text-corporate-blue mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {language === 'jp' && '会社名'}
                      {language === 'ko' && '회사명'}
                      {language === 'en' && 'Company Name'}
                      {language === 'zh' && '公司名称'}
                    </div>
                    <div className="text-slate-600">株式会社テクノピア</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-5 w-5 text-corporate-blue mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {language === 'jp' && '創業'}
                      {language === 'ko' && '창업'}
                      {language === 'en' && 'Founded'}
                      {language === 'zh' && '创业'}
                    </div>
                    <div className="text-slate-600">1995年10月3日</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-5 w-5 text-corporate-blue mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {language === 'jp' && '代表取締役社長'}
                      {language === 'ko' && '대표이사 사장'}
                      {language === 'en' && 'President & CEO'}
                      {language === 'zh' && '董事长兼总裁'}
                    </div>
                    <div className="text-slate-600">朴 栽世</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Building className="h-5 w-5 text-corporate-blue mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {language === 'jp' && '資本金(連結)'}
                      {language === 'ko' && '자본금(연결)'}
                      {language === 'en' && 'Capital (Consolidated)'}
                      {language === 'zh' && '资本金(合并)'}
                    </div>
                    <div className="text-slate-600">7000万円</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-5 w-5 text-corporate-blue mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {language === 'jp' && '本社'}
                      {language === 'ko' && '본사'}
                      {language === 'en' && 'Headquarters'}
                      {language === 'zh' && '总部'}
                    </div>
                    <div className="text-slate-600 whitespace-pre-line">
                      {language === 'jp' && '〒101-0065\n東京都千代田区西神田3-1-2\nウインド西神田ビル3F'}
                      {language === 'ko' && '〒101-0065\n東京都千代田区西神田3-1-2\nウインド西神田ビル3F'}
                      {language === 'en' && '〒101-0065\n東京都千代田区西神田3-1-2\nウインド西神田ビル3F'}
                      {language === 'zh' && '〒101-0065\n東京都千代田区西神田3-1-2\nウインド西神田ビル3F'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                {language === 'jp' && '事業内容'}
                {language === 'ko' && '사업 내용'}
                {language === 'en' && 'Business Areas'}
                {language === 'zh' && '业务内容'}
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && 'オルソケラトロジーレンズの製造・販売'}
                    {language === 'ko' && '오르토케라톨로지 렌즈 제조·판매'}
                    {language === 'en' && 'Orthokeratology Lens Manufacturing & Sales'}
                    {language === 'zh' && '角膜塑形镜制造·销售'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && 'アルミホイールの製造、販売'}
                    {language === 'ko' && '알루미늄 휠의 제조, 판매'}
                    {language === 'en' && 'Aluminum Wheel Manufacturing & Sales'}
                    {language === 'zh' && '铝合金轮毂制造·销售'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && '医療機器・ヘルスケア製品'}
                    {language === 'ko' && '의료기기·헬스케어 제품'}
                    {language === 'en' && 'Medical Devices & Healthcare Products'}
                    {language === 'zh' && '医疗器械·健康护理产品'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && 'AI顔認証検温測定器「TOLLGATE」の製造・販売'}
                    {language === 'ko' && 'AI 안면인증 체온측정기「TOLLGATE」제조·판매'}
                    {language === 'en' && 'AI Face Recognition Temperature Measurement Device "TOLLGATE" Manufacturing & Sales'}
                    {language === 'zh' && 'AI人脸识别体温测量设备「TOLLGATE」制造·销售'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && '不動産賃貸の取り扱い'}
                    {language === 'ko' && '부동산 임대 취급'}
                    {language === 'en' && 'Real Estate Rental Services'}
                    {language === 'zh' && '房地产租赁服务'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && 'クレジットカード端末決済サービス'}
                    {language === 'ko' && '신용카드 단말기 결제 서비스'}
                    {language === 'en' && 'Credit Card Terminal Payment Services'}
                    {language === 'zh' && '信用卡终端支付服务'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Business Information */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '詳細企業情報'}
            {language === 'ko' && '상세 기업 정보'}
            {language === 'en' && 'Detailed Corporate Information'}
            {language === 'zh' && '详细企业信息'}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Banking Partners */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Building className="h-5 w-5 text-corporate-blue mr-2" />
                  {language === 'jp' && '取引銀行'}
                  {language === 'ko' && '거래 은행'}
                  {language === 'en' && 'Banking Partners'}
                  {language === 'zh' && '合作银行'}
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>三井住友銀行</li>
                  <li>みずほ銀行</li>
                  <li>三菱UFJ銀行</li>
                  <li>りそな銀行</li>
                  <li>SBJ銀行</li>
                  <li>城南信用金庫</li>
                  <li>商工組合中央金庫</li>
                </ul>
              </CardContent>
            </Card>

            {/* Trading Countries */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Globe className="h-5 w-5 text-corporate-blue mr-2" />
                  {language === 'jp' && '取引国'}
                  {language === 'ko' && '거래국'}
                  {language === 'en' && 'Trading Countries'}
                  {language === 'zh' && '贸易国家'}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div>
                    <ul className="space-y-2">
                      <li>アメリカ</li>
                      <li>中国</li>
                      <li>韓国</li>
                      <li>ドイツ</li>
                      <li>ベルギー</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li>イスラエル</li>
                      <li>フランス</li>
                      <li>イタリア</li>
                      <li>INDIA</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Major Clients */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Users className="h-5 w-5 text-corporate-blue mr-2" />
                  {language === 'jp' && '主要取引先'}
                  {language === 'ko' && '주요 거래처'}
                  {language === 'en' && 'Major Clients'}
                  {language === 'zh' && '主要客户'}
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>伊藤忠商事株式会社</li>
                  <li>丸紅株式会社</li>
                  <li>SAMSUNG</li>
                  <li>LG</li>
                  <li>株式会社フジ・コーポレーション</li>
                  <li>全国の大学病院</li>
                  <li>眼科クリニック　1000カ所</li>
                </ul>
              </CardContent>
            </Card>

            {/* Products */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Award className="h-5 w-5 text-corporate-blue mr-2" />
                  {language === 'jp' && '取扱製品'}
                  {language === 'ko' && '취급 제품'}
                  {language === 'en' && 'Products & Services'}
                  {language === 'zh' && '产品与服务'}
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>自動車用アルミホイール製造及び販売</li>
                  <li>コンタクトレンズの製造販売(オルソケラトロジーレンズ)</li>
                  <li>医療機器の製造販売</li>
                  <li>TOLLGATEの販売</li>
                  <li>コロナ関連製品の販売</li>
                  <li>不動産賃貸</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Group Companies */}
          <div className="mt-12">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Building className="h-5 w-5 text-corporate-blue mr-2" />
                  {language === 'jp' && 'グループ子会社'}
                  {language === 'ko' && '그룹 자회사'}
                  {language === 'en' && 'Group Subsidiaries'}
                  {language === 'zh' && '集团子公司'}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">株式会社メニテック</h4>
                    <p className="text-slate-600 text-sm">(Tokyo)</p>
                    <div className="mt-2 text-xs text-slate-500">
                      <p>TEL: 03-3221-4862</p>
                      <p>FAX: 03-3221-4764</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">株式会社プライスドットコム</h4>
                    <p className="text-slate-600 text-sm">(Tokyo)</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Cross M Corporation</h4>
                    <p className="text-slate-600 text-sm">(Korea)</p>
                    <div className="mt-2 text-xs text-slate-500">
                      <p>TEL: 82-2-6961-5454</p>
                      <p>FAX: 82-2-6961-5477</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
