// Your code here
const dodger = document.getElementById('dodger');
function moveDodgerLeft(){
        const leftNumbers =dodger.style.left.replace('px','');
        const left = parseInt(leftNumbers,10);
        dodger.style.left =`${left -10}px`
    };
  


  function moveDodgerRight(){
        const rightNum =dodger.style.left.replace('px','');
        const right = parseInt(rightNum,10);
        dodger.style.left =`${right +10}px`
    };

    
