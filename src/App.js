import React, { Component } from 'react';
import './App.css';
import { generateCombinations, arrayContainsSet } from './utils.js'
import Checkbox from './Checkbox.js'
import Teams from './Teams.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerRanks: {
        "Mathan": 1,
        "Sheppan": 5,
        "Zuccan": 4,
        "BoranHeaton": 2,
        "Limpan": 3,
        "Suppe": 6,
        "Maggot": 7,
        "Mouth": 8,
        "Oezt": 9,
        "BigB": 10,
        "Ankan": 11,
        "Widiz": 12,
        "Tracer": 13,
        "Heimdal": 14,
        "Steffe": 16,
        "MgO": 15
      },
      selectedPlayers: new Set(),
      teams: [],
      errorMsg: ""
    }

    this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this)
    this.generateTeams = this.generateTeams.bind(this)
  }

  handleCheckboxChanged(e) {
    const player = e.target.name
    const { selectedPlayers } = this.state
    if (selectedPlayers.has(player)) {
      selectedPlayers.delete(player);
    } else {
      selectedPlayers.add(player);
    }
    this.setState({
      selectedPlayers
    })
  }

  generateTeams() {
    const selectedPlayers = Array.from(this.state.selectedPlayers)

    if (selectedPlayers.length < 4) {
      this.setState({
        errorMsg: "Select at least four players!"
      })
      return
    }
    this.setState({
      errorMsg: ""
    })

    // generate all possible team combinations
    const teamLength = Math.ceil(selectedPlayers.length / 2)
    const teams = generateCombinations(selectedPlayers, teamLength)
    
    // calculate team scores
    const teamsAndScores = []
    const addedTeams = []
    for (let firstTeam of teams) {
      if (arrayContainsSet(addedTeams, new Set(firstTeam))) {
        continue
      }

      // get opponent team
      const opponentTeam = selectedPlayers.filter(player => !firstTeam.includes(player))
      
      // calculate team scores
      const firstTeamScore = firstTeam.reduce((acc, currentPlayer) => acc + this.state.playerRanks[currentPlayer], 0)
      const opponentTeamScore = opponentTeam.reduce((acc, currentPlayer) => acc + this.state.playerRanks[currentPlayer], 0)
      const scoreDiff = Math.abs(firstTeamScore - opponentTeamScore)

      teamsAndScores.push([[firstTeam, firstTeamScore], [opponentTeam, opponentTeamScore], scoreDiff])
      addedTeams.push(new Set(firstTeam))
      addedTeams.push(new Set(opponentTeam))
    }

    // sort teams by ascending score difference
    const sortedTeams = teamsAndScores.sort((a, b) => a[2] - b[2])
    this.setState({
      teams: sortedTeams
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>CS Team Generator</h1>
        </div>
        <div className="content">
          <h2>Select players</h2>
          <div className="checkboxes-container">
            {Object.keys(this.state.playerRanks).map(player => <Checkbox 
                label={player}
                key={player}
                onChange={this.handleCheckboxChanged}
              />
            )}
          </div>
          <button onClick={this.generateTeams}>Generate Teams!</button>
          {this.state.teams.length > 0 &&
            <div>
              <h2>Teams</h2>
              {this.state.teams.slice(0, 10).map((team, index) => 
                <Teams 
                  key={index}
                  team1={team[0][0]}
                  team1Score={team[0][1]}
                  team2={team[1][0]}
                  team2Score={team[1][1]}
                />
              )}
            </div>
          }
          {this.state.errorMsg !== "" &&
            <p className="error-msg">{this.state.errorMsg}</p>
          }
        </div>
      </div>
    );
  }
}

export default App;
