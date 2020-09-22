import React from 'react';
import './Teams.css';

export default function Teams({ team1, team2, team1Score, team2Score }) {
  return (
    <div>
      <div className="teams-container">
        <div className="team-container">
          <h3>Team 1</h3>
          {/*<p>Score: {team1Score}</p>*/}
          {team1.map(player => <div key={player}>{player}</div>)}
        </div>
        <div className="team-container">
          <h3>Team 2</h3>
          {/*<p>Score: {team2Score}</p>*/}
          {team2.map(player => <div key={player}>{player}</div>)}
        </div>
      </div>
    </div>
  )
}