let inputDir={x:0 ,y:0};
const foodm= new Audio('music/food.mp3');
const music=new Audio('music/music.mp3');
const gameOver=new Audio('music/gameover.mp3');
const moveSound=new Audio('music/move.mp3');
let lastPaintTime=0;
let score=0;
let speed=3;
let hiscore=0;
// let obsArr=[{x:5 ,y: 10}, {x:6 , y:10} , {x:10,y: 16} , {x: 11 ,y: 16} , {x:10 , y: 5} ,{x:10 , y: 6},{x:10 , y: 7} , {x:17 , y:5} , {x:17 , y:6}]
let snakeArr=[
    {x:13 , y:15}
];



document.querySelector('.lev1').addEventListener('click',()=>{
    speed=3;
    document.querySelector('.lev1').classList.add("select")
    document.querySelector('.lev2').classList.remove("select")
    document.querySelector('.lev3').classList.remove("select")
    document.querySelector('.pause').classList.remove("select")
});

document.querySelector('.lev2').addEventListener('click',()=>{
    speed=4;
    document.querySelector('.lev2').classList.add("select")
    document.querySelector('.lev1').classList.remove("select")
    document.querySelector('.lev3').classList.remove("select")
    document.querySelector('.pause').classList.remove("select")
});

document.querySelector('.lev3').addEventListener('click',()=>{
    speed=6;
    document.querySelector('.lev3').classList.add("select")
    document.querySelector('.lev1').classList.remove("select")
    document.querySelector('.lev2').classList.remove("select")
    document.querySelector('.pause').classList.remove("select")
});

document.querySelector('.pause').addEventListener('click',()=>{
    music.pause();
    alert("Press any key to continue");
    music.play();
    document.querySelector('.pause').classList.add("select")
    document.querySelector('.lev1').classList.remove("select")
    document.querySelector('.lev2').classList.remove("select")
    document.querySelector('.lev3').classList.remove("select")
});








function main(ctime){
    window.requestAnimationFrame(main);
    if(((ctime-lastPaintTime)/1000)<1/speed)
    {
        return;
    }
    

    lastPaintTime=ctime;
    gameEngine();
}

function isCollide(snake){

    //if collide with yourself
    for(i=1;i<snake.length;i++){
        if(snake[0].x===snake[i].x && snake[0].y===snake[i].y)
        return true;
        // else if(snake[0].x===obsArr[i].x && snake[0].x===obsArr[i])
        // return true;
    }

    // for(i=0;i<obsArr.length;i++)
    // {
    //     if(snake[0].x===obsArr[i].x && snake[0].y===obsArr[i].y)
    //     return true;
    // }

    // if collide with wall
    if(snake[0].x>18 || snake[0].y>18 || snake[0].x<=0 || snake[0].y<=0)
    return true;
    return false;
   
}



function gameEngine(){

    //Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0)
        snakeElement.classList.add('head')
        else
        snakeElement.classList.add('snake')        
        board.appendChild(snakeElement);

        // Display the food
        foodElement = document.createElement('div')
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);



    });


   // Obstacles
    // obsArr.forEach((e)=>{
    //     obsElement = document.createElement('div');
    //     obsElement.style.gridRowStart = e.y;
    //     obsElement.style.gridColumnStart = e.x;
    //     obsElement.classList.add('obs')
    //     board.appendChild(obsElement)
    // })

  
        // Collision
        if(isCollide(snakeArr)){
            inputDir={x:0,y:0};
            gameOver.play();
           music.pause();
            alert("Game Over!");
            snakeArr=[{x:13 , y:15}];
            music.play();
            score=0;
            scoreBoard.innerHTML="Score :"+score;
        }
        
        // Food generation
        if(snakeArr[0].x===food.x && snakeArr[0].y===food.y){
            score++;
            scoreBoard.innerHTML="Score :"+score;
            if(score>hiscore){
                hiscore = score;
                localStorage.setItem("hiscore", JSON.stringify(hiscore));
                hiscoreBox.innerHTML = "HiScore: " + hiscore;
            }
            foodm.play();
            snakeArr.unshift({x: snakeArr[0].x+inputDir.x , y: snakeArr[0].y+inputDir.y})

            let a=2;
            let b=16;
            food={ x:Math.round(a+ (b-a)* Math.random()) , y:Math.round(a+ (b-a)* Math.random())}
        }

        //  Moving the snake
        for(let i=snakeArr.length-2;i>=0;i--)
        {
            snakeArr[i+1]={...snakeArr[i]};
        }
        snakeArr[0].x+=inputDir.x;
        snakeArr[0].y+=inputDir.y;
}








document.addEventListener('keydown',e=>{
    inputDir={x:0, y:1};  //Starting Game
    moveSound.play();
    switch(e.key)
    {
        case "ArrowUp":
           inputDir.x=0;
           inputDir.y=-1;
            break;
        case "ArrowDown":
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            break;

    }
})

document.addEventListener('load',()=>{
    music.play();
})

let food={x:12 , y:5};

window.requestAnimationFrame(main);
