import './WrongResult.css';
const WrongResult = (props) => {
    return(
        <div className="alert alert-danger failure_box" role="alert">
        {"Please fill all the inputs"}
        </div>
    );
}

export default WrongResult;