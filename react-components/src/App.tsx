import { HomeIcon } from "./components/ui/icons/Icons"
import { iconStyleApplier } from "./components/ui/icons/icons.styles"

function App(){
  {console.log(iconStyleApplier("filled"))}
  {console.log(iconStyleApplier("outlined"))}
  return (
    <div className="flex items-center align-middle gap-2">
      <HomeIcon styleVariant="outlined" />
      <HomeIcon styleVariant="filled" />
    </div>
  )
}

export default App