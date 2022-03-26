
import { useState } from "react";

import { Conteudo } from "./Conteudo";
import { Header } from "./Header";
import { Inicia } from "./Inicial";

import { GlobalStyle } from "./style/globalStyle";

export function App() {

  const [inicia, setInicia] = useState(false);

  function handleStart() {
    setInicia(!inicia)
  }

  if (inicia) {    
    return (
      <>
        <Header />
        <Inicia handle={handleStart}/>
        <GlobalStyle />
      </>
    )
  } else {
    return (
      <>
        <Header />
        <Conteudo handle={handleStart} />
        <GlobalStyle />
      </>
    )
  }
}


