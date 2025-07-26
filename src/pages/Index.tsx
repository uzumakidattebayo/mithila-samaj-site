import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import About from '@/components/About';
import Services from '@/components/Services';
import FeaturedEvents from '@/components/FeaturedEvents';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StorySection />
        <About />
        <Services />
        <FeaturedEvents />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
