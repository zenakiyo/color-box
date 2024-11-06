
import PropTypes from 'prop-types'
export default function Die({sides}) {
    const number = Math.floor((Math.random() * sides) + 1)
    const styles = {color: number % 2 === 0 ? "green" : "red"}
    return(
    <div>
        <h1 style={styles}>Die Roll: {number}</h1>
        <button>Roll</button>
    </div>
    )
}
Die.propTypes = {
    sides: PropTypes.number
}