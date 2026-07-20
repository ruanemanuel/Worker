import { ReactElement } from "react";

interface SubjectCard {
  subjectTitle: string;
  subjectDesc: string;
}

<<<<<<< HEAD
const SubjectCard = ({subjectTitle, subjectDesc}: SubjectCard): ReactElement => {

    return(
        <div>
            Card 
        </div>
    )
}
export default Card
=======
const SubjectCard = ({
  subjectTitle,
  subjectDesc,
}: SubjectCard): ReactElement => {
  return (
    <div>
      <h1>{subjectTitle}</h1>
      <p>{subjectDesc}</p>
    </div>
  );
};
export default SubjectCard;
>>>>>>> 637b00c (Configurando a página de Configurações)
