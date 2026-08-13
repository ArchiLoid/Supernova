export function getRankText(rank){

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

    export default getRankText