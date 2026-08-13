const STRATZ_TOKEN = "YOUR_BEARER_TOKEN_HERE"

export async function stratzApi(id){
      const response = await fetch("https://api.stratz.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       "Authorization": `Bearer ${STRATZ_TOKEN}`
    },
    body: JSON.stringify({
      query: `
        query {
          player(steamAccountId: ${id}) {
            matchCount
            winCount
            ranks {
              rank
            }
            steamAccount {
              name
              avatar
            }
            matches(request: { take: 20 }) {
              id
              startDateTime
              durationSeconds
              players {
                steamAccountId
                heroId
                isVictory
                 kills
                deaths
                assists
              }
            }
          }
        }
      `
    })
});
    
      if (!response.ok) {
        throw new Error("Player not found")
      }

      return response.json()
}

