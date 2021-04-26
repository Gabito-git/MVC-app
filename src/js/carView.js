import { controller } from "./controller";

export const carView = {

    init(){

        this.carNameElement  = document.getElementById('car-name');
        this.carVotesElement = document.getElementById('car-count'); 
        this.carImageElement = document.getElementById('car-img');

        this.render();
    },

    handleClick(){
        controller.incrementVotes();  
    },

    render(){

        const currentCar = controller.getCurrentCar();

        this.carNameElement.innerText = currentCar.name;
        this.carVotesElement.innerText = currentCar.clickCount;
        this.carImageElement.src      = currentCar.imgSrc;

        this.carImageElement.addEventListener('click', this.handleClick)
    }

}