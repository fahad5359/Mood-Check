export class StudentsNames {
  private _listOfNames:string[]=[];


  constructor(listOfNames: string[]) {
    this._listOfNames = listOfNames;
  }

  get listOfNames(): string[] {
    return this._listOfNames;
  }

  set listOfNames(value: string[]) {
    this._listOfNames = value;
  }
}
