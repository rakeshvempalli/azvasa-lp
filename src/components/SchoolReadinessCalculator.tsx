import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, ArrowRight, Sparkles, BarChart, RefreshCw } from 'lucide-react';

interface SchoolReadinessCalculatorProps {
  onScrollToForm: () => void;
}

export const SchoolReadinessCalculator: React.FC<SchoolReadinessCalculatorProps> = ({
  onScrollToForm,
}) => {
  const [answers, setAnswers] = useState<{ [key: string]: number }>({
    q1: 2,
    q2: 2,
    q3: 2,
    q4: 2,
  });

  const questions = [
    {
      id: 'q1',
      title: 'NEP 2020 Experiential & Competency Curriculum',
      options: [
        { label: 'Traditional rote learning / conventional textbooks only', score: 10 },
        { label: 'Partial activity days, but no structured competency rubrics', score: 20 },
        { label: 'Fully integrated 5+3+3+4 multidisciplinary lesson plans', score: 30 },
      ],
    },
    {
      id: 'q2',
      title: 'Teacher Training & CBSE 50-Hour CPD Mandate',
      options: [
        { label: 'Minimal or occasional ad-hoc external webinars (<15 hrs)', score: 10 },
        { label: 'Annual orientation workshop (approx 20-30 hrs per teacher)', score: 20 },
        { label: 'Systematic 50+ hours certified CPD with lesson observations', score: 30 },
      ],
    },
    {
      id: 'q3',
      title: 'Smart Classrooms & Integrated School ERP/LMS',
      options: [
        { label: 'Standalone projectors or mostly chalk-and-board / paper registers', score: 10 },
        { label: 'Basic smart boards and third-party fee collection software', score: 20 },
        { label: 'Full digital classroom ecosystem (Tata ClassEdge level) + Unified ERP', score: 30 },
      ],
    },
    {
      id: 'q4',
      title: 'Admissions Funnel & School Brand Perception',
      options: [
        { label: 'Plateaued or declining; heavy reliance on seasonal fee discounts', score: 10 },
        { label: 'Stable admissions via local word of mouth; limited digital visibility', score: 20 },
        { label: 'High parent demand, branded waiting list, strong local authority', score: 30 },
      ],
    },
  ];

  const totalScore = Math.round(
    ((answers.q1 + answers.q2 + answers.q3 + answers.q4) / 120) * 100
  );

  const getReadinessTier = () => {
    if (totalScore < 50) {
      return {
        label: 'High Transformation Opportunity',
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        summary: 'Your school has strong physical potential, but academic inconsistencies and traditional administration are likely capping parent perception and admissions.',
        recommendation: 'Azvasa Academic Audit + NEP Curriculum Framework',
      };
    } else if (totalScore < 80) {
      return {
        label: 'Emerging Growth Leader',
        color: 'text-blue-700',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        summary: 'Your institution has solid operational ground. Introducing structured 50-hr teacher CPD, Tata ClassEdge digital infrastructure, and Samsidh brand equity can unlock 25-40% admissions growth.',
        recommendation: 'Azvasa School Franchise or Complete Academic Package',
      };
    } else {
      return {
        label: 'Institutional Excellence Tier',
        color: 'text-emerald-700',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        summary: 'Your school excels in pedagogy and compliance. Partnering with Azvasa can help you scale to multi-branch operations and cement national brand recognition.',
        recommendation: 'Strategic Multi-Campus Scaling & Franchise Partnership',
      };
    }
  };

  const tier = getReadinessTier();

  return (
    <section className="py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Interactive Assessment Tool
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Check Your School’s NEP & Growth Readiness
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Evaluate your school’s current operational maturity in 2 minutes and receive a personalized diagnostic benchmark.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
          
          {/* Question List */}
          <div className="space-y-5">
            {questions.map((q, idx) => (
              <div key={q.id} className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    <span className="text-blue-700 mr-1.5">0{idx + 1}.</span>
                    {q.title}
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.score;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setAnswers({ ...answers, [q.id]: opt.score })}
                        className={`p-3 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Result Output Display */}
          <div className={`mt-8 p-6 rounded-2xl border ${tier.borderColor} ${tier.bgColor} space-y-4`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block">
                  Diagnostic Result
                </span>
                <h3 className={`text-xl font-extrabold ${tier.color}`}>
                  {tier.label}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-black text-slate-900">{totalScore}%</div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Readiness Score</span>
                </div>
                <div className="w-16 bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-700 h-full rounded-full transition-all duration-500"
                    style={{ width: `${totalScore}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              {tier.summary}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-xs text-slate-700">
                <strong className="text-slate-900">Recommended Path:</strong> {tier.recommendation}
              </div>
              <button
                onClick={onScrollToForm}
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer shrink-0"
              >
                <span>Discuss My Diagnostic Score</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
