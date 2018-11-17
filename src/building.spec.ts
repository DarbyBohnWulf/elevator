import * as chai from 'chai';
import { Building } from "./building";

let expect = chai.expect
describe('Building', () => {
  describe('#new', () => {
    let place: Building
    let testBuildData: Array<any> = [ 'Test Plaza', [-2,-1,0,1,2,3,4,5,6,7], 4 ]
    beforeAll(() => {
      place = new Building(
        testBuildData[0],
        testBuildData[1],
        testBuildData[2]
      );
    })
    it('describes the name of a building', () => {
      expect(place.name).to.equal(testBuildData[0]);
    })
    it('describes the floors in a building', () => {
      expect(place.totalFloors, 'floors don\'t match the given list').to.equal(testBuildData[1].length)
    })
    it('describes the number of elevators in a building', () => {
      expect(place.elevators, 'elevators don\'t match the given number').to.equal(testBuildData[2])
    })
  })

})
