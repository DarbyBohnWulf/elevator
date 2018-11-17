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
const building_1 = require("./building");
let expect = chai.expect;
describe('Building', () => {
    describe('#new', () => {
        let place;
        let testBuildData = ['Test Plaza', [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7], 4];
        beforeAll(() => {
            place = new building_1.Building(testBuildData[0], testBuildData[1], testBuildData[2]);
        });
        it('describes the name of a building', () => {
            expect(place.name).to.equal(testBuildData[0]);
        });
        it('describes the floors in a building', () => {
            expect(place.totalFloors, 'floors don\'t match the given list').to.equal(testBuildData[1].length);
        });
        it('describes the number of elevators in a building', () => {
            expect(place.elevators, 'elevators don\'t match the given number').to.equal(testBuildData[2]);
        });
    });
});
