import FooterSection from '@/components/sections/FooterSection';
import HeaderSection from '@/components/sections/HeaderSection';
import LegacyScripts from '@/components/LegacyScripts';

export default function PageChrome({ children, includeScripts = true }) {
  return (
    <>
      <HeaderSection />
      <main>
        <div data-aos="fade-up">{children}</div>
      </main>
      <FooterSection />
      {includeScripts ? <LegacyScripts /> : null}
    </>
  );
}