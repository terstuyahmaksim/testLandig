import ContentBlockTypeOne from "../../common/content-holder-type-1";
import ContentBlockTypeTwo from "../../common/content-holder-type-2";
import ContentBlockTypeThree from "../../common/content-holder-type-3";

export default function MainPageContent() {
  return (
    <div className="container">
      <ContentBlockTypeOne />
      <ContentBlockTypeTwo />
      <ContentBlockTypeThree />
    </div>
  );
}
