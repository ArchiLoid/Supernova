
function PlayerCard({player}){
            return(
                
                 <div className="player-card">
            <div className="player-rank">
                {player.rank}
                </div>

        <div className="player-info">
        <p className="player-name">
            {player.name}
        </p>

        <span className="player-team">
            {player.team_tag || "NO TEAM"}
        </span>
    </div>
  </div>
            )
        }

        export default PlayerCard