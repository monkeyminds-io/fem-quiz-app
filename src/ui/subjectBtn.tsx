// =============================================================================
// File Name: Subject Button Component
// File Description:
// This file contains the code of the Subject Button Component, used to select 
// the subjet of the quiz.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from "next/image";

// =============================================================================
// Components Props
// =============================================================================
type Props = {
    icon: string;
    text: string;
    href: string;
}
// =============================================================================
// React Components
// =============================================================================
export const SubjectBtn = ({icon, text, href}: Props) => {
    return (
        <a href={href}>
            <Image src={icon} alt="Decoration" />
            {text}
            </a>
    )
}