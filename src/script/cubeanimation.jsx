import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const CubeAnimation = () => {
    const array = ['front','right','back','left','top','bottom']
    let value = 0;
    const [isRunning, setIsRunning] = useState(true);
    const [intervalId, setIntervalId] = useState(null);

    let timer
    const [count, setCount] = useState(1);

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
            let i = count;
            const id = window.setInterval(() => {
                if (i < 6) {           
                    let CubeID = array[i]
                    const cube = document.querySelector('.cube');
                    let currentClass = 'show-right';
                    let showClass = 'show-' + CubeID;
                    const classcuberemove = cube.classList[1];
                    i++
                        cube.classList.remove(classcuberemove);
                        cube.classList.add( showClass );
                        currentClass = showClass;
                        
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
            setIntervalId(id);
        }else{
            window.clearInterval(intervalId);
        }
    },[isRunning])
    



return null
}

export default CubeAnimation;
    
    
    
