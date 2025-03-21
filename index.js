// Your code here
const dodger = document.getElementById('dodger');
function moveDodgerLeft(){
        const leftNumbers =dodger.style.left.replace('px','');
        const left = parseInt(leftNumbers,10);
        dodger.style.left =`${left -1}px`
    };
  


  function moveDodgerRight(){
        const rightNum =dodger.style.left.replace('px','');
        const right = parseInt(rightNum,10);
        dodger.style.left =`${right +1}px`
    };

    
