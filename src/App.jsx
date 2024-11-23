import BottomComponent from './Components/BottomComponent'
import NavigationComponent from './Components/NavigationComponent'
import ProfileLand from './Components/ProfileComponent'
import { ProjectLand } from './Components/ProjectLandComponent'

function App() {

  return (
    <>
    <NavigationComponent></NavigationComponent>
    <ProfileLand>
    </ProfileLand>
    <ProjectLand></ProjectLand>
    <BottomComponent></BottomComponent>
    </>
  )
}

export default App
