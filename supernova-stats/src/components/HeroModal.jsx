import '../App.css'

   function HeroModal({ hero, onClose, lore }) {
    const winRate = ((hero.pub_win / hero.pub_pick) * 100).toFixed(1);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="hero-modal" onClick={(e) => e.stopPropagation()}>

                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <div className="hero-modal-image">
                    <img
                        src={`https://cdn.cloudflare.steamstatic.com${hero.img}`}
                        alt={hero.localized_name}
                    />

                    <div className="hero-modal-title">
                        <h2>{hero.localized_name}</h2>
                    </div>
                </div>

                <div className="hero-modal-content">

                    <div className="hero-stats">

                        <div className="stat">
                            <span>Roles</span>
                            <strong>{hero.roles.join(", ")}</strong>
                        </div>

                        <div className="stat">
                            <span>Games Played</span>
                            <strong>{hero.pub_pick.toLocaleString()}</strong>
                        </div>

                        <div className="stat">
                            <span>Winrate</span>
                            <strong>{winRate}%</strong>
                        </div>

                    </div>

                    <div className="hero-lore">
                        <h3>About the hero</h3>
                        <p>{lore?.short}</p>
                    </div>

                </div>
                <p className="stats-period">information for 7 days</p>
            </div>
            
        </div>
    );
}

    export default HeroModal