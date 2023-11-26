import './index.css'

const InputLayout = (props) =>{
    return(
        <div className="text-input">
                   <textarea 
                      className="text-input-area"
                      placeholder="laugh"
                      rows={5}
                      value={props.value}
                      onChange={props.handleInputChange}
                   > 
                   </textarea>
                   <button className="text-input-button" onClick={props.generatePanel}>
                        Generate
                    </button>
        </div>
    )
}

export default InputLayout