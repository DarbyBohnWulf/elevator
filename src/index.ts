import * as repl from 'repl';
import { Building } from './building';

let building: Building = new Building('Luna\'s Tower', [-1,0,1,2,3,4,5,6,7,8,9,10], 1)

export let panel: repl.REPLServer = repl.start({ prompt: ':-) '})
export let panelC = panel.context
panelC.buildings = [building]
panelC.currentLocation = panelC.buildings[0]
panelC.currentCar = panelC.currentLocation.elevatorBay[0]

panel.defineCommand('whereami', {
  help: 'Tells you where you are',
  action() {
    console.log(panelC.currentLocation.name)
    panel.displayPrompt()
  }
})
panel.defineCommand('whichfloor', {
  help: 'Tells you which floor you\'re on',
  action() {
    console.log('You\'re on floor ' + panelC.currentCar.whichFloor() + '.')
    panel.displayPrompt()
  }
})
panel.defineCommand('gotofloor', {
  help: 'Takes you to another floor in a building',
  action(floor: string) {
    let floorI: number = parseInt(floor, 10)
    if (panelC.currentLocation.hasFloor(floorI)) {
      pressButton(floorI)
    }
    else {
      console.log('Sorry, we don\'t have that floor.')
      panel.displayPrompt()
    }
  }
})

function keepGoing(stats: {message: string, travelTime: number}): void {
  setTimeout(() => {
    panelC.currentCar.arriveAtTarget()
    console.log(stats.message)
    panel.displayPrompt()
  }, stats.travelTime)
}

function pressButton(floor: number): void {
  let carTalk: {message: string,travelTime: number}
  let difference: number|undefined
  difference = floor - panelC.currentCar.currentFloor
  if (difference === 0) {
    carTalk = {message: 'You\'re already there. ;-)', travelTime: 0}
  }
  else {
    carTalk = panelC.currentCar.goToFloor(floor)
  }
  keepGoing(carTalk)
}
