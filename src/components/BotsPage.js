import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, renderBot }) {
  return (
    <div>
      <YourBotArmy />
          
      <BotCollection 
          bots={bots}
          renderBot={renderBot}
      />
    </div>
  )
}

export default BotsPage;
