export class Mood {
  private _happy:number;
  private _sad:number;
  private _normal:number;
  private _angry:number;


  constructor(happy: number, sad: number, normal: number, angry: number) {
    this._happy = happy;
    this._sad = sad;
    this._normal = normal;
    this._angry = angry;
  }


  get happy(): number {
    return this._happy;
  }

  set happy(value: number) {
    this._happy = value;
  }

  get sad(): number {
    return this._sad;
  }

  set sad(value: number) {
    this._sad = value;
  }

  get normal(): number {
    return this._normal;
  }

  set normal(value: number) {
    this._normal = value;
  }

  get angry(): number {
    return this._angry;
  }

  set angry(value: number) {
    this._angry = value;
  }
}
