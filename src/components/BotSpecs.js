import React from "react";

const BotSpecs = ({ bot, clearSpec, addBot }) => {
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img
            alt="oh no!"
            className="img-fluid rounded-circle"
            src={bot.avatar_url}
          />
        </div>
        <div className="col-md-6">
          <h2>Name: {bot.name}</h2>
          <p>
            <strong>Catchphrase: </strong>
            {bot.catchphrase}
          </p>
          <strong>
            Class: {bot.bot_class} {botType}
          </strong>
          <br />
          <div className="row mt-3">
            <div className="col">
              <i className="bi bi-heart-fill text-danger"></i>
              <strong>{bot.health}</strong>
            </div>
            <div className="col">
              <i className="bi bi-lightning-charge-fill text-warning"></i>
              <strong>{bot.damage}</strong>
            </div>
            <div className="col">
              <i className="bi bi-shield-fill text-primary"></i>
              <strong>{bot.armor}</strong>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn btn-primary me-3" onClick={clearSpec}>
              Go Back
            </button>
            <button className="btn btn-primary" onClick={() => addBot(bot)}>
              {bot.owned ? "Remove From Army" : "Enlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;