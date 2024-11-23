import { skills } from '../../data/skills'
import Capsule from '../CapsuleComponent'
import './profile.css'

export default function ProfileLand() {
  return (
    <>
    <div className='profile-box'>
        <div className='image-box'>
            <img src='pexels-keaven-8119643.jpg'/>
        </div>
        <div className='type-image'>
            <h1>John Doe</h1>
            <h2>Developer | Frontend Developer</h2>
            <h2>Skill</h2>
            <div className='data'>
                {
                  skills.map((skill)=>{
                    return(
                      <>
                      <Capsule keySkill={skill.id} techSkill={skill.name}></Capsule>
                      </>
                    )
                  })
                }
            </div>
    
        </div>
    </div>
    </>
  )
}
