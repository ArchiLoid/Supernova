
    function MatchCard({match, playerId, heroes }){
       
         const minutes = Math.floor(match.durationSeconds / 60)
        const seconds = match.durationSeconds % 60

        const formattedSeconds = String(seconds).padStart(2, "0")

        const date = new Date(match.startDateTime * 1000)

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()


         const myPlayer = match.players.find(
          (player) => player.steamAccountId === Number(playerId)
         )

         if (!myPlayer) {
          return null
      }

         const myHero = heroes.find(
          (hero) => hero.id === myPlayer.heroId
        )
        const kills = myPlayer.kills
        const deaths = myPlayer.deaths
        const assists = myPlayer.assists

       return (
       <div className="game-card" key={match.id}>

  <div className="hero-info">
    <img className="hero-img" src={`https://cdn.cloudflare.steamstatic.com${myHero.img}`} />
  </div>

   <div className="date">
    <p>
        {day}/{month}/{year}
    </p>
  </div>

  <div className="match-info">
    <p className="duration">
      {minutes}:{formattedSeconds}
    </p>

    <p className={myPlayer.isVictory ? "win result" : "lose result"}>
      {myPlayer.isVictory ? "Win" : "Lose"}
    </p>
  </div>

  <div className="kda">
    <p>
      {kills}/{deaths}/{assists}
    </p>
  </div>

 
     
</div>
       )
    }

export default MatchCard