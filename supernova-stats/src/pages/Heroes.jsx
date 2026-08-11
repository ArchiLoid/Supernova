    import { useState,useEffect } from "react";    
    import '../App.css'
    import HeroModal from "../components/HeroModal";
    import heroLore from "../data/heroLore";
    
    function Heroes(){
            const [heroes, setHeroes] = useState([])
            const [isModalOpen, setModalOpen] = useState(false)
            const [selectedHero, setSelectedHero] = useState(null)

        useEffect(() =>  {   
        async function getHero(){

            try {
               const response = await fetch("https://api.opendota.com/api/heroStats")

            if (!response.ok){
                throw new Error("There`s error!")
            }

            const data = await response.json()
            setHeroes(data)
            }catch(err){
                alert("Failed To Get Data", err.message)
            }
         
        }

        getHero()
        }, [])  



        const strength = heroes.filter(
            hero => hero.primary_attr === "str"
        )

        const agility = heroes.filter(
            hero => hero.primary_attr === "agi"
        )

        const intelligence = heroes.filter(
            hero => hero.primary_attr === "int"
        )

        const universal = heroes.filter(
            hero => hero.primary_attr === "all"
        )

        function onClose(){
            setModalOpen(false)
        }

            function heroOnClick(hero){
                setSelectedHero(hero)
                setModalOpen(true)
            }
        return (
            <>
        <div className="heroes-columns">

    <div className="heroes-column-left">
        <h2>Strength</h2>

        <div className="heroes-grid">
            {strength.map(hero => (
                <HeroCard key={hero.id} hero={hero} heroOnClick = {heroOnClick} />
            ))}
        </div>

        <h2>Intelligence</h2>

        <div className="heroes-grid">
            {intelligence.map(hero => (
                <HeroCard key={hero.id} hero={hero}  heroOnClick = {heroOnClick} />
            ))}
        </div>
    </div>


    <div className="heroes-column-right">
        <h2>Agility</h2>

        <div className="heroes-grid">
            {agility.map(hero => (
                <HeroCard key={hero.id} hero={hero}  heroOnClick = {heroOnClick} />
            ))}
        </div>

        <h2>Universal</h2>

        <div className="heroes-grid">
            {universal.map(hero => (
                <HeroCard key={hero.id} hero={hero}  heroOnClick = {heroOnClick} />
            ))}
        </div>
    </div>

</div>

            {selectedHero && isModalOpen && (
                <HeroModal hero = {selectedHero} onClose = {onClose} lore = {heroLore[selectedHero.id]}/>
            )}
  </>
)

    function HeroCard({ hero, heroOnClick}) {
           const lore = heroLore[hero.id]
           console.log(hero)

        return (
            <div className="strength_page" onClick = {() => heroOnClick(hero)}>
                <img
                    src={`https://cdn.cloudflare.steamstatic.com${hero.img}`}
                    alt={hero.localized_name}
                />
                
                <h3>{hero.localized_name}</h3>
            </div>
        )
    }
}

    

    export default Heroes