import HeaderSection from "./sections/HeaderSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PortfolioSection from "./sections/PortfolioSection";
import WeddingFilmsSection from "./sections/WeddingFilmsSection";
import WhyOfferingReturnsSection from "./sections/WhyOfferingReturnsSection";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import ProcessSection from "./sections/ProcessSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
// import WhatOurClientsSaySection from "./sections/WhatOurClientsSaySection";
import ContactSection from "./sections/ContactSection";
import FixedSection from "./sections/FixedSection";


function App() {

  return (
    <div className={"font-poppins overflow-x-hidden"}>
      <HeaderSection />
      <TestimonialsSection />
      <WhoWeAreSection />
      <PortfolioSection />
      <WeddingFilmsSection />
      <WhyOfferingReturnsSection />
      <ProcessSection />
      <WhyChooseUsSection />
      {/* <WhatOurClientsSaySection /> */}
      <TestimonialsSection />
      <ContactSection />
      <FixedSection />
    </div>
  )
}

export default App
