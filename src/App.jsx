import Header from '@/components/header';
import WhyChooseUs from './components/whychoose';
import OneStopVisa from '@/components/oneStopVisa';
import HowToRegistration from '@/components/howToRegistration';
import Testimonial from '@/components/testimonial';
import FindService from '@/components/findService';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <OneStopVisa />
        <WhyChooseUs />
        <HowToRegistration />
        <Testimonial />
        <FindService />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
