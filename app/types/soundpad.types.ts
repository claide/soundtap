import { Howl } from "howler";

export interface SoundButton {
  name: string;
  file: string;
  bg: string;
  howl: Howl | null;
}