const url = "/pseudoApi/data.json"

export const fetchData = async () => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        return json.loans
    } catch (err) {
        console.log("Error:", err)
    }
}