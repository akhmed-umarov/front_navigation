import { PredmetName } from "./IPredmet";

export default interface IThema {
  predmet: PredmetName;
  description: string;
  imgUrl: string;
  title: string;
  link: string;
}
