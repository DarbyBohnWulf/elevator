import { Elevator } from "./elevator";

export class Building {
  public totalFloors: number
  private elevatorBay: Array<Elevator> = []

  constructor(public name: string, public floorList: Array<number>, carsCount: number) {
    this.totalFloors = floorList.length;
    // let elevators
    for (let i = 0; i < carsCount; i++) {
      this.elevatorBay.push(new Elevator())
    }
  }
}
