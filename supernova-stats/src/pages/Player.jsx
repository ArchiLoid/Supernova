import sunrise from "../assets/images/sunrise.png"
import { useState, useEffect } from "react"
import '../App.css'

function Player() {
  const [input, setInput] = useState("")
  const [playerId, setPlayerId] = useState("")
  const [playerData, setPlayerData] = useState(null)
  const [matches, setMatches] = useState([])
  const [heroes, setHeroes] = useState([])
  const [showAll, setShowAll] = useState(false)



    useEffect(() => {
      async function heroesImg(){
         const response = await fetch("https://api.opendota.com/api/heroStats")
        const data = await response.json()

    setHeroes(data)
      }
      heroesImg()
    }, [])
  async function SearchUser(id) {
    try {
      if (input.trim() === "") {
        alert("Enter ID!")
        return
      }

      const response = await fetch("https://api.stratz.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdWJqZWN0IjoiYzM4MjBjM2ItMjVmNi00YTg0LWEwMzYtYzk2ZmFiMjM3N2YzIiwiU3RlYW1JZCI6IjEwOTQyOTU4NTkiLCJBUElVc2VyIjoidHJ1ZSIsIm5iZiI6MTc4MTQzMjA0NywiZXhwIjoxODEyOTY4MDQ3LCJpYXQiOjE3ODE0MzIwNDcsImlzcyI6Imh0dHBzOi8vYXBpLnN0cmF0ei5jb20ifQ.1EASJQFty8mSC0ewhL2ujiZG4wBECnlxxIZkTfXB6co"
    },
    body: JSON.stringify({
      query: `
        query {
          player(steamAccountId: ${id}) {
            matchCount
            winCount
            ranks {
              rank
            }
            steamAccount {
              name
              avatar
            }
            matches(request: { take: 20 }) {
              id
              startDateTime
              durationSeconds
              players {
                steamAccountId
                heroId
                isVictory
                 kills
                deaths
                assists
              }
            }
          }
        }
      `
    })
});
    
      if (!response.ok) {
        throw new Error("Player not found")
      }

      const data = await response.json()

      console.log(data)

      setPlayerData(data.data.player)
      setMatches(data.data.player.matches)
      setShowAll(false)

    } catch (error) {
      alert(`There's a problem: ${error.message}`)
    }
    
  }
   const nickName = playerData?.steamAccount?.name
  const playerAvatar = playerData?.steamAccount?.avatar
    const currentRank = playerData?.ranks?.[0]?.rank

  const wins = playerData?.winCount
  const matchesCount = playerData?.matchCount
  const loses = matchesCount ? matchesCount - wins : "";

  const winrate = matchesCount ?
  ( wins / matchesCount ) * 100  : 0

    function getRankText(rank){

       if (rank >= 80) {
      return "Immortal"
    }
    
      const rankNumber = Math.floor(rank / 10)
      const level = rank % 10
      
      if (rankNumber === 1) {
        return `Herald ${level}`
      }

      if (rankNumber === 2) {
        return `Guardian ${level}`
      }

      if (rankNumber === 3) {
        return `Crusader ${level}`
      }

      if (rankNumber === 4) {
        return `Archon ${level}`
      }

      if (rankNumber === 5) {
        return `Legend ${level}`
      }

      if (rankNumber === 6) {
        return `Ancient ${level}`
      }

      if (rankNumber === 7) {
        return `Divine ${level}`
      }

    }

    const rank = currentRank ? getRankText(currentRank) : ""
       const showMore = showAll ? matches : matches.slice(0, 5)

  return (
    <>
     <div className="findInfo">
 <p className="guide">for searching, enter your or another player friendship code</p>
    <form onSubmit={(e) => {
    e.preventDefault()
    SearchUser(input)
    setPlayerId(input)
  }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button>
        Find User
      </button>
      </form>
</div>
      {playerData && (
        <>
        <div className = "playerInfo">
        <div className= "playerName">
          {playerData ? (
            <>
              <img className="playerAvatar" src={playerAvatar} />

              <h2 className="playerNick" >
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
      {showMore.map((match) => {
        
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

})}
     
  {playerData && ( 
    matches.length === 0 ? ( 
      <p>The player hasn`t played matches</p>
    ):(
      <button className="showMore" onClick={() => setShowAll(!showAll)}>Show More!</button>
    )
    )
  }

    </>
  )
}

export default Player