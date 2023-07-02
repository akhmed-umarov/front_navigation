export enum PredmetName {
  informatic = "informatic",
  physics = "physics",
  maths = "maths",
}

export type IThemasInPredmet = { 
  title: string,
  link: string,
  iconUrl: string
}

export interface IPredmet {
  themas: IThemasInPredmet[];
  description: string;
  imgUrl: string;
  title: string;
}

export type ISimplePredmet = {
  title: string;
  imgUrl: string;
  link: string;
};
