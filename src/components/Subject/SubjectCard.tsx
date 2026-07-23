import type { ReactElement } from "react";

interface SubjectCardProps {
  subjectTitle: string;
  subjectDesc: string;
}



export default function SubjectCard({subjectTitle, subjectDesc}: SubjectCardProps): ReactElement {
  return (
    <div>SubjectCard</div>
  )
}
