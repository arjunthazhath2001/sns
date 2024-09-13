import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrackRecord from "@/components/TrackRecord";


export default function Home() {
  return (
      <div className="bg-transparent dark:text-white flex flex-col items-center justify-center">
        <HeroSection/>
        <AdmissionForm/>
        <TrackRecord/>
        <Footer/>
      </div>
  );
}
