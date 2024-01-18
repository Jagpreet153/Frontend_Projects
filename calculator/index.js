let string ="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener(('click'),e=>{
        try{
            if(e.target.innerHTML==='=')
            {
                string=eval(string);
                document.querySelector('.input').value=string;
            }

            else if(e.target.innerHTML==='AC')
            {
                string ="";
                document.querySelector('.input').value=string;
            }

            else if(e.target.innerHTML==='DEL')
            {
                string=string.toString().slice(0,-1);
                document.querySelector('.input').value=string;
            }
            else{
                string =string +e.target.innerHTML;
                document.querySelector('.input').value=string;
            }
        }
        catch(e){
           string ="Undefined";
           document.querySelector('.input').value=string;
           string="";
        }

    })

    // button.addEventListener(('keydown'),e=>{
    //     try{
    //         if(e.key==='Enter')
    //         {
    //             string=eval(string);
    //             document.querySelector('.input').value=string;
    //             console.log(string);
    //         }

    //         else if(e.key==='C')
    //         {
    //             string ="";
    //             document.querySelector('.input').value=string;
    //             console.log(string);
    //         }

    //         else{
    //             string =string +e.key;
    //             document.querySelector('.input').value=string;
    //             string=""
    //             console.log(string);
    //         }
    //     }
    //     catch(e){
    //        string ="Undefined";
    //        document.querySelector('.input').value=string;
        
    //     }
    // })
})


// document.addEventListener(('keydown'),e=>{
//     console.log(e.key);
// })
