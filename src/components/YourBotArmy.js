import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({addBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {/* {<BotCard addBot={addBot} />} */}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
