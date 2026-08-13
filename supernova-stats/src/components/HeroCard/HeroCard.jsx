 import heroLore from "../../data/heroLore"
 
 function HeroCard({ hero, heroOnClick}) {
           const lore = heroLore[hero.id]
          

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

    export default HeroCard