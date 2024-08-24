import Accordion from "./Accordion.jsx"
import SideImage from "./SideImage.jsx"
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="img-container flex-column-center">
          <SideImage/>
        </div>
        <div className="accordion-container flex-column-center">
          <Accordion />
        </div>
      </div>
    </>
  )
}

export default App
