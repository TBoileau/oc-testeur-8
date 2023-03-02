import { Equipment } from './Equipment';
import { Host } from './Host';
import { Picture } from './Picture';
import { Tag } from './Tag';

export type HousingRaw = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: number;
  location: string;
  equipments: string[];
  tags: string[];
};

export class Housing {
  public id: string;
  public title: string;
  public cover: Picture;
  public pictures: Picture[];
  public description: string;
  public host: Host;
  public rating: number;
  public location: string;
  public equipments: Equipment[];
  public tags: Tag[];

  constructor(housingRaw: HousingRaw) {
    this.id = housingRaw.id;
    this.title = housingRaw.title;
    this.cover = new Picture(housingRaw.cover);
    this.pictures = housingRaw.pictures.map((picture) => new Picture(picture));
    this.description = housingRaw.description;
    this.host = new Host(housingRaw.host.name, housingRaw.host.picture);
    this.rating = housingRaw.rating;
    this.location = housingRaw.location;
    this.equipments = housingRaw.equipments.map((equipment) => new Equipment(equipment));
    this.tags = housingRaw.tags.map((tag) => new Tag(tag));
  }

  get ratingToArray(): boolean[] {
    return [1, 2, 3, 4, 5].map((i) => i <= this.rating);
  }
}
