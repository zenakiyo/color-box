
import PropTypes from 'prop-types'
export default function Clicker(props) {
    function handleclick(){
        alert(props.message)
        console.log("Click")
    }
    return(
        <div>
            <button onClick={handleclick}>Click</button>
        </div>
    )
}
Clicker.propTypes = {
    message: PropTypes.string,
}