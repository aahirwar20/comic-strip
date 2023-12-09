import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import './index.css';

const Speech = (props) => {
  const bubbleRef = useRef(null);

  return (
    <>
      <Draggable
        allowAnyClick ={ false}
        nodeRef={bubbleRef}
        handle=".handle"
        bounds="parent"
        defaultPosition={props.speechCoordinate || { x: 0, y: 0 }}
        onStop={(e, data) => {
          props.handleSpeechCoordinate({ x: data.x, y: data.y });
          bubbleRef.current.focus()
        }}
        onDrag={(e, data) => {
          props.handleSpeechCoordinate({ x: data.x, y: data.y });
        }}
      >
        
            <textarea 
                ref={bubbleRef} 
                className="speech-bubble handle"
                value={props.speech}
                onChange={props.handleSpeech}
            ></textarea>
  
      </Draggable>
    </>
  );
};

export default Speech;
