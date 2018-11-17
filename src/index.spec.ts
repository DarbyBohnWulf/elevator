import * as chai from 'chai';
import { REPLServer } from 'repl';
import { panel, panelC } from './index';
import { Building } from './building';

let expect = chai.expect;

describe('index', () => {
  describe('accesses buildings\' elevators with a \'panel\'', () => {
    xit('is a REPLServer', () => {
      expect(panel).to.be.an('REPLServer')
    })
    it('can access buildings', () => {
      expect(panelC).to.haveOwnProperty('buildings')
      expect(panelC.buildings[0]).to.be.an.instanceof(Building)
    })
    it('takes 1 second per floor travelled', () => {
      expect(panelC.currentCar.currentFloor, 'start on first floor').to.equal(1)
      let res: {w:string,ms:number} = panelC.currentCar.goToFloor(3)
      expect(panelC.currentCar.targetFloor, 'should have a new target').to.equal(3)
      expect(panelC.currentCar.currentFloor, 'doesn\'t get there immediately').to.equal(1)
      setTimeout(() => {
        console.log(res.w)
      }, res.ms)
      panelC.currentCar.arriveAtTarget()
      expect(panelC.currentCar.currentFloor, 'finally arrives').to.equal(3)
    })
  })
})
