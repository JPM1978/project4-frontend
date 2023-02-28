// YOUR DEPLOYED API BASE URL
import url from "./url";

//indexLoader => get all decks for index route
export const indexLoader = async () => {
    const response = await fetch(url)
    const decks = await response.json()
    return decks
}

//showLoader => get a single deck for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(url + `${params.id}/`)
    const deck = await response.json()
    return deck
}