import HeaderSection from "./sections/HeaderSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PortfolioSection from "./sections/PortfolioSection";
import WeddingFilmsSection from "./sections/WeddingFilmsSection";
import WhyOfferingReturnsSection from "./sections/WhyOfferingReturnsSection";
import WhoWeAreSection from "./sections/WhoWeAreSection.jsx";

function App() {
    return (
        <div className={"font-poppins overflow-x-hidden"}>
            <HeaderSection/>
            <TestimonialsSection/>
            <WhoWeAreSection/>
            <PortfolioSection/>
            <WeddingFilmsSection/>
            <WhyOfferingReturnsSection/>
        </div>
    )
}

export default App
