// Függvény, ami jsx-et ad vissza
// JSX = HTML + JAVASCRIPT
// Komponens -> mindig nagybetűvel kezd -> Foxterrier

import Paragraph from "./componens/Paragraph";
import Vizsla from "./images/pexels-pixabay-33287.jpg"

function FoxterrierAlkalmazas() {
  return (
    <>
      <Paragraph description="Vizsla leírása" title="Vizsla" />
      <div>
        Ez itt egy gyerekelem
      </div>
      <Paragraph description="Labrador leírása" title="Labrador" />
      <img src={Vizsla} />
      <Paragraph description="Foxterrier leírása" title="Foxterrier" />
      
    </>
  );
}

export default FoxterrierAlkalmazas;
