import Speech from './Speech';
import './index.css'

const EditPanel = (props) => {
    return (
        <div className="edit_panel">
          {props.isLoading ? (
            <p>Generating image...</p>
          ) : (
            <>
              {props.comicImage ? (
                <div>
                    <Speech
                        speech = {props.speech}
                        handleSpeech = {props.handleSpeech}
                        speechCoordinate = {props.speechCoordinate}
                        handleSpeechCoordinate = {props.handleSpeechCoordinate}
                    />
                   <img src={props.comicImage} alt="Comic panel" className="edit_image" />
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      );
      
}

export default EditPanel
