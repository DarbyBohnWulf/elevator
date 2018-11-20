import { Elevator } from "./elevator";

export class Building {
  public totalFloors: number
  private elevatorBay: Array<Elevator> = []
  get elevators(): number {
    return this.elevatorBay.length
  }

  constructor(public name: string, public floorList: Array<number>, carsCount: number) {
    this.totalFloors = floorList.length;
    for (let i = 0; i < carsCount; i++) {
      this.elevatorBay.push(new Elevator())
    }
  }

  hasFloor(floor: number): boolean {
    if (this.floorList.includes(floor)) {
      return true
    }
    else {
      return false
    }
  }
}
