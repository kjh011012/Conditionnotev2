import { Moon, Activity, Heart, FileText, Clock, Lock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';

const miniWeekly = [
  { d: '월', v: 68 }, { d: '화', v: 72 }, { d: '수', v: 60 },
  { d: '목', v: 65 }, { d: '금', v: 70 }, { d: '토', v: 75 }, { d: '일', v: 62 },
];

export function GuardianHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <div className="px-4 pt-3 pb-4 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <Lock size={16} className="text-[#6B7280]" />
          <span className="text-[12px] text-[#6B7280]">보호자 모드 (읽기 전용)</span>
        </div>
        <h1 className="text-[22px] text-[#111827] mb-1">오늘 요약</h1>
        <div className="flex items-center gap-1 text-[12px] text-[#9CA3AF]">
          <Clock size={12} /> 최근 동기화: 오후 2:30
        </div>
      </div>

      <div className="px-4 pt-3">
        <div className="bg-[#FFF1E8] rounded-[12px] p-3 mb-4">
          <p className="text-[12px] text-[#EA580C]">이 화면은 참가자 동의 범위 내에서만 보여요.</p>
        </div>

        {/* Summary cards */}
        <div className="flex flex-col gap-3 mb-4">
          {[
            { icon: Moon, label: '수면', value: '보통', desc: '적정 수준이에요', color: '#1B7A4B' },
            { icon: Activity, label: '활동', value: '양호', desc: '목표 달성 중이에요', color: '#22C55E' },
            { icon: Heart, label: '스트레스', value: '주의', desc: '조금 높은 편이에요', color: '#F59E0B' },
          ].map(item => (
            <div key={item.label} className="bg-white rounded-[16px] p-5 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F5EE] flex items-center justify-center">
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div className="flex-1">
                  <span className="text-[14px] text-[#6B7280]">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[20px] text-[#111827]">{item.value}</span>
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#6B7280] mt-2 pl-[52px]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Weekly Rhythm Mini */}
        <div className="bg-white rounded-[16px] p-5 shadow-[0_1px_6px_rgba(0,0,0,0.04)] mb-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={18} className="text-[#1B7A4B]" />
            <span className="text-[15px] text-[#111827]">주간 리듬 요약</span>
          </div>
          <div className="h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={miniWeekly}>
                <XAxis dataKey="d" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
                <Line type="monotone" dataKey="v" stroke="#1B7A4B" strokeWidth={2} dot={{ fill: '#1B7A4B', r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[12px] text-[#6B7280] mt-2">이번 주 평균 리듬 안정도: 67점</p>
        </div>

        <button
          onClick={() => navigate('/report')}
          className="w-full h-[52px] bg-[#1B7A4B] text-white rounded-[14px] text-[16px] flex items-center justify-center gap-2"
        >
          <FileText size={18} /> 캠프/주간 리포트 보기
        </button>
      </div>
    </div>
  );
}
