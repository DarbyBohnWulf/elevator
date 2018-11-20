"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const repl = __importStar(require("repl"));
const building_1 = require("./building");
let building = new building_1.Building('Luna\'s Tower', [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
exports.panel = repl.start({ prompt: ':-) ' });
exports.panelC = exports.panel.context;
exports.panelC.buildings = [building];
exports.panelC.currentLocation = exports.panelC.buildings[0];
exports.panelC.currentCar = exports.panelC.currentLocation.elevatorBay[0];
exports.panel.defineCommand('whereami', {
    help: 'Tells you where you are',
    action() {
        console.log(exports.panelC.currentLocation.name);
        exports.panel.displayPrompt();
    }
});
exports.panel.defineCommand('whichfloor', {
    help: 'Tells you which floor you\'re on',
    action() {
        console.log('You\'re on floor ' + exports.panelC.currentCar.whichFloor() + '.');
        exports.panel.displayPrompt();
    }
});
exports.panel.defineCommand('gotofloor', {
    help: 'Takes you to another floor in a building',
    action(floor) {
        let floorI = parseInt(floor, 10);
        if (exports.panelC.currentLocation.hasFloor(floorI)) {
            pressButton(floorI);
        }
        else {
            console.log('Sorry, we don\'t have that floor.');
            exports.panel.displayPrompt();
        }
    }
});
function keepGoing(stats) {
    setTimeout(() => {
        exports.panelC.currentCar.arriveAtTarget();
        console.log(stats.message);
        exports.panel.displayPrompt();
    }, stats.travelTime);
}
function pressButton(floor) {
    let carTalk;
    let difference;
    difference = floor - exports.panelC.currentCar.currentFloor;
    if (difference === 0) {
        carTalk = { message: 'You\'re already there. ;-)', travelTime: 0 };
    }
    else {
        carTalk = exports.panelC.currentCar.goToFloor(floor);
    }
    keepGoing(carTalk);
}
