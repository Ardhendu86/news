import PaginationSection from '@/components/sections/PaginationSection';
import RecentArticlesSection from '@/components/sections/RecentArticlesSection';
import TrendingSection from '@/components/sections/TrendingSection';
import Weekly2NewsSection from '@/components/sections/Weekly2NewsSection';
import WeeklyNewsSection from '@/components/sections/WeeklyNewsSection';
import WhatsNewSection from '@/components/sections/WhatsNewSection';
import YoutubeSection from '@/components/sections/YoutubeSection';
import PageChrome from '@/components/PageChrome';

export default function HomePage() {
  return (
    <PageChrome>
      <TrendingSection />
      <WeeklyNewsSection />
      <WhatsNewSection />
      <Weekly2NewsSection />
      <YoutubeSection />
      <RecentArticlesSection />
      <PaginationSection />
    </PageChrome>
  );
}
