
import './SlotMachine.css'
export default function Die() {
    const options = ["H", "J", "K", "L"]
    function rotate() { 
        const draw1 = Math.floor((Math.random() * options.length))
        const draw2 = Math.floor((Math.random() * options.length))
        const draw3 = Math.floor((Math.random() * options.length))
        const draw4 = Math.floor((Math.random() * options.length))
        const winResult = draw1 === draw2 && draw2 === draw3 && draw3 === draw4 ? true : false
        return [draw1, draw2, draw3, draw4, winResult]
    }
    const drawArr = rotate()
    return(
    <div>
        <span>{drawArr[4] ? "Win" : "Lose"}</span>
        <div className='slotDiv'>
            <span>{options[drawArr[0]]}</span><span>-</span>
            <span>{options[drawArr[1]]}</span><span>-</span>
            <span>{options[drawArr[2]]}</span><span>-</span>
            <span>{options[drawArr[3]]}</span>
        </div>
        <button onClick={rotate()}>Spin</button>
    </div>
    )
}