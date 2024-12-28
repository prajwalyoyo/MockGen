import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MockDataGenerator from "@/components/MockDataGenerator";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent text-foreground">
      <Header />
      <main>
        <Hero />
        <MockDataGenerator />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;