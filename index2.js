let [computer_score, user_score] = [0, 0];



let result_ref = document.getElementById('result');
let choices_object = {
    'rock': {
        'rock': 'draw',
        'paper': 'loss',
        'scissor': 'win'
    }
    ,
    'paper': {
        'rock': 'win',
        'paper': 'draw',
        'scissor': 'loss'
    }
    ,
    'scissor': {
        'rock': 'loss',
        'paper': 'win',
        'scissor': 'draw'
    }
}



function checker(input) {
    var choice = ['rock', 'paper', 'scissor'];
    var num = Math.floor(Math.random() * 3);

    document.getElementById('computerchoice').innerHTML =
        `computer choices <span>${choice[num].toUpperCase()
        }</span>`;

    document.getElementById('userchoice').innerHTML =
        ` you choices <span>${input.toUpperCase()} </span>`;


    let computerchoice = choice[num];

    switch (choices_object[input][computerchoice]) {
        case 'win':
            result_ref.style.cssText = "background-color : green";
            result_ref.innerHTML = 'YOU WIN';
            user_score++;
            
            break;

        case 'loss':
            result_ref.style.cssText = "background-color : red";
            result_ref.innerHTML = 'YOU LOSE';
            computer_score++;
            break;

        default:
            result_ref.style.cssText = "background-color : yellow";
            result_ref.innerHTML = 'DRAW';
            break;
        // case 'draw':
        //     result_ref.innerHTML = ' DRAW ';
        //     break;

        document.getElementById('computer_score').innerHTML
        computer_score;
        document.getElementById('user_score').innerHTML
        user_score;




    }


    document.getElementById('computer_score').innerHTML =
        computer_score;
    document.getElementById('user_score').innerHTML =
        user_score;

    // document.getElementById("user_score").innerHTML =
    //  user_score;
    // document.getElementById("computer_score").innerHTML = 
    // computer_score;


}