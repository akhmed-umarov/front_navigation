export enum PredmetName {
  informatic = "informatic",
  physics = "physics",
  maths = "maths",
}

import type IThemas from "./IThemas";

export type IThemasInPredmet = { 
  title: string,
  link: string
}

export interface IPredmet {
  themas: Omit<IThemas, "body" | "predmet" | "imgUrl">[];
  description: string;
  imgUrl: string;
  title: string;
}

export type ISimplePredmet = {
  title: string;
  imgUrl: string;
  link: string;
};
