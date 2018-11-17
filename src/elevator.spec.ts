import * as chai from 'chai';
import { Building } from './building';
import { Elevator } from './elevator';

describe('Elevator', () => {
  let expect = chai.expect
  let context: any = { place: undefined, elevator: undefined}
  // let place: Building
  // let testCar: Elevator
  // testCar = place.elevatorBay[0]
  beforeEach(() => {
    let testBuildData: Array<any> = [ 'Test Plaza', [-2,-1,0,1,2,3,4,5,6,7], 4 ]
    context.place = new Building(
      testBuildData[0],
      testBuildData[1],
      testBuildData[2]
    );
    context.elevator = context.place.elevatorBay[0]
  })
  describe('#new', () => {
    it('is created by a Building', () => {
      expect(context.elevator, 'should be an elevator').to.be.an.instanceof(Elevator)
    })
    it('starts life on the ground floor', () => {
      expect(context.elevator.currentFloor, 'should be on \'1\'').to.equal(1)
    })
  })
  describe('#goToFloor', () => {
    it('changes the targetFloor to target', () => {
      context.elevator.goToFloor(5)
      // setTimeout(()=>{}, 5500)
      expect(context.elevator.targetFloor, 'should have moved to targetFloor').to.equal(5)
    })
  })
  describe('#arriveAtTarget', () => {
    it('changes currentFloor to targetFloor', () => {
      context.elevator.goToFloor(4)
      expect(context.elevator.currentFloor, 'shouldn\'t have moved yet').to.equal(1)
      context.elevator.arriveAtTarget()
      expect(context.elevator.currentFloor, 'should have moved now').to.equal(4)
    })
  })
  describe('#whichFloor', () => {
    it('tells you what the currentFloor is', () => {
      context.elevator.goToFloor(3)
      context.elevator.arriveAtTarget()
      expect(context.elevator.whichFloor()).to.equal(3)
    })
  })
})
