import { carListView } from "./carListView";
import { carView } from "./carView";
import { model } from "./model"


export const controller = {

    init(){

        model.currentCar = model.cars[0];
        carListView.init();
        carView.init();
    },

    getCars(){
        return model.cars;
    },

    getCurrentCar(){
        return model.currentCar;
    },

    setCurrentCar( car ){
        model.currentCar = car;                
    },

    incrementVotes(){
        model.currentCar.clickCount ++;
        carView.render();
    }

}

controller.init();