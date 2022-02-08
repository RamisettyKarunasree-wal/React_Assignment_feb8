import PropTypes from "prop-types";
function AddNos(props) {
    return (
        <div className="Item addNosItem">
            <h2>Adding Using Props</h2>
            <h3>Sum of {props.num1} , {props.num2} = {props.num1 + props.num2}</h3>
        </div>
    );
}
AddNos.propTypes = {
    num1: PropTypes.string,
    num2: PropTypes.number
}
export default AddNos;