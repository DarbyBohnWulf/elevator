import * as repl from 'repl';
// import { Inquirer } from 'inquirer';
import { Building } from './building';

let building: Building = new Building('Luna\'s Tower', [1,2,3,4,5,6,7,8,9,10], 1)

let panel: repl.REPLServer = repl.start({ prompt: ':-) '})
let panelC = panel.context
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
  action(floor: number) {
    panelC.currentCar.goToFloor(floor)
    panel.displayPrompt()
  }
})
