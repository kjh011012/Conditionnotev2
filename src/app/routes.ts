import { createBrowserRouter } from 'react-router';
import { MobileLayout } from './components/layout/MobileLayout';
import { HomeRouter } from './pages/home/HomeRouter';
import { CampPage } from './pages/camp/CampPage';
import { CheckHub } from './pages/check/CheckHub';
import { MindCheck } from './pages/check/MindCheck';
import { StressResult } from './pages/check/StressResult';
import { BrainCheck } from './pages/check/BrainCheck';
import { PlayCheck } from './pages/check/PlayCheck';
import { SleepDetail } from './pages/check/SleepDetail';
import { TodayRecommend } from './pages/check/TodayRecommend';
import { ReportPage } from './pages/report/ReportPage';
import { MorePage } from './pages/more/MorePage';
import { OnboardingPage } from './pages/onboarding/OnboardingPage';
import { DetailSpecPage } from './pages/library/DetailSpecPage';
import { CopyLibraryPage } from './pages/library/CopyLibraryPage';
import { StateLibraryPage } from './pages/library/StateLibraryPage';
import { AIRecoRuleSpecPage } from './pages/library/AIRecoRuleSpecPage';
import { AIRecoScenariosPage } from './pages/library/AIRecoScenariosPage';
import { AIRecoReasonMappingPage } from './pages/library/AIRecoReasonMappingPage';
import { AIRecoPseudocodePage } from './pages/library/AIRecoPseudocodePage';
import { AIRecoJSONPage } from './pages/library/AIRecoJSONPage';
// Daily activity flow
import { TodayPlanPage } from './pages/daily/TodayPlanPage';
import { ActivityDetailPage } from './pages/daily/ActivityDetailPage';
import { ActivityProgressPage } from './pages/daily/ActivityProgressPage';
import { ActivityCompletePage } from './pages/daily/ActivityCompletePage';
import { YouTubeQueryPage } from './pages/daily/YouTubeQueryPage';
import { YouTubeResultsPage } from './pages/daily/YouTubeResultsPage';
import { FoodIdeasPage } from './pages/daily/FoodIdeasPage';
import { WeeklyInsightPage } from './pages/daily/WeeklyInsightPage';
import { QueryTemplateLibrary } from './pages/daily/QueryTemplateLibrary';
// Camp flow
import { BaselineChecklistPage } from './pages/camp/BaselineChecklistPage';
import { MeasurementGatePage } from './pages/camp/MeasurementGatePage';
import { ReportLoadingPage } from './pages/camp/ReportLoadingPage';
import { ReportExportPage } from './pages/camp/ReportExportPage';
// Coordinator
import { CoordinatorHome } from './pages/coordinator/CoordinatorHome';
import { ReportChecklist } from './pages/coordinator/ReportChecklist';
import { NoticeTemplate } from './pages/coordinator/NoticeTemplate';
// Referral
import { ReferralCategoryList } from './pages/referral/ReferralCategoryList';
import { PreVisitChecklist } from './pages/referral/PreVisitChecklist';
import { FollowUpCheck } from './pages/referral/FollowUpCheck';
// Help
import { HelpPage } from './pages/more/HelpPage';

export const router = createBrowserRouter([
  {
    path: '/onboarding',
    Component: OnboardingPage,
  },
  {
    path: '/',
    Component: MobileLayout,
    children: [
      { index: true, Component: HomeRouter },
      { path: 'camp', Component: CampPage },
      { path: 'check', Component: CheckHub },
      { path: 'check/mind', Component: MindCheck },
      { path: 'check/stress', Component: StressResult },
      { path: 'check/brain', Component: BrainCheck },
      { path: 'check/play', Component: PlayCheck },
      { path: 'check/sleep', Component: SleepDetail },
      { path: 'check/recommend', Component: TodayRecommend },
      { path: 'report', Component: ReportPage },
      { path: 'more', Component: MorePage },
      // Daily activity flow
      { path: 'daily/plan', Component: TodayPlanPage },
      { path: 'daily/activity/:activityId', Component: ActivityDetailPage },
      { path: 'daily/progress/:activityId', Component: ActivityProgressPage },
      { path: 'daily/complete/:activityId', Component: ActivityCompletePage },
      { path: 'daily/youtube-query', Component: YouTubeQueryPage },
      { path: 'daily/youtube-results', Component: YouTubeResultsPage },
      { path: 'daily/query-templates', Component: QueryTemplateLibrary },
      { path: 'daily/food', Component: FoodIdeasPage },
      { path: 'daily/weekly-insight', Component: WeeklyInsightPage },
      // Camp flow
      { path: 'camp/baseline', Component: BaselineChecklistPage },
      { path: 'camp/measurement-gate', Component: MeasurementGatePage },
      { path: 'camp/report-loading', Component: ReportLoadingPage },
      { path: 'camp/report-export', Component: ReportExportPage },
      // Coordinator
      { path: 'coordinator', Component: CoordinatorHome },
      { path: 'coordinator/report-checklist', Component: ReportChecklist },
      { path: 'coordinator/notice-template', Component: NoticeTemplate },
      // Referral
      { path: 'referral/categories', Component: ReferralCategoryList },
      { path: 'referral/pre-visit', Component: PreVisitChecklist },
      { path: 'referral/follow-up', Component: FollowUpCheck },
      // Help
      { path: 'help', Component: HelpPage },
      // Library
      { path: 'library/detail-spec', Component: DetailSpecPage },
      { path: 'library/copy', Component: CopyLibraryPage },
      { path: 'library/states', Component: StateLibraryPage },
      { path: 'library/ai-reco-rules', Component: AIRecoRuleSpecPage },
      { path: 'library/ai-reco-scenarios', Component: AIRecoScenariosPage },
      { path: 'library/ai-reco-reason-mapping', Component: AIRecoReasonMappingPage },
      { path: 'library/ai-reco-pseudocode', Component: AIRecoPseudocodePage },
      { path: 'library/ai-reco-json', Component: AIRecoJSONPage },
    ],
  },
]);