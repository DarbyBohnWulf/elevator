"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Elevator {
    constructor() {
        this.travelSpeed = 1000;
        this.currentFloor = 1;
        this.targetFloor = 1;
    }
    goToFloor(target) {
        this.targetFloor = target;
        let difference = this.targetFloor - this.currentFloor;
        let message;
        let travelTime;
        if (difference === 0) {
            message = 'You\'re already there. ;-)';
            travelTime = 0;
        }
        else if (difference > 0) {
            console.log('Going up...');
            travelTime = difference * this.travelSpeed;
            message = 'We\'ve reached ' + this.targetFloor + '.\nHave a good day!';
        }
        else {
            travelTime = difference * this.travelSpeed;
            message = 'We\'ve reached ' + this.targetFloor + '.\nHave a good day!';
        }
        return Promise.resolve({ message, travelTime });
    }
    arriveAtTarget() {
        this.currentFloor = this.targetFloor;
    }
    whichFloor() {
        return this.currentFloor;
    }
}
exports.Elevator = Elevator;
