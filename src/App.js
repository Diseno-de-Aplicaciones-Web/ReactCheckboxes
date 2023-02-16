import { useState } from "react";

function App() {

  const [selecciones, setSelecciones] = useState([])

  function manejadorClick(event) {
    let nuevasSelecciones
    const checkboxClicado = event.target
    if (checkboxClicado.checked) {
      nuevasSelecciones = [...selecciones] //https://www.w3schools.com/react/react_es6_spread.asp
      nuevasSelecciones.push(checkboxClicado.value)
    } else {
      nuevasSelecciones = selecciones.filter(
        elemento => elemento !== checkboxClicado.value
      )
    }
    setSelecciones(nuevasSelecciones)
  }

  return (
    <>
    <h1>Menú</h1>
    <h2>Fruta</h2>
    <input type={"checkbox"} value="Peras" name="frutas" onClick={manejadorClick}/>
    <input type={"checkbox"} value="Manzanas" name="frutas" onClick={manejadorClick}/>
    <input type={"checkbox"} value="Nueces" name="frutas" onClick={manejadorClick}/>
    <input type={"checkbox"} value="Castañas" name="frutas" onClick={manejadorClick}/>
    <h2>Sus selección</h2>
    {selecciones}
    </>
  );
}

export default App;
