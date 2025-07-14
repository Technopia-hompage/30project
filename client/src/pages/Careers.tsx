import { Card, CardContent } from "@/components/ui/card";
import { Building } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Careers() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-corporate-blue text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'jp' && '新規・中途採用情報'}
              {language === 'ko' && '신규·경력직 채용 정보'}
              {language === 'en' && 'Recruitment Information'}
              {language === 'zh' && '新人·中途录用信息'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === 'jp' && 'テクノピア株式会社で一緒に未来を築きませんか。私たちは多様な才能を持つ人材を求めています。'}
              {language === 'ko' && '테크노피아 주식회사에서 함께 미래를 만들어가지 않으시겠습니까? 저희는 다양한 재능을 가진 인재를 모집하고 있습니다.'}
              {language === 'en' && 'Join Technopia Corporation and build the future together. We are looking for talented individuals with diverse skills.'}
              {language === 'zh' && '与技诺必雅株式会社一起构建未来。我们正在寻找具有多样化才能的人才。'}
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Requirements */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '応募者の皆様へ'}
            {language === 'ko' && '지원자 여러분께'}
            {language === 'en' && 'To All Applicants'}
            {language === 'zh' && '致所有申请者'}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  {language === 'jp' && '新卒採用について'}
                  {language === 'ko' && '신졸 채용에 대해'}
                  {language === 'en' && 'Fresh Graduate Recruitment'}
                  {language === 'zh' && '关于新毕业生招聘'}
                </h3>
                <div className="space-y-4 text-slate-600">
                  <p>
                    {language === 'jp' && '学歴は問いません。ただし、以下の条件を満たす方に限ります：'}
                    {language === 'ko' && '학력은 묻지 않습니다. 단, 다음 조건을 만족하는 분에 한합니다:'}
                    {language === 'en' && 'Education level is not required. However, we limit to those who meet the following conditions:'}
                    {language === 'zh' && '不限学历。但仅限于满足以下条件的申请者：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      {language === 'jp' && '20歳以上35歳以下の方'}
                      {language === 'ko' && '20세 이상 35세 이하인 분'}
                      {language === 'en' && 'Between 20 and 35 years old'}
                      {language === 'zh' && '年龄在20岁以上35岁以下'}
                    </li>
                    <li>
                      {language === 'jp' && '健康で勤勉な方'}
                      {language === 'ko' && '건강하고 성실한 분'}
                      {language === 'en' && 'Healthy and diligent individuals'}
                      {language === 'zh' && '身体健康且勤奋的人'}
                    </li>
                    <li>
                      {language === 'jp' && '業務に必要な日本語コミュニケーション能力を有する方'}
                      {language === 'ko' && '업무에 필요한 일본어 커뮤니케이션 능력을 보유한 분'}
                      {language === 'en' && 'Proficient in Japanese communication for work purposes'}
                      {language === 'zh' && '具备工作所需的日语沟通能力'}
                    </li>
                    <li>
                      {language === 'jp' && '普通自動車免許（AT限定可）をお持ちの方、または入社までに取得見込みの方'}
                      {language === 'ko' && '보통 자동차 면허(AT 한정 가능)를 보유하신 분, 또는 입사까지 취득 예정인 분'}
                      {language === 'en' && 'Valid driver\'s license (AT limited acceptable) or expected to obtain before joining'}
                      {language === 'zh' && '持有普通汽车驾照（AT限定可）或入职前有望取得'}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  {language === 'jp' && '中途採用について'}
                  {language === 'ko' && '경력직 채용에 대해'}
                  {language === 'en' && 'Mid-Career Recruitment'}
                  {language === 'zh' && '关于中途招聘'}
                </h3>
                <div className="space-y-4 text-slate-600">
                  <p>
                    {language === 'jp' && '経験豊富な方を歓迎します。以下の条件を満たす方を募集しています：'}
                    {language === 'ko' && '경험이 풍부한 분을 환영합니다. 다음 조건을 만족하는 분을 모집하고 있습니다:'}
                    {language === 'en' && 'We welcome experienced professionals. We are recruiting those who meet the following conditions:'}
                    {language === 'zh' && '欢迎有经验的专业人士。我们正在招聘满足以下条件的申请者：'}
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      {language === 'jp' && '関連業界での実務経験をお持ちの方'}
                      {language === 'ko' && '관련 업계에서의 실무 경험을 보유하신 분'}
                      {language === 'en' && 'Practical experience in related industries'}
                      {language === 'zh' && '在相关行业具有实务经验'}
                    </li>
                    <li>
                      {language === 'jp' && '年齢不問（意欲と能力を重視）'}
                      {language === 'ko' && '연령 무관 (의욕과 능력을 중시)'}
                      {language === 'en' && 'Age not a factor (focus on motivation and ability)'}
                      {language === 'zh' && '年龄不限（重视积极性和能力）'}
                    </li>
                    <li>
                      {language === 'jp' && '専門的スキルや資格をお持ちの方優遇'}
                      {language === 'ko' && '전문적 스킬이나 자격을 보유하신 분 우대'}
                      {language === 'en' && 'Preference for those with professional skills or certifications'}
                      {language === 'zh' && '优先考虑具有专业技能或资格的申请者'}
                    </li>
                    <li>
                      {language === 'jp' && 'チームワークを大切にする方'}
                      {language === 'ko' && '팀워크를 중시하는 분'}
                      {language === 'en' && 'Values teamwork'}
                      {language === 'zh' && '重视团队合作'}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Recruitment Guidelines */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '採用に関する詳細ガイドライン'}
            {language === 'ko' && '채용 관련 상세 가이드라인'}
            {language === 'en' && 'Detailed Recruitment Guidelines'}
            {language === 'zh' && '招聘详细指南'}
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {language === 'jp' && '応募方法'}
                  {language === 'ko' && '지원 방법'}
                  {language === 'en' && 'Application Process'}
                  {language === 'zh' && '申请方式'}
                </h3>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    {language === 'jp' && '履歴書（写真付き）および職務経歴書をメールまたは郵送にてお送りください。'}
                    {language === 'ko' && '이력서(사진 첨부) 및 경력기술서를 이메일 또는 우편으로 보내주시기 바랍니다.'}
                    {language === 'en' && 'Please send your resume (with photo) and work history by email or mail.'}
                    {language === 'zh' && '请通过电子邮件或邮寄方式发送简历（附照片）和工作履历。'}
                  </p>
                  <p className="font-medium">
                    {language === 'jp' && 'Email: hk.lee@technopia.co.jp'}
                    {language === 'ko' && 'Email: hk.lee@technopia.co.jp'}
                    {language === 'en' && 'Email: hk.lee@technopia.co.jp'}
                    {language === 'zh' && 'Email: hk.lee@technopia.co.jp'}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {language === 'jp' && '選考プロセス'}
                  {language === 'ko' && '선발 과정'}
                  {language === 'en' && 'Selection Process'}
                  {language === 'zh' && '选拔流程'}
                </h3>
                <div className="text-sm text-slate-600 space-y-2">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>
                      {language === 'jp' && '書類選考'}
                      {language === 'ko' && '서류 심사'}
                      {language === 'en' && 'Document Review'}
                      {language === 'zh' && '文件审查'}
                    </li>
                    <li>
                      {language === 'jp' && '面接（1〜2回）'}
                      {language === 'ko' && '면접 (1~2회)'}
                      {language === 'en' && 'Interview (1-2 rounds)'}
                      {language === 'zh' && '面试（1-2轮）'}
                    </li>
                    <li>
                      {language === 'jp' && '適性検査・技能テスト'}
                      {language === 'ko' && '적성검사·기능테스트'}
                      {language === 'en' && 'Aptitude & Skills Test'}
                      {language === 'zh' && '适性检查·技能测试'}
                    </li>
                    <li>
                      {language === 'jp' && '内定通知'}
                      {language === 'ko' && '내정 통지'}
                      {language === 'en' && 'Job Offer'}
                      {language === 'zh' && '录用通知'}
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-corporate-blue mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {language === 'jp' && '勤務条件'}
                  {language === 'ko' && '근무 조건'}
                  {language === 'en' && 'Working Conditions'}
                  {language === 'zh' && '工作条件'}
                </h3>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    <span className="font-medium">
                      {language === 'jp' && '勤務時間: '}
                      {language === 'ko' && '근무시간: '}
                      {language === 'en' && 'Work Hours: '}
                      {language === 'zh' && '工作时间：'}
                    </span>
                    {language === 'jp' && '8:30-17:30（休憩1時間）'}
                    {language === 'ko' && '8:30-17:30 (휴게 1시간)'}
                    {language === 'en' && '8:30-17:30 (1hr break)'}
                    {language === 'zh' && '8:30-17:30（休息1小时）'}
                  </p>
                  <p>
                    <span className="font-medium">
                      {language === 'jp' && '休日: '}
                      {language === 'ko' && '휴일: '}
                      {language === 'en' && 'Holidays: '}
                      {language === 'zh' && '休假：'}
                    </span>
                    {language === 'jp' && '土日祝、年末年始、夏季休暇'}
                    {language === 'ko' && '토일 공휴일, 연말연시, 하계휴가'}
                    {language === 'en' && 'Weekends, holidays, year-end, summer vacation'}
                    {language === 'zh' && '周末、节假日、年末年初、夏季假期'}
                  </p>
                  <p>
                    <span className="font-medium">
                      {language === 'jp' && '給与: '}
                      {language === 'ko' && '급여: '}
                      {language === 'en' && 'Salary: '}
                      {language === 'zh' && '薪资：'}
                    </span>
                    {language === 'jp' && '経験・能力に応じて決定'}
                    {language === 'ko' && '경험·능력에 따라 결정'}
                    {language === 'en' && 'Based on experience & ability'}
                    {language === 'zh' && '根据经验和能力确定'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hiring Statistics */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '過去3年間の採用実績'}
            {language === 'ko' && '지난 3년간 채용 실적'}
            {language === 'en' && 'Hiring Statistics (Past 3 Years)'}
            {language === 'zh' && '过去3年招聘实绩'}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  {language === 'jp' && '新卒採用実績'}
                  {language === 'ko' && '신규채용 실적'}
                  {language === 'en' && 'Fresh Graduate Hiring'}
                  {language === 'zh' && '新毕业生招聘实绩'}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold">
                          {language === 'jp' && '年度'}
                          {language === 'ko' && '연도'}
                          {language === 'en' && 'Year'}
                          {language === 'zh' && '年度'}
                        </th>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold">
                          {language === 'jp' && '採用人数'}
                          {language === 'ko' && '채용 인원'}
                          {language === 'en' && 'Hired'}
                          {language === 'zh' && '录用人数'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2023年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">5名</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2022年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">4名</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2021年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">3名</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2020年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">6名</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  {language === 'jp' && '離職率（過去3年平均）'}
                  {language === 'ko' && '이직률 (지난 3년 평균)'}
                  {language === 'en' && 'Turnover Rate (3-Year Average)'}
                  {language === 'zh' && '离职率（过去3年平均）'}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold">
                          {language === 'jp' && '年度'}
                          {language === 'ko' && '연도'}
                          {language === 'en' && 'Year'}
                          {language === 'zh' && '年度'}
                        </th>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold">
                          {language === 'jp' && '離職率'}
                          {language === 'ko' && '이직률'}
                          {language === 'en' && 'Turnover Rate'}
                          {language === 'zh' && '离职率'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2023年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2022年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2021年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2020年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  {language === 'jp' && '公表日：2023年3月18日'}
                  {language === 'ko' && '공표일: 2023년 3월 18일'}
                  {language === 'en' && 'Published: March 18, 2023'}
                  {language === 'zh' && '公布日期：2023年3月18日'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}