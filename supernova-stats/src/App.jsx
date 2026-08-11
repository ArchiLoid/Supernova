import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css'
import Layout from './components/Layout'

import Home from './pages/Home'
import Heroes from './pages/Heroes'
import LeaderBoard from './pages/LeaderBoard'
import Items from './pages/Items'
import Player from './pages/Player'
import Footer from "./components/Footer";

function App() {


  return (
  <>
    <BrowserRouter>

    <Routes>
    <Route path="/" element= {<Layout />} >
    <Route index element={<Home />} />
    <Route path="heroes" element= {<Heroes />} />
    <Route path="leaderboard" element= {<LeaderBoard />} />
    <Route path="items" element= {<Items />} />
    <Route path="player" element= {<Player/>} />
    </Route>
    
    </Routes>
    </BrowserRouter>
     
     <Footer />
     
     </>
  )
}

export default App
