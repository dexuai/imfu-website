import Hero from '@/components/home/Hero';
import Solutions from '@/components/home/Solutions';
import WeChatCTA from '@/components/home/WeChatCTA';
import LogsPreview from '@/components/home/LogsPreview';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Solutions />
      <WeChatCTA />
      <LogsPreview />
    </div>
  );
}
