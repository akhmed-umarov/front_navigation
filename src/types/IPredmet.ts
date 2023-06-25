export enum PredmetName {
  informatic = "informatic",
  physics = "physics",
  maths = "maths",
}

import type IThemas from "./IThemas";

export interface IPredmet {
  themas: Omit<IThemas, "body" | "predmet" | "imgUrl">[];
  description: string;
  imagUrl: string;
  title: string;
}

export type ISimplePredmet = {
  title: string;
  imagUrl: string;
  link: string;
};
