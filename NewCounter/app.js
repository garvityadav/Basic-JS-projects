// Helper function
function getElement(selector){
    const element = document.querySelector(selector);
    if(element){
        return element;
    }
    else{
        return new Error(`Please select proper selector , you have selected "${element}"`);
    }
}

//counter class
function Counter (element,value){
    this.value = value;
    this.counter = element;
    this.increaseBtn = element.querySelector('.increase');
    this.resetBtn = element.querySelector('.reset');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset= this.reset.bind(this);
    this.increaseBtn.addEventListener('click',this.increase);
    this.decreaseBtn.addEventListener('click',this.decrease);
    this.resetBtn.addEventListener('click',this.reset);

}


//increase function
Counter.prototype.increase =function(){
    this.value++;
    this.valueDOM.textContent = this.value
}
//reset function
Counter.prototype.reset =function(){
    this.value=0;
    this.valueDOM.textContent = this.value
}
//decrease function
Counter.prototype.decrease =function(){
    this.value--;
    this.valueDOM.textContent = this.value
}

//instances
const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);

