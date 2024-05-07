import React from "react";

const BotCard = (props) => {
  const { bot } = props;

  let botType;

  
  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="bi bi-shield-check" />;
      break;
    case "Defender":
      botType = <i className="bi bi-shield" />;
      break;
    case "Support":
      botType = <i className="bi bi-ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="col">
      <div
        className="card"
        key={bot.id}
        onClick={() => props.addBot(bot)}
      >
        <img className="card-img-top" src={bot.avatar_url} alt="Bot Avatar" />
        <div className="card-body">
          <h5 className="card-title">
            {bot.name} {botType}
          </h5>
          <p className="card-text">{bot.catchphrase}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-heartbeat"></i>Health: {bot.health}
          </li>
          <li className="list-group-item">
            <i className="bi bi-lightning"></i>Damage: {bot.damage}
          </li>
          <li className="list-group-item">
            <i className="bi bi-shield"></i> Armor: {bot.armor}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BotCard;