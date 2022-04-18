import './InputElement.css'

const InputElement = (props) => {
    return(
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">{props.mean}</span>
                </div>
                <input onChange={props.onInputChange} type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">{props.std}</span>
                </div>
                <input onChange={props.onInputChange} type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend prepend">
                    <span  className="input-group-text" id="inputGroup-sizing-default">{props.enter}</span>
                </div>
                <input placeholder="enter the hour in minutes (6:30 => 390)" onChange={props.onInputChange} type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">{props.exit}</span>
                </div>
                <input placeholder="enter the hour in minutes (7:00 => 420)" onChange={props.onInputChange} type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </div>

        </div>

    )
}

export default InputElement;