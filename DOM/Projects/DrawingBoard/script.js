let isDrawing= false
let brushSize= 10; //initialized with 10

let brush = document.getElementById('slider');
let colorBtn = document.getElementById('colorPicker');

brush.addEventListener('change',(e)=>{ //whenever brush size is changing
    brushSize= e.target.value; //e.target.value -> brush size
})

let board = document.getElementById('drawing-board');

board.addEventListener('mousedown',()=>{ //when we presses the mouse,drawing starts
    isDrawing=true
});

board.addEventListener('mouseup',()=>{ //when we release the mouse,drawing stops
    isDrawing=false
});


board.addEventListener('mousemove',(e)=>{ //when mouse is moving ,drawing should continue
    if(!isDrawing) return; //mouseup -> false then we will return that is drawing stop

    let dots = document.createElement('div');
    dots.setAttribute('class','drawing');
    dots.style.cssText=`width:${brushSize}px;height:${brushSize}px; background-color: ${colorBtn.value}` //setting width and height of dot
    
    dots.style.left=e.offsetX+"px" //setting left position
    dots.style.top=e.offsetY+"px"  //setting right position
    board.appendChild(dots);
})

let clearBtn = document.getElementById('clear-board');
clearBtn.addEventListener('click',()=>{
    board.innerHTML=""; //clearing inner html
})

board.addEventListener('mouseenter',()=>{ //when we are entering the board,border color should become red
    board.style.borderColor = "red";
})

board.addEventListener('mouseleave',()=>{ //when we are leaving the board,border color should become green
    board.style.borderColor = "green";
})