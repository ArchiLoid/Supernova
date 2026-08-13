export async function heroesImg() {
    const response = await fetch("https://api.opendota.com/api/heroStats")

    if (!response.ok) {
        throw new Error("Failed to get heroes")
    }

    return response.json()
}

