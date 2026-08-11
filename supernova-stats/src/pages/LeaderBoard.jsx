import { useState,useEffect } from 'react'
import '../App.css'


function LeaderBoard(){
    const [ leaderboard, setLeaderboard] = useState([])

        useEffect(() => {
            
            async function getLeaderboard(){
            try{
                  const response = await fetch(`/api/dota-leaderboard`)
                
           if (!response.ok){
                throw new Error("There`s error!")
            }   
                const data = await response.json()
                console.log(data)
                setLeaderboard(data.leaderboard)

            }catch(err){
                alert("There`s error", err.message)
            }

        }

        getLeaderboard()
        }, [])
    
    
        return(
          <>
          <h2 className='leaderboard' >Leaderboard</h2>
            {leaderboard.slice(0, 99).map((player => (
                <PlayerCard key = {player.account_id} player = {player}/>
            )))}

           </>
        ) 
        

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
    }

    export default LeaderBoard