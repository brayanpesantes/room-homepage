import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
      </main>
    </div>
  );
}
