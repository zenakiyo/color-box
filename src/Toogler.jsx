import { useState } from "react";
export default function Toggler() {
    const [isHappy, seIsHappy] = useState(true);
    const [num, setNum] = useState(0);
    // setInterval(() => toggleHappy(), 1000)
    return(
        <>
            <h3>Count : {num}</h3>
            <button className="toggler" onClick={() => {seIsHappy(!isHappy); setNum(num + 1)}} >
                {isHappy ? "😀" : "🥲"}
            </button>
        </>
    )
}