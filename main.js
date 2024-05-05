// random number formula --> a + r * (b - a), where a is the smallest number, b is the largest number, and r is the random number
// But if you are using floor function in conjunction to Random function, then add 1 after b-a.
const computer = () => {
    const opt = ["rock", "paper", "scissor"]
    let rand = (Math.floor(0 + Math.random() * (2-0+1)));
    console.log(rand);
    return opt[rand];
}
let user_option = (option)=>{
    const computer_option = computer();
    const left_side = document.getElementById('fist1');
    const right_side = document.getElementById('fist2');
    const notice = document.querySelector("#notice");
    console.log(option, computer_option);
    //user option is rock
    if(option==="rock"){
        if(computer_option === "paper"){
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-rock.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-paper.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';

                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `You Lose`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);
                
            }, 2500);
            // console.log("You lose");
        }
        else if(computer_option === "scissor") {
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-rock.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-scissors.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';
                
                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `You Win`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);
                
            }, 2500);
            // console.log("You win");
        }
        else{
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-rock.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-rock.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';

                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `Draw`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);

            }, 2500);
            // console.log("draw");
        }
    }
    // user option is paper
    else if (option === "paper") {
        if (computer_option === "scissor") {
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-paper.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-scissors.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';

                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `You Lose`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);

            }, 2500);
            // console.log("You lose");
        }
        else if (computer_option === "rock") {
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-paper.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-rock.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';

                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `You Win`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);

            }, 2500);
            // console.log("You win");
        }
        else {
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-paper.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-paper.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';

                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `Draw`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);

            }, 2500);
            // console.log("draw");
        }
    }
    // user option is scissor
    else {
        if (computer_option === "rock") {
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-scissors.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-rock.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';

                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `You Lose`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);

            }, 2500);
            // console.log("You lose");
        }
        else if (computer_option === "paper") {
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-scissors.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-paper.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';

                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `You Win`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);

            }, 2500);
            // console.log("You win");
        }
        else {
            left_side.style.animation = 'ani1 0.5s 5 alternate ease-out';
            right_side.style.animation = 'ani2 0.5s 5 alternate ease-out';
            setTimeout(() => {
                left_side.src = 'assets/images/left-scissors.png';
                left_side.style.left = '100px';
                left_side.style.top = '100px';
                right_side.src = 'assets/images/right-scissors.png';
                right_side.style.right = '100px';
                right_side.style.top = '100px';

                setTimeout(() => {
                    notice.style.visibility = "visible";
                    notice.innerHTML = `Draw`;
                    setTimeout(() => {
                        notice.style.visibility = "hidden";
                        left_side.src = 'assets/images/left-fist.png'
                        left_side.style.left = '0px';
                        left_side.style.top = '0px';
                        right_side.src = 'assets/images/right-fist.png'
                        right_side.style.right = '0px';
                        right_side.style.top = '0px';
                        left_side.style.removeProperty('animation');
                        right_side.style.removeProperty('animation');
                    }, 1500);
                }, 1000);

            }, 2500);
            // console.log("draw");
        }
    }
    
}