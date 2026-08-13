import sunrise from "../../assets/images/sunrise.png"
import { useState, useEffect } from "react"
import './Player.css'
import MatchCard from "../../components/MatchCard/MatchCard"
import PlayerInfo from "../../components/PlayerInfo/PlayerInfo"
import getRankText from "../../utils/rank"
import { heroesImg } from "../../services/openDota"
import { stratzApi } from "../../services/stratzApi"

function Player() {
  const [input, setInput] = useState("")
  const [playerId, setPlayerId] = useState("")
  const [playerData, setPlayerData] = useState(null)
  const [matches, setMatches] = useState([])
  const [heroes, setHeroes] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    async function loadHeroes() {
        try {
            const data = await heroesImg()
            setHeroes(data)
        } catch (error) {
            console.error(error)
        }
    }

    loadHeroes()
}, [])

  async function SearchUser() {
    try {
      if (input.trim() === "") {
        alert("Enter ID!")
        return
      }
      const data = await stratzApi(input)

      setPlayerData(data.data.player)
      setMatches(data.data.player.matches)
      setShowAll(false)

    } catch (error) {
      alert(`There's a problem: ${error.message}`)
    }
    
  }
    const currentRank = playerData?.ranks?.[0]?.rank

  const wins = playerData?.winCount
  const matchesCount = playerData?.matchCount
  const loses = matchesCount ? matchesCount - wins : "";

  const winrate = matchesCount ?
  ( wins / matchesCount ) * 100  : 0

    

    const rank = currentRank ? getRankText(currentRank) : ""
       const showMore = showAll ? matches : matches.slice(0, 5)

  return (
    <>
     <div className="findInfo">

 <p className="guide">
  for searching, enter your or another player friendship code
  </p>

    <form onSubmit={(e) => {
    e.preventDefault()
      setPlayerId(input)
    SearchUser(input)
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
       <PlayerInfo 
        player={playerData}
      rank={rank}
      wins={wins}
      loses={loses}
      matchesCount={matchesCount}
       winrate={winrate}
       />

    )}
      {showMore.map((match) => {
        return( 
    <MatchCard
      key={match.id}
      match={match}
      playerId={playerId}
      heroes={heroes}
    />
        )
})}
     
  {playerData && ( 
    matches.length === 0 ? ( 
      <p>The player hasn`t played matches</p>
    ):(
      <button className="showMore" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : "Show More"}</button>
    )
    )
  }

    </>
  )
}

export default Player