export class Article {
  get title(): string {
    return this._title;
  }
  get imageUrl(): string {
    return this._imageUrl;
  }
  get sections(): Array<string> {
    return this._sections;
  }
  get featured(): boolean {
    return this._featured;
  }

  private _title: string;
  private _imageUrl: string;
  private _sections: Array<string>;
  private _featured: boolean;

  constructor(title, imageUrl, sections, featured= false) {
    this._title = title;
    this._imageUrl = imageUrl;
    this._sections = sections;
    this._featured = featured;
  }
}
