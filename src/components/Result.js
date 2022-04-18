import './Result.css';
const Result = (props) => {
    return(
        <div className="alert alert-success sucess_box" role="alert">
        {"The result is " + props.out}
        </div>
    );
}

export default Result;