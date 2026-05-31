import { HomeIcon } from "./components/ui/icons/Icons"
import { iconStyleApplier } from "./components/ui/icons/icons.styles"

function App(){
  {console.log(iconStyleApplier("filled"))}
  return (
    <div className="flex items-center align-middle gap-2">
      <HomeIcon styleVariant="outlined h-1 w-1"/>
      <HomeIcon styleVariant="filled h-1 w-1"/>
    </div>
  )
}

export default App