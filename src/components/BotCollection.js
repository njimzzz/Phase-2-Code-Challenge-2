import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, addBot }) => {
  const renderBots = () => {
    return bots.map((bot) => {
      return <BotCard key={bot.id} bot={bot} addBot={addBot} />;
    });
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {renderBots()}
      </div>
    </div>
  );
};

export default BotCollection;