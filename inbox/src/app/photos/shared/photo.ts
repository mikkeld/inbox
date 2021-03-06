export interface IPhoto {
  $key?: string;
  date: number;
  tags: string[];
  imgPath: string;
}

export class Photo implements IPhoto {
  constructor(public date: number,
              public tags: string[],
              public imgPath: string) {
  }

  photoHasWord(word: string): boolean {
    return this.tags.indexOf(word) > -1;
  }
}
