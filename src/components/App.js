import React, {useState, useEffect} from "react";
import BotsPage from "./BotsPage";

function App() {

  const [bots, setBots] = useState([])
  const [plusBot, setPlusBot] = useState([])

  useEffect(()=> {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(setBots)
  }, [])
  

  function renderBot(addBot) {
     const newBot= bots.filter(bot => bot.id !== addBot.id)
     setBots(newBot)
  }



  

  return (
    <div className="App">
      <BotsPage bots={bots} renderBot={renderBot}  />
    </div>
  );
}

export default App;
