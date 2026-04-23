import ErrorBoundary    from "@/components/ErrorBoundary";
import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import Why              from "@/components/Why";
import Gallery          from "@/components/Gallery";
import Packages         from "@/components/Packages";
import CupBanner        from "@/components/CupBanner";
import Inquiry          from "@/components/Inquiry";
import Footer           from "@/components/Footer";
import MessengerBubble  from "@/components/MessengerBubble";

export default function Home() {
  return (
    <>
      <ErrorBoundary compact><Navbar /></ErrorBoundary>
      <main>
        <ErrorBoundary compact><Hero /></ErrorBoundary>
        <ErrorBoundary compact><Why /></ErrorBoundary>
        <ErrorBoundary compact><Gallery /></ErrorBoundary>
        <ErrorBoundary compact><Packages /></ErrorBoundary>
        <ErrorBoundary compact><CupBanner /></ErrorBoundary>
        <ErrorBoundary compact><Inquiry /></ErrorBoundary>
      </main>
      <ErrorBoundary compact><Footer /></ErrorBoundary>
      <MessengerBubble />
    </>
  );
}
