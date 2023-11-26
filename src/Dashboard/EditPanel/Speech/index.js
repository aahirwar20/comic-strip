import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import './index.css';

const Speech = (props) => {
  const bubbleRef = useRef(null);

  const autoResizeTextarea = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  useEffect(() => {
    const input = bubbleRef.current;
    input.focus();
    autoResizeTextarea(bubbleRef.current.querySelector('.speech_input'));
  }, [props.speech]);

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
        }}
      >
        <div ref={bubbleRef} className="speech-bubble handle">
            <textarea
                className="speech_input"
                value={props.speech}
                onChange={props.handleSpeech}
            ></textarea>
        </div>
      </Draggable>
    </>
  );
};

export default Speech;
