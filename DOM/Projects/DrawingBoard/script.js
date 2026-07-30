let isDrawing= false
let brushSize= 10; //initialized with 10

let brush = document.getElementById('slider');
let colorBtn = document.getElementById('colorPicker');
let board = document.getElementById('drawing-board');
let brushColor = 'red';

brush.addEventListener('input',(e)=>{ //whenever brush size is changing
    brushSize= e.target.value; //e.target.value -> brush size
   
    let dots=  document.querySelectorAll('.drawing');
    dots.forEach((el)=>{
        el.style.width = `${brushSize}px`;
        el.style.height = `${brushSize}px`;
    })
   
})

colorBtn.addEventListener('input',(e)=>{ //whenever brush color is changing
    brushColor = e.target.value;

    let dots = document.querySelectorAll('.drawing');
    dots.forEach((el)=>{
        el.style.backgroundColor = brushColor;
    })
})

board.addEventListener('mousedown',()=>{ //when we presses the mouse,drawing starts
    isDrawing=true
});

board.addEventListener('mouseup',()=>{ //when we release the mouse,drawing stops
    isDrawing=false
});

document.addEventListener('keydown',(e)=>{
    
    if(e.key== 'ArrowUp'){ //size will increase when we press arrow up key
        e.preventDefault(); //prevent default behaviour i.e. scrolling of page during arrow up and arrow down
        brushSize += 1;
        document.querySelectorAll('.drawing').forEach((el)=>{
            el.style.width = `${brushSize}px`;
            el.style.height = `${brushSize}px`;
        })
    }else if(e.key == 'ArrowDown'){ //size will decrease when we press arrow down key
        e.preventDefault();
        
        brushSize = Math.max(1, brushSize - 1); //don't go below 1px
        document.querySelectorAll('.drawing').forEach((el)=>{
            el.style.width = `${brushSize}px`;
            console.log(`${brushSize}px`);
            el.style.height = `${brushSize}px`;
        })
    }
})

board.addEventListener('mousemove',(e)=>{ //when mouse is moving ,drawing should continue
    if(!isDrawing) return; //mouseup -> false then we will return that is drawing stop

    let dots = document.createElement('div');
    dots.setAttribute('class','drawing');
    dots.style.cssText=`width:${brushSize}px;height:${brushSize}px; background-color: ${brushColor}` //setting width and height of dot
    
    dots.style.left=e.offsetX+"px" //setting left position
    dots.style.top=e.offsetY+"px"  //setting right position
    board.appendChild(dots);
})

let clearBtn = document.getElementById('clear-board');
clearBtn.addEventListener('click',()=>{
    board.innerHTML=""; //clearing inner html
})

board.addEventListener('mouseenter',()=>{ //when we are entering the board,border color should become red
    board.style.borderColor = "blue";
})

board.addEventListener('mouseleave',()=>{ //when we are leaving the board,border color should become green
    board.style.borderColor = "red";
})

let darkTheme = document.getElementById('dark-theme'); //on clicking dark theme button,background becomes black and font becomes white
darkTheme.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.filter = 'grayscale(0%)'
})

let lightTheme = document.getElementById('light-theme'); //on clicking light theme button,background becomes white and font becomes black
lightTheme.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'beige';
    document.body.style.color = 'black';
    document.body.style.filter = 'grayscale(0%)'
})

let blackAndWhite = document.getElementById('black-white'); //on clicking black and white button,board becomes black and white
blackAndWhite.addEventListener('click',()=>{
    document.body.style.filter = 'grayscale(100%)'
})