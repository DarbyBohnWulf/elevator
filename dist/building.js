"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elevator_1 = require("./elevator");
class Building {
    constructor(name, floorList, carsCount) {
        this.name = name;
        this.floorList = floorList;
        this.elevatorBay = [];
        this.totalFloors = floorList.length;
        for (let i = 0; i < carsCount; i++) {
            this.elevatorBay.push(new elevator_1.Elevator());
        }
    }
    get elevators() {
        return this.elevatorBay.length;
    }
    hasFloor(floor) {
        if (this.floorList.includes(floor)) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Building = Building;
