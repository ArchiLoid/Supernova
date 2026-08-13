import { useState,useEffect } from 'react'
import './LeaderBoard.css'
import PlayerCard from '../../components/PlayerCard/PlayerCard'


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
            {leaderboard.slice(0, 99).map((player, index) => (
                <PlayerCard key = {player.account_id ?? index} player = {player}/>
            ))}

           </>
        ) 
        

    }

    export default LeaderBoard