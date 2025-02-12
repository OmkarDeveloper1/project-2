import React from "react";
import Headline from "./Componets/Headline";
import Agenda from "./Componets/Agenda";
import Current from "./Componets/Current";

const App = () => {
  return (
    <div>
      <Headline></Headline>
      <Agenda />
      <Current />
    </div>
  );
};

export default App;
