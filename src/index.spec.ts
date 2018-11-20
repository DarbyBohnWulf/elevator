import * as chai from 'chai';
import { panelC } from './index';
import { Building } from './building';

let expect = chai.expect;

describe('index', () => {
  describe('accesses buildings\' elevators with a \'panel\'', () => {
    it('can access buildings', () => {
      expect(panelC).to.haveOwnProperty('buildings')
      expect(panelC.buildings[0]).to.be.an.instanceof(Building)
    })
    fit('takes 1 second per floor travelled', () => {
      expect(panelC.currentCar.currentFloor, 'start on first floor').to.equal(1)
      panelC.currentCar.goToFloor(3)
      expect(panelC.currentCar.targetFloor, 'should have a new target').to.equal(3)
      expect(panelC.currentCar.currentFloor, 'doesn\'t get there immediately').to.equal(1)
      panelC.currentCar.arriveAtTarget()
      expect(panelC.currentCar.currentFloor, 'finally arrives').to.equal(3)
    })
  })
})
