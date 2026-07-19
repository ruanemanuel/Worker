

import { ReactElement } from "react"

interface SubjectCard{
    subjectTitle: string,
    subjectDesc: string,
}

const Card = ({subjectTitle, subjectDesc}: SubjectCard): ReactElement => {

    return(
        <div>
            Card 
        </div>
    )
}
export default Card