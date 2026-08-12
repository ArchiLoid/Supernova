import sunrise from "../assets/images/sunrise.png" 
import SideBar from "../components/Sidebar"
import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  function goTo(path){
    navigate(path)
  }

  return (
  <>
     <div className="app center">
  
     <img src={sunrise} className ="sunrise" alt="Sunrise buff" />
      <h1>Supernova Stats</h1>
    <p>The best analytic Dota2</p>
      <button className="button" onClick={() => goTo("/player")}>
        Search player!
      </button>
    </div>
  

    <div className="page-layout">
     
     
       <SideBar />

      <main>
      <section id="information" className="description_page">
    <div className="description">
    <h2 className="supernova_h2">What is Supernova Stats?</h2>
    <p className="supernova_desc">Supernova Stats is a community-driven Dota 2 analytics platform created to help players understand the game through clear, accurate, and modern statistics. Our goal is to transform raw match data into useful insights that anyone can use to improve their gameplay.
    Starting with Dota 2, Supernova Stats collects and organizes public match information, presenting it through a fast, intuitive, and visually clean interface. From player profiles and hero statistics to match analysis and item trends, every feature is designed to make learning from data simple and enjoyable.
    The project is constantly evolving. New features, interface improvements, and balance updates are added regularly to keep pace with the ever-changing Dota 2 meta. User feedback plays an important role in shaping the future of the platform.
    Supernova Stats is completely free to use. We believe that every player, regardless of skill level, should have access to powerful analytical tools without subscriptions or hidden limitations.
    Our mission is to make advanced Dota 2 analytics accessible to everyone. We want every player—from complete beginners to experienced competitors—to better understand their matches, discover new strategies, and continuously improve their performance.</p>

    </div>
    </section>

    <section id="heroes" className="hero_description">
      <div className="description">
        <h2 className="supernova_h2">Heroes</h2>
        <p className = "supernova_desc">Heroes are the foundation of every Dota 2 match. One hero can completely change the tempo of the game, and the way a player uses that hero can determine the outcome of an entire team fight—or even the entire match.

The Heroes section in Supernova Stats is designed to provide clear, useful, and easy-to-read information without overwhelming players with unnecessary complexity. Instead of focusing on endless build variations, we highlight the statistics and details that are most important for understanding a hero’s real performance.

Here you can explore:

• Overall win rate
• Pick rate
• Attack type (Melee or Ranged)
• Hero difficulty
• Primary role (Carry, Mid, Offlane, Soft Support, Hard Support)
• Lane performance statistics
• Win rate and pick rate for each lane
• Hero lore and background information
• Key strengths and weaknesses
• Performance trends across different roles and lanes

Our goal is not to recreate every feature of large analytics platforms, but to build a fast, clean, and accessible hero database that helps players quickly understand how a hero is played, where that hero performs best, and how successful that hero is in different situations.

Supernova Stats is built for players who want straightforward, practical information that helps them learn, improve, and enjoy Dota 2 through a modern and easy-to-use interface.</p>
     <button className = "button_navigator" onClick={() => goTo("/heroes")}>Explore Heroes</button> 
      </div>
    </section>

    <section id="leaderboard" className="leaderboard_description">
  <div className="description">
    <h2 className="supernova_h2">Leaderboard</h2>
    <p className="supernova_desc">
      The Leaderboard section is designed to showcase the most successful and active players in the Supernova Stats ecosystem. Instead of focusing only on professional matches, we aim to highlight outstanding performances from players across different skill levels and hero pools.

      Here you can discover:

      • Players with the highest recent win rates
      • Most active hero specialists
      • Top-performing players on specific heroes
      • Recent rank improvements and notable performances
      • Trending players who are climbing the ladder quickly
      • Performance comparisons across different roles and match periods

      Our goal is to make competitive Dota 2 statistics easy to explore while keeping the interface clean, fast, and enjoyable to use. The Leaderboard helps players track exceptional performances, discover new hero specialists, and better understand the current competitive environment.
    </p>
     <button className = "button_navigator" onClick={() => goTo("/leaderboard")}>Explore Leaderboard</button> 
  </div>
</section>

    <section id="items" className="items_description">
  <div className="description">
    <h2 className="supernova_h2">Items</h2>
    <p className="supernova_desc">
      Items are one of the most important strategic elements in Dota 2. The right item choice can dramatically increase a hero’s impact, improve survivability, or create completely new opportunities during a match.

      The Items section in Supernova Stats focuses on presenting practical and easy-to-understand item statistics rather than complex build systems.

      Here you can explore:

      • Most popular items in the current meta
      • Pick rate for individual items
      • Win rate associated with each item
      • Frequently purchased item combinations
      • Early-game, mid-game, and late-game item trends
      • Item performance across different hero roles
      • Current meta trends and shifting item popularity

      This section is designed to help players quickly understand which items are currently effective, how often they are used, and how successful they are in real matches, all through a simple and modern interface.
    </p>
     <button className = "button_navigator" onClick={() => goTo("/items")}>Explore Items</button> 
  </div>
</section>

    <section id="api" className="api_description">
  <div className="description">
    <h2 className="supernova_h2">STRATZ API</h2>
    <p className="supernova_desc">
      Supernova Stats uses the official STRATZ API as its primary source of Dota 2 match and player data. STRATZ provides one of the most comprehensive Dota 2 data platforms available, offering detailed statistics for heroes, players, matches, items, and competitive trends.

      By using STRATZ API, Supernova Stats can deliver:

      • Accurate public match statistics
      • Detailed player and hero performance data
      • Lane and role-based analytics
      • Item and meta trends
      • Historical match information
      • Fast and reliable access to constantly updated Dota 2 data

      The integration with STRATZ API allows Supernova Stats to focus on building a clean, user-friendly analytics experience while relying on a trusted and continuously maintained data source for the underlying statistics.
    </p>
  </div>
</section>
</main>
</div>
    </>
  )
}

export default Home
