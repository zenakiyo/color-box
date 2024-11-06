
import './App.css'
import PropTypes from 'prop-types'
function Greeter({name = "User"}) {
    return <h1>Hellow, {name}</h1>
}
Greeter.propTypes = {
    name: PropTypes.string,
}

function Add({x , y}) {return <p>{x + y}</p>}
Add.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
}

export  {Greeter, Add}