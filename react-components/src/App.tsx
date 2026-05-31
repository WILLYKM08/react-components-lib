import { HomeIcon } from "./components/ui/icons/Icons";
import { Button } from "./components/ui/buttons/Buttons";
import { iconStyleApplier } from "./components/ui/icons/icons.styles";

function App(){
  {console.log(iconStyleApplier("filled"))}
  {console.log(iconStyleApplier("outlined"))}
  return (
    <div className="flex items-center align-middle gap-2">
      <Button
      className="w-auto"
      icon={HomeIcon}>
        Dashboard
      </Button>

      <Button
      styleVariant="secondary"
      className="w-auto">
        Dashboard
      </Button>

      <Button
      styleVariant="ghost"
      className="w-auto">
        Dashboard
      </Button>

      <Button
      styleVariant="primary"
      disabled={true}
      className="w-auto">
        Dashboard
      </Button>
    </div>
  )
}

export default App