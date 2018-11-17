"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = __importStar(require("chai"));
const index_1 = require("./index");
const building_1 = require("./building");
let expect = chai.expect;
describe('index', () => {
    describe('accesses buildings\' elevators with a \'panel\'', () => {
        xit('is a REPLServer', () => {
            expect(index_1.panel).to.be.an('REPLServer');
        });
        it('can access buildings', () => {
            expect(index_1.panelC).to.haveOwnProperty('buildings');
            expect(index_1.panelC.buildings[0]).to.be.an.instanceof(building_1.Building);
        });
        it('takes 1 second per floor travelled', () => {
            expect(index_1.panelC.currentCar.currentFloor, 'start on first floor').to.equal(1);
            let ms = index_1.panelC.currentCar.goToFloor(3).travelTime;
            expect(index_1.panelC.currentCar.currentFloor, 'doesn\'t get there immediately').to.equal(1);
            setTimeout(() => {
                index_1.panelC.currentCar.arriveAtTarget();
            }, ms);
            expect(index_1.panelC.currentCar.currentFloor, 'finally arrives').to.equal(3);
        });
    });
});
