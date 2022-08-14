const btns= document.querySelectorAll('.btn');
const value = document.getElementById('value');

let counter = 0;

btns.forEach(btn=>{
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            counter--;
        }
        else if (styles.contains('increase')){
            counter++;
        }
        else{
            counter = 0;
        }
        if(counter<0){
            value.style.color = 'red';
        }
        else if (counter>0){
            value.style.color = 'green'
        }
        else{
            value.style.color = 'black'
        }
        value.textContent = counter;
    })

})



