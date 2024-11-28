import React, { useContext } from 'react';
import "./Main.css";
import { assets } from '../../assets';
import { Context } from '../../../Context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  
  const handleKey = (event) => {
    if (event.key === "Enter") {
      onSent(input);
    }
  }

  return (
    <div className="main">
      <div className="nav">
        <div className="gemini">
          <p>Gemini</p>
        </div>
        <img src={assets.user_icon} alt="" />
      </div>

      {!showResult ? (
        <>
          <div className="greet">
            <p><span>Hello, Adithya</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="card">
            <div className="cards">
              <p>Explain the impact of Moon on tides</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="cards">
              <p>Is react and react native the same?</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="cards">
              <p>How can I greet my manager in an email?</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="cards">
              <p>Give me tips to correct this code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </>
      ) : (
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <div>
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="main-bottom">
        <div className="searchbox">
          <input
            onKeyDown={handleKey} 
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
          />
          <img src={assets.mic_icon} alt="" />
          <img src={assets.gallery_icon} alt="" />
          {input ? <img onClick={() => onSent(input)} src={assets.send_icon} alt="" /> : null}
        </div>
        <div className="bottom-info">
          <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
