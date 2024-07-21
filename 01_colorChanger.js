const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((item) => {
    console.log(item);
    
    item.addEventListener('click', (e) => {
        // console.log(e);
        console.log(e.target);
        if(e.target.id == 'red') {
            body.style.backgroundColor = "red";
        } 
        else if (e.target.id == 'yellow') {
            body.style.backgroundColor = "yellow";
        }
        else if(e.target.id == 'green') {
            body.style.backgroundColor = "green";
        }
        else if(e.target.id == 'pink') {
            body.style.backgroundColor = "pink";
        }
        else if(e.target.id == 'purple') {
            body.style.backgroundColor = "purple";
        } 
        
    })
})