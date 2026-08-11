
    function SideBar(){

        function ScrollToSection(id){
        const section = document.getElementById(id)

            section.scrollIntoView({
                behavior: "smooth"
            })
        }
        return(
            <>
            <div className="sideBar">
            <button className = "sideBtn" onClick={() => ScrollToSection("information")}>
                Information
            </button>
            
            <button className = "sideBtn" onClick={() => ScrollToSection("heroes")}>
                Heroes
            </button>
            
            <button className = "sideBtn" onClick={() => ScrollToSection("leaderboard")}>
                LeaderBoard
            </button>

            <button className = "sideBtn" onClick={() => ScrollToSection("items")}>
                Items
            </button>

           <button className = "sideBtn" onClick={() => ScrollToSection("api")}>
                API Info
            </button>

            </div>
            </>
        )
    }


    export default SideBar