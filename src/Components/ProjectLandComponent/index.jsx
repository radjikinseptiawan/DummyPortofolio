import { project } from '../../data/project'
import CardComponent from '../CardComponent'
import './project.css'

export function ProjectLand(){
    return(<>
    <div className="project-land">
        <h1>Project</h1>
        <div className="project-containt">
            {
                project.map((item)=>{
                    return(
                        <>
                        <CardComponent imageCard={item.img} titleCard={item.title} keyId={item.id} techCard={item.tools}/>
                        </>
                )
            })
            }
        </div>
    </div>
    </>)
}