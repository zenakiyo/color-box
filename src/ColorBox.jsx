import { useState } from "react";

export default function ColorBox(props) {
    const [color, setColor] = useState(props.colors[Math.floor(Math.random() * props.colors.length)])
    const changeColor = () => {
        setColor((color) => color = props.colors[Math.floor(Math.random() * props.colors.length)])
    }
    return (
        <div onClick={changeColor} style={{backgroundColor: color}} className="boxDiv"></div>
    )
}   