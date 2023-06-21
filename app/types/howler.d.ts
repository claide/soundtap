declare module 'howler' {
  interface HowlOptions {
    src: string | string[];
    preload?: boolean;
    // Add any other options you are using in your project
  }

  export class Howl {
    constructor(options: HowlOptions);
    play(): void;
    stop(): void;
    // Add any other methods you are using in your project
  }

  export class Howler {
    static volume(volume?: number): number;
    // Add any other static methods you are using in your project
  }
}
