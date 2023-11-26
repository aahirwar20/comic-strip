import AddIcon from '@mui/icons-material/Add';
import Panel from './Panel/index.js';
import Option from './Option/index.js';
import './index.css'

const ComicPanel = (props) =>{

    return(
       <>  
           <Option/>
          { 
            props.comicImages.map((comicImage, index) => {
                return (
                <div key={index}>
                    {index === props.newPanelId ? (
                    <div
                        className={`new_panel ${props.currentPanelId === index ? 'selected' : ''}`}
                        onClick={() => { props.handleCurrentPanel(index) }}
                    >
                        <div className='add_icon'> <AddIcon fontSize='large' /></div>
                    </div>
                    ) : (
                    comicImage ? (
                        <Panel
                            index = {index}
                            comicImage = {comicImage}
                            currentPanelId = {props.currentPanelId}
                            handleCurrentPanel={props.handleCurrentPanel}
                            speech = {props.speechs[index]}
                            speechCoordinate = {props.speechCoordinates[index]}
                        />
                    ) : (<></>)
                    )}
                </div>
                );
            })
        }
       </>
    )
}

export default ComicPanel
