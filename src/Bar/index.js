import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './index.css'

const Bar  = () => {
    const [isclick, setIsClick] = useState(false)


    return (
        <div className='Bar'>
            <div className='start_bar'>
               <h2>Comic Strips </h2>

            </div>
            <div className='menu_icon' onClick={()=>{setIsClick((value) => !value)}}> <MenuIcon fontSize='large' /> </div>
            <div className={`end_bar ${isclick?'':'hide'}`} >
               
                <button className='bar_end_button'>Home</button>
                <button className='bar_end_button'>About</button>
                <button className='bar_end_button'>Contact</button>
            </div>
        </div>
    )
}

export default Bar
