import React, { useState, useEffect } from "react";
import "./Team.css";

const Team = ({ team, id, onAddChannel, onRemoveChannel }) => {
  const [channelName, setChannelName] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    const channelExists = team.channels.some(
      (channel) => channel.name === channelName
    );
    setDisabledBtn((channelName.trim() === "") | channelExists ? true : false);
  }, [channelName]);

  const handleAddChannel = () => {
    if (channelName.trim() !== "") {
      onAddChannel(id, channelName);
      setChannelName("");
    }
  };

  const handleRemoveChannel = (channelId) => {
    onRemoveChannel(id, channelId);
  };

  return (
    <div data-testid={`team-${id}`}>
      {team && <h4 className="mt-0 mb-6">{team.name}</h4>}
      <div className="layout-row justify-content-end mb-6">
        <input
          placeholder="Enter Channel Name"
          className="channel-name-input w-45 px-13"
          data-testid={`channel-name-input-${id}`}
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <button
          className="channel-name-btn x-small w-35 h-30 pa-6 ma-0 ml-6"
          data-testid={`add-channel-btn-${id}`}
          onClick={handleAddChannel}
          disabled={disabledBtn}
        >
          Add Channel
        </button>
      </div>
      <ul className="styled mb-20 pl-25" data-testid={`channel-list-${id}`}>
        {team.channels.map((channel, index) => (
          <li
            key={channel.id}
            className="flex slide-up-fade-in justify-content-between align-items-center pl-10 pr-5 py-6 mt-0 mb-6"
          >
            <span>{channel.name}</span>
            <button
              data-testid={`remove-channel-button-${id}${channel.id}`}
              className="icon-only x-small danger ma-0 pa-0"
              onClick={() => handleRemoveChannel(channel.id)}
            >
              <i className="material-icons">delete</i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
