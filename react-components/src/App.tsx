import { HomeIcon } from "./components/ui/icons/Icons";
import { Button } from "./components/ui/buttons/Buttons";
import { iconStyleApplier } from "./components/ui/icons/icons.styles";
import { Label } from "./components/ui/labels/Label";

function App(){
  {console.log(iconStyleApplier("filled"))}
  {console.log(iconStyleApplier("outlined"))}
  return (
    <div className="flex flex-wrap items-center align-middle gap-2">
      
      <Label caption="Nivel 1" styleVariant="title"/>
      <Label caption="Nivel 2" styleVariant="subtitle"/>
      <Label caption="Nivel 3" styleVariant="section"/>
      <Label caption="Nivel 4" styleVariant="normal"/>
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