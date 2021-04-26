import { carView } from "./carView";
import { controller } from "./controller";


export const carListView = {

    init(){

        this.carListElement = document.getElementById('car-list');
        this.render();                   
    },

    render(){

        const cars = controller.getCars();
        for (let i = 0; i < cars.length; i++) {
            const car = cars[i];

            const carItem = document.createElement('li');
            carItem.innerText = car.name;
            carItem.className = 'contain__item';

            this.carListElement.appendChild( carItem );

            carItem.addEventListener( 'click', 

                (function( carCopy ){
                    return function(){
                        controller.setCurrentCar( carCopy );
                        carView.render();
                    }
                })( car )

            )
            
        }

    }

}


