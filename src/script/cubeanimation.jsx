import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const CubeAnimation = () => {
    let i = 1;                 
    const array = ['front','right','back','left','top','bottom']
    const tabtext = [
        '0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
        '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
        'Dzięki znajomości Javascriptu, oraz jego frameworków: Reacta oraz Vue, jestem w stanie robić proste, jak i zaawansowane strony.',
        '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
        '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
        '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
        '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
    ]
    let value = 0;
    const [isRunning, setIsRunning] = useState(true);
    const [intervalId, setIntervalId] = useState(null);

    //Button Start/Stop Animation
    useEffect(() => {
        const PauseButton = document.getElementById("AnimationPause")
        PauseButton.addEventListener("click", TogglePause)
    }) 
    const TogglePause = () => {
        if(isRunning === false){
            setIsRunning(true)
            const playpause = document.querySelector('#AnimationPause');
            playpause.classList.remove('playing');
            playpause.classList.add('stop');            
            
        }else if(isRunning === true){
            setIsRunning(false)
            const playpause = document.querySelector('#AnimationPause');
            playpause.classList.add('playing'); 
            playpause.classList.remove('stop');                       
        }
    }
    //

    //Cube Animation
    useEffect(() => {
        if(isRunning){
             window.setInterval(() => {
                if (i < 6) {   
                    let finishtext = tabtext[i]
                    document.getElementById('blackwin').innerHTML = finishtext             
            
                    let CubeID = array[i]
                    const cube = document.querySelector('.cube');
                    let currentClass = 'show-right';
                    let showClass = 'show-' + CubeID;
                    const classcuberemove = cube.classList[1];
            
                        cube.classList.remove(classcuberemove);
                        cube.classList.add( showClass );
                        currentClass = showClass;
                        i++;
    //Cube bar
                            if(value < 100){
                                value = value + 20;
                                document.getElementById('CubeBarLine').style.width = value + '%';
                            }else{
                                value = 0;
                                document.getElementById('CubeBarLine').style.width = value + '%';
                            }
     //  
                    }
                    else {
                        i = 0;
                    }   

            },1000);
        }else{
            window.clearInterval(intervalId);
        }
    },[isRunning])

    return null
}

export default CubeAnimation;
    
    
    
