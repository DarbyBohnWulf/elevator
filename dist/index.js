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
// import { Inquirer } from 'inquirer';
const building_1 = require("./building");
let building = new building_1.Building('Luna\'s Tower', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
let panel = repl.start({ prompt: ':-) ' });
let panelC = panel.context;
panelC.buildings = [building];
panelC.currentLocation = panelC.buildings[0];
panelC.currentCar = panelC.currentLocation.elevatorBay[0];
panel.defineCommand('whereami', {
    help: 'Tells you where you are',
    action() {
        console.log(panelC.currentLocation.name);
        panel.displayPrompt();
    }
});
panel.defineCommand('whichfloor', {
    help: 'Tells you which floor you\'re on',
    action() {
        console.log('You\'re on floor ' + panelC.currentCar.whichFloor() + '.');
        panel.displayPrompt();
    }
});
panel.defineCommand('gotofloor', {
    help: 'Takes you to another floor in a building',
    action(floor) {
        panelC.currentCar.goToFloor(floor);
        panel.displayPrompt();
    }
});
