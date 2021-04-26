import masserati from '../assets/coupe-masserati.jpg';
import camaro from '../assets/camaro-ss-1le.jpg';
import dodge from '../assets/dodge-charger-1970.jpg';
import ford from '../assets/ford-mustang1966.jpg';
import roadster from '../assets/190_sl-roadster.jpg';


export const model ={
    currentCar: null,
    cars: [
        {
            clickCount: 0,
            name: 'Coupe Maserati',
            imgSrc: masserati
        },
        {
            clickCount: 0,
            name: 'Camaro SS 1LE',
            imgSrc: camaro
        },
        {
            clickCount: 0,
            name: 'Dodger Charger 1970',
            imgSrc: dodge
        },
        {
            clickCount: 0,
            name: 'Ford Mustang 1966',
            imgSrc: ford
        },
        {
            clickCount: 0,
            name: '190 SL Roadster 1962',
            imgSrc: roadster
        }
    ]
}