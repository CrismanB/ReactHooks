import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  //useState cria estado sem estar no escopo de classe.
  const [tech, setTech] = useState(["React", "React Native"]);
  const [newTech, setNewTech] = useState("");

  //Essa funcão sera somente recriada toda vez que a variavel tech sofrer alteracao.
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech("");
  }, [tech, newTech]);

  useEffect(() => {
    //Simulando o componentDidMount.
    //Esse Hook sera executado somente uma vez pois nao foi
    //passado com parametro uma dependencia para fazer alterações
    const storageTech = localStorage.getItem("tech");
    console.log(tech);
  }, []);

  useEffect(() => {
    //Simulando o componentDidUpdate.
    //Esse hook sera executado toda vez que a variavel tech foi modificada
    //desde de a sua primeira instancia.
    localStorage.setItem("tech", JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Voce tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
