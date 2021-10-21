// Passo 1: Importar o React
import React from "react";
import ControlItem from "./components/ControlItem";

const CONTROL_ITEMS = [
  { value: 100, title: "Volume" },
  { value: 66, title: "Treble" },
  { value: 77, title: "Mid" },
  { value: 88, title: "Bass" },
];

// Passo 2: Declarar a classe componente
class App extends React.Component {
  // Passo 3: sobrescrever o render
  render() {
    return (
      <>
        <ul>
          {CONTROL_ITEMS.map(({ value, title }) => (
            <ControlItem value={value} title={title} />
          ))}
        </ul>
      </>
    );
  }
}

// Passo 4: Exportar o componente
export default App;
