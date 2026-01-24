import Services from "@/components/HomePage/Services/Services";
import Collabs from "@/components/HomePage/Collabs/Collabs";
import Partners from "@/components/HomePage/Partners/Partners";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import Hero from "@/components/HomePage/Hero/Hero";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Services />
      <Collabs />
      <Partners />
      <Testimonials />
    </main>
  );
}
