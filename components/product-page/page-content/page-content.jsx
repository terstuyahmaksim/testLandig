import IntroSection from "../intro-section";
import MainContentSection from "../main-content-section";
import ProductInfoSection from "../product-info-section";

export default function PageContent() {
  return (
    <div className="container">
      <IntroSection />
      <MainContentSection></MainContentSection>
      <ProductInfoSection />
    </div>
  );
}
