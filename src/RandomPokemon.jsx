import { useState } from "react"

export default function Die() {
    const [count, setCount] = useState(1)
    // const number = Math.floor((Math.random() * 1000) + 1)
    return(
        <div>
            <h1>Pokemon No. {count}</h1>
            <button onClick={() => setCount((count) => count - 1)}>Pre</button>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${count}.png`} alt=""/>
            <button onClick={() => setCount((count) => count + 1)}>Nxt</button>
            </div>
    )
} 