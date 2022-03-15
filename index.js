let firstAnswer = window.prompt('You come across a cave that splits into two tunnels. Do you head left or right?')
    if(firstAnswer === 'left') {
let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
} 
    else if(firstAnswer === 'right') {
let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
 }

    if(secondAnswer === 'follow'){
let thirdAnswer = window.prompt('You follow the cat to a colony of CacheStorage, nestled in a fort of warm blankets and subsisting off of inexplicably warm PushSubscriptionOptions. They are content with you staying but you wonder if you should alert the world to this magical safe haven')
    }
    else if(secondAnswer === 'continue'){
        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is al lon, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
    }

    if(thirdAnswer === 'stay'){
        let fourthAnswer = window.prompt('You live hippily amongst the cats for the rest of your days.')
    }
    else if(thirdAnswer === 'Spread the word'){
        let fourthAnswer = window.prompt('After leaving the cat colony, you are never able to find it again; without proof, on one believes your story, which pases into legend nonetheless')
    }

    
    
   
    if(thirdAnswer === 'Ladder'){
        let fourthAnswer = window.prompt('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below,. Sheepish, you return home.')
    }
    if(thirdAnswer === 'Staircase'){
        let fourthAnswer = window.prompt('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever')
    }

