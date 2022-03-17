let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
        let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)

    if(secondAnswer === 'continue'){
        let thirdAnswer = window.prompt('boo')
    }
    else if(secondAnswer === 'follow'){
        let thirdAnswer = window.prompt('follow')
    }
 } 

else if(firstAnswer === 'right'){
    let secondAnswer = window.prompt('dragon')

   
     if(secondAnswer === 'treasure'){
        let thirdAnswer = window.prompt('treasure')
    }
    else if(secondAnswer === 'dragon'){  
        let thirdAnswer = window.prompt('dragon')
    }
}