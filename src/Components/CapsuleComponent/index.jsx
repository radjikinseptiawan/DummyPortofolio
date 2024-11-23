/* eslint-disable react/prop-types */
import './capsule.css'

export default function Capsule({keySkill,techSkill}) {
  return (
    <>
    <div key={keySkill} className="capsule">
    <h6>{techSkill}</h6>
    </div>
    </>
  )
}
