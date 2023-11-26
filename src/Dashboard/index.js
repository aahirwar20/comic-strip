import { useState } from "react";
import getImage from "./API/index.js";
import InputLayout from "./InputLayout/index.js";
import EditPanel from "./EditPanel/index.js";
import ComicPanel from "./ComicPanel/index.js";
import './index.css'

const Dashboard = () => {
    const [comicImages, setComicImages] = useState(Array(10).fill(null));
    const [textInputs, setTextInputs] = useState(Array(10).fill(''));
    const [speechInputs, setSpeechInputs] = useState(Array(10).fill(''));
    const [speechCoordinate, setSpeechCoordinate] = useState(Array(10).fill({x:10,y:10}));
    const [currentPanelId, setCurrentPanelId] = useState(0)
    const [newPanelId, setNewPanelId] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const generatePanel = async () => {
        try {
           const index = currentPanelId
           setIsLoading(true) 
           const image = await getImage(textInputs[currentPanelId])
           const updatedImages = [...comicImages]
           updatedImages[index] = URL.createObjectURL(image)
           setComicImages(updatedImages)
           setIsLoading(false) 
           if(newPanelId === index){ 
            setNewPanelId((value) => value + 1)
            setCurrentPanelId((value) => value +1)
           }
        } catch (error) {
          console.error(error);
          alert('Failed to generate comic. Please try again.');
        }
      };

      const handleInputChange = ( event) => {
        const updatedInputs = [...textInputs];
        updatedInputs[currentPanelId] = event.target.value;
        setTextInputs(updatedInputs);
      };

      const handleSpeech = ( event) => {
        const updatedInputs = [...speechInputs];
        updatedInputs[currentPanelId] = event.target.value;
        setSpeechInputs(updatedInputs);
      };

      const handleSpeechCoordinate = ( value) => {
        const updatedInputs = [...speechCoordinate];
        updatedInputs[currentPanelId] = value;
        setSpeechCoordinate(updatedInputs);
      };

      const handleCurrentPanel = (value) => setCurrentPanelId(value)

    return(
        <div className="Dashboard">
            <div className="Left-layout">
               <InputLayout
                    value = {textInputs[currentPanelId]}
                    handleInputChange ={handleInputChange}
                    generatePanel = {generatePanel}
               />
               <EditPanel 
                    isLoading = {isLoading}
                    comicImage = {comicImages[currentPanelId]}
                    speech = {speechInputs[currentPanelId]}
                    handleSpeech = {handleSpeech}
                    speechCoordinate = {speechCoordinate[currentPanelId]}
                    handleSpeechCoordinate = {handleSpeechCoordinate}
               />
            </div>
            <div className="Right-layout">
               <ComicPanel
                    comicImages = {comicImages}
                    currentPanelId = {currentPanelId}
                    handleCurrentPanel={handleCurrentPanel}
                    newPanelId = {newPanelId}
                    speechs = {speechInputs}
                    speechCoordinates = {speechCoordinate}
               />
            </div>
        </div>
    )
}

export default Dashboard
