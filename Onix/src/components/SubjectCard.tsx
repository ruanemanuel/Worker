

import { ReactElement } from "react"

interface SubjectCard{
    subjectTitle: string,
    subjectDesc: string,
}

const SubjectCard = ({subjectTitle, subjectDesc}: SubjectCard): ReactElement => {

    return(
        <div>
            Card 
        </div>
    )
}
export default Card
