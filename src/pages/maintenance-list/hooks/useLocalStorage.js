import { useEffect, useState } from "react";

export function useLocalStorage (key = "saved") {
    const [cards, setCards] = useState(JSON.parse(localStorage.getItem(key)) || [])
    console.log(JSON.parse(localStorage.getItem(key)))

    function addCard (card) {
        setCards(prev => {
            const exists = prev.find(c => c.id === card.id)
            if (exists) return prev
            return [...prev, card]
        })
    }

    function removeCard (id) {
        setCards(prev => prev.filter(c => c.id !== id))
    }

    function checkCard (id) {
        const exists = cards.find(c => c.id === id)
        if (exists) return true
        return false
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(cards))
    }, [cards, key])

    return { cards, addCard, checkCard, removeCard }
}