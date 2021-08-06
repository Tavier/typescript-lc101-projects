//Rocket.ts

import { Astronaut } from "./Astronaut";

import { Cargo } from "./Cargo";

import { Payload } from './Payload';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Payload[] = [];
    astronauts: Payload[] = [];
    
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sumOfItems: number = 0;
        for(let i = 0; i < items.length; i++) {
            sumOfItems += items[i].massKg;
        }
        return sumOfItems;
    }

    currentMassKg(): number {
        let curMass: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return curMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        } 
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

}