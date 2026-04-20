import "./FavoriteCard.css"

import { useLocalStorage } from "../maintenance-list/hooks/useLocalStorage";
import FavoriteCard from "./FavoriteCard";

export default function ViewFavorites () {
    const { cards, removeCard } = useLocalStorage()
    console.log(cards)

    return (
        <div className="view-favorites-cards">
            {cards.map((favCard) => {
                return <FavoriteCard key={favCard.id} data={favCard} removeCardHandler={removeCard}/>
            })}
        </div>
    )
}