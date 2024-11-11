// =============================================================================
// File Name: Home Page
// File Description:
// this file contains the code of the Home Page.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { SubjectBtn } from "@/ui/subjectBtn"
import iconHtml from "../../public/images/icon-html.svg"
import iconCss from "../../public/images/icon-css.svg"
import iconJs from "../../public/images/icon-js.svg"
import iconAccessibility from "../../public/images/icon-accessibility.svg"

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Component
// =============================================================================
export default function HomePage() {
  return (
    <div className="">
      {/* Quiz menu start */}

      Welcome to the Frontend Quiz!
      Pick a subject to get started.

      <SubjectBtn icon={iconHtml} text={'HTML'} href={'#'}/>
      <SubjectBtn icon={iconCss} text={'CSS'} href={'#'}/>
      <SubjectBtn icon={iconJs} text={'JavaScript'} href={'#'}/>
      <SubjectBtn icon={iconAccessibility} text={'Accessibility'} href={'#'}/>

      {/* Quiz menu end */}
    </div>
  );
}
