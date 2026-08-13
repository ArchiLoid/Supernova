 
    function PlayerInfo({ player, rank, wins, loses, winrate, matchesCount }) {
        const nickName = player?.steamAccount?.name
        const playerAvatar = player?.steamAccount?.avatar
        
        return (
    <>
        <div className = "playerInfo">
        <div className= "playerName">
          {player ? (
            <>
               <img
                    className="playerAvatar"
                    src={playerAvatar}
                    alt={playerAvatar}
                />

                <h2 className="playerNick">
                    {nickName}
                </h2>

              <p>
                {rank}
              </p>
            </>
          ) : (
            <p>
              This player has a private Steam profile or unavailable data.
            </p>
          )}
        </div>

        <div className="statsInf">
            
            <div className= "gamesCount">
            
          
             <h2 className="total_games">
                {matchesCount}
            </h2>
           

            <h2 className="wins">
                {wins}
            </h2>
        

            <h2 className="loses">
                {loses}
            </h2>
         

            </div>

          <div className="winrateBox">
          <p className = {winrate >= 50 ? "green" : "red" }>
          {winrate.toFixed(2)}%
        </p>
          </div>
        </div>
       
        </div>

        <div className ="games">

          <h2>Player History</h2>
        </div>
</>
)}

export default PlayerInfo