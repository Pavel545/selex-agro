import { Outlet } from 'react-router-dom';
import "../../glob/css/glob.css"
import Footer from '../../components/footer';
import MobMenu from '../../components/mobMenu';
import Lenis from 'lenis';
import { useEffect } from 'react';
import CookieConsent from '../../components/CookieConsent/CookieConsent';
const AppLayout = () => {

   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true, // ✅ Включаем для тач-устройств
      touchMultiplier: 2, // ✅ Чувствительность для тач
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
      <>
        <main>
        <Outlet />
        <CookieConsent/>
      </main>
      <Footer/>
        <MobMenu />

      </>
  );
};

export default AppLayout;