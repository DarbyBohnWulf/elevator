export class Elevator {
  private travelSpeed: number = 1000
  private currentFloor: number
  private targetFloor: number

  constructor() {
    this.currentFloor = 1;
    this.targetFloor = 1
  }

  goToFloor(target: number): {message: string,travelTime: number} {
    this.targetFloor = target
    let difference: number = this.targetFloor - this.currentFloor
    let message: string
    let travelTime: number
    if (difference === 0) {
      message = 'You\'re already there. ;-)'
      travelTime = 0
    } else if (difference > 0) {
      console.log('Going up...')
      travelTime = difference * this.travelSpeed
      message = 'We\'ve reached ' + this.targetFloor + '.\nHave a good day!'
    } else {
      console.log('Going down...')
      travelTime = (difference * -1) * this.travelSpeed
      message = 'We\'ve reached ' + this.targetFloor + '.\nHave a good day!'
    }
    return {message,travelTime}
  }

  arriveAtTarget(): void {
    this.currentFloor = this.targetFloor
  }

  whichFloor(): number {
    return this.currentFloor
  }
}
