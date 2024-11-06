
import './App.css'
import ColorBoxGrid from './ColorBoxGrid'

function App() {

  const colors = ["#343633", "#e16f7c", "#eb9486", "#e8deb2", "#faf6f0", "#dff0f6", "#85bdbf", "#55a4a7", "#b4869f", "#6d435a", "#bad747", "#3498db", "#c32f27", "#536493", "#789DBC", "#FF9D3D"]

  return (
    <>
      <ColorBoxGrid colors = {colors} totalBox = {5}/>
    </>
  )
}

export default App