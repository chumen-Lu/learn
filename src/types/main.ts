

interface Course{
  readonly name:string,
  price:number,
  isOnLine:boolean,
  students:string[],
  desc?:string
}

export type { Course }