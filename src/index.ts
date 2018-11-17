import * as repl from 'repl';
// import { Inquirer } from 'inquirer';
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
  async action(floor: string) {
    let floorI: number = parseInt(floor, 10)
    let carTalk: {message: string,ms: number}
    let difference: number|undefined
    if (panelC.currentLocation.hasFloor(floorI)) {
      difference = floorI - panelC.currentCar.currentFloor
      if (difference === 0) {
        carTalk = {message: 'You\'re already there. ;-)', ms: 0}
      }
      else {
        carTalk = await panelC.currentCar.goToFloor(floorI)
      }
    }
    else {
      carTalk = {message: 'Sorry, we don\'t have that floor.', ms: 0}
    }
    waitThenDo(carTalk.ms,() => {
      panelC.currentCar.arriveAtTarget()
      console.log(carTalk.message)
      panel.displayPrompt()
    })
  }
})
function wait(ms: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function waitThenDo(time: number, task: Function): Promise<void> {
  await wait(time).then(task())
}
