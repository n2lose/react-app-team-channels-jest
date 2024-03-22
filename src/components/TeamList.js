import React, { useState, useEffect } from "react";
import Team from "./Team";
import "./TeamList.css";

const TeamList = () => {
  const [newTeam, setNewTeam] = useState("");
  const [teamList, setTeamList] = useState([
    {
      name: "Team1",
      channels: [
        { name: "Channel1", id: 1 },
        { name: "Channel2", id: 2 },
      ],
    },
    {
      name: "Team2",
      channels: [
        { name: "Channel1", id: 1 },
        { name: "Channel2", id: 2 },
      ],
    },
  ]);

  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    const teamExists = teamList.some((team) => team.name === newTeam);
    setDisabledBtn(newTeam.trim() === "" || teamExists ? true : false);
  }, [newTeam]);

  const handleAddTeam = () => {
    if (newTeam.trim() !== "") {
      const teamExists = teamList.some((team) => team.name === newTeam);
      if (teamExists) {
        alert("Team name already exists. Please choose a different name.");
        return;
      }

      const newTeamObj = {
        name: newTeam,
        channels: [],
      };
      setTeamList([...teamList, newTeamObj]);
      setNewTeam("");
    }
  };

  const handleAddChannel = (teamId, newChannel) => {
    setTeamList((prevState) => {
      return prevState.map((team, index) => {
        if (index === teamId) {
          return {
            ...team,
            channels: [
              ...team.channels,
              { name: newChannel, id: team.channels.length + 1 },
            ],
          };
        }
        return team;
      });
    });
  };

  const handleRemoveChannel = (teamId, channelId) => {
    setTeamList((prevState) => {
      return prevState.map((team, index) => {
        if (index === teamId) {
          return {
            ...team,
            channels: team.channels.filter((c) => c.id !== channelId),
          };
        }
        return team;
      });
    });
  };

  return (
    <div className="w-50 mx-auto">
      <div className="card w-35 mt-50 mx-auto px-10 py-15">
        <div className="layout-column" data-testid="team-list">
          {teamList.map((team, id) => (
            <Team
              key={id}
              id={id}
              team={team}
              onAddChannel={handleAddChannel}
              onRemoveChannel={handleRemoveChannel}
              data-testid={`channel-list-${id}`}
              dataTestId={`channel-list-${id}`}
            />
          ))}
        </div>
        <div className="layout-row">
          <input
            placeholder="Enter Team Name"
            className="team-list-input w-75"
            data-testid="team-name-input"
            value={newTeam}
            onChange={(e) => setNewTeam(e.target.value)}
          />
          <button
            className="team-list-btn x-small w-35 h-30 pa-6 ma-0 ml-6"
            data-testid="add-team-btn"
            onClick={handleAddTeam}
            disabled={disabledBtn}
          >
            Add Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
