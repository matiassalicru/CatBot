import React from 'react';
import Cat from './components/Cat/Cat'
import Zoom from 'react-reveal/Zoom';
import '../Home/Home.css';

const Home = ({history}) => {
  
    return (
      <div className="home-catbot-container">
        <div className="home-catbot-content">
            <Zoom opposite>
                <Cat history={history} />                
            </Zoom>
          <div className="home-catbot-greeting">
            <Zoom opposite>
                <h1> ¡Hola humano! </h1>
            </Zoom>
            <Zoom opposite>
                <label> ¿Querés charlar? </label>
                <label> Click sobre mí para comenzar :) </label>
            </Zoom>
          </div>
        </div>
      </div>
    );
};

export default Home;