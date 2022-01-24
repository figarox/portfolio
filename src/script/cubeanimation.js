let i = 0;                 
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

function myLoop() {    
    setTimeout(function() {   
        if (i < 6) {   
        let finishtext = tabtext[i]
            document.getElementById('blackwin').innerHTML = finishtext             

        let CubeID = array[i]
            const cube = document.querySelector('.cube');
                let currentClass = '';
                    let showClass = 'show-' + CubeID;
                        let cubee = cube.classList[1];

            cube.classList.remove(cubee);
            cube.classList.add( showClass );
            currentClass = showClass;
            i++;
            myLoop();        
        }
        else {
            i = 0;
            myLoop(); 
        }  
    }, 5000)
}
myLoop(); 

