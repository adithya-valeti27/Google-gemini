import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import "../../assets"
import { assets } from '../../assets'
// import { Context } from '../../../Context/Context'


const Sidebar = () => {

    const[extended,setExtended] = useState(false)
    // const{onSent,prevPrompts,setRecentPrompts} = useContext(Context)



  return (
    <div className='sidebar'>
    <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className='menu'src={assets.menu_icon} alt="" />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
           {extended?<p>New Chat</p>:null} 
            </div>
            <div className="recent">
               {extended?<p className="recent-title">Recent</p>:null} 
               
                    <div className="recent-entry">
                   {extended?<img src={assets.message_icon} alt="" />:null} 
                    {extended?<p>What is react....</p>:null}
                </div>

                
                
            </div>
        
            
    </div>
    <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Settings</p>:null}
        </div>
    </div>
  
</div>
  )
}

export default Sidebar
