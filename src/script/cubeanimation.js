var i = 0;                 
var array = ['front','right','back','left','top','bottom']
var tabtext = [
    '0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
    '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
    '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
    '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
    '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
    '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
    '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor quo optio sunt error',
]

function myLoop() {    
    setTimeout(function() {   
        if (i < 6) {   
        var finishtext = tabtext[i]
            document.getElementById('blackwin').innerHTML = finishtext             

        var CubeID = array[i]
            var cube = document.querySelector('.cube');
                var currentClass = '';
                    var showClass = 'show-' + CubeID;
                        var cubee = cube.classList[1];

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

