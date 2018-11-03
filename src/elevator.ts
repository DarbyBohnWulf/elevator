export class Elevator {
  private travelSpeed: number = 1000
  private currentFloor: number
  private targetFloor: number

  constructor() {
    this.currentFloor = 1;
    this.targetFloor = 1
  }

  goToFloor(target: number): void {
    this.targetFloor = target
    let difference: number = this.targetFloor - this.currentFloor
    if (difference === 0) {
      console.log('You\'re already there. ;-)')
    } else if (difference > 0) {
      console.log('Going up...')
      let travelTime: number = difference * this.travelSpeed
      setTimeout(()=>{
        this.currentFloor = target
        console.log('We\'ve reached ' + this.targetFloor + '.\nHave a good day!')
      }, travelTime)
    } else if (difference < 0) {
      console.log('Going down...')
      let travelTime: number = difference * this.travelSpeed
      setTimeout(()=>{
        this.currentFloor = target
        console.log('We\'ve reached ' + this.targetFloor + '.\nHave a good day!')
      }, travelTime)
    }
  }

  whichFloor(): number {
    return this.currentFloor
  }
}
