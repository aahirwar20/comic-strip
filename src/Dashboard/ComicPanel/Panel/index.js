import { useRef , useEffect} from 'react';
import './index.css'

const Panel = (props) => {
    const bubbleRef = useRef(null);
    
    useEffect(()=>{
        const input = bubbleRef.current;
        
        input.focus();
        if (bubbleRef.current) {
            bubbleRef.current.style.left = `${Math.round(props.speechCoordinate.x*150/340)}px`;
            bubbleRef.current.style.top = `${Math.round(props.speechCoordinate.y*150/340)}px`;
        }
    },[props.speechCoordinate])
    
    return(<div className='panel'>
        <div 
           ref={bubbleRef}
           className="speech_bubble"
        >
            {props.speech}
        </div>
        <img
            src={props.comicImage}
            alt="Comic panel"
            className={props.currentPanelId === props.index ? 'selected' : ''}
            onClick={() => { props.handleCurrentPanel(props.index) }}
        />
        
    </div>)
}

export default Panel
