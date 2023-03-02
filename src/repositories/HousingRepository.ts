import { Housing, HousingRaw } from '../models/Housing';

let fetched = false;
let housings: Housing[] = [];

export async function findAll(): Promise<Housing[]> {
  if (!fetched) {
    const data = await (await fetch('data.json')).json();
    housings = data.map((housing: HousingRaw) => new Housing(housing));
    fetched = true;
  }
  return housings;
}

export async function find(id: string): Promise<Housing | undefined> {
  if (!fetched) {
    await findAll();
  }
  return housings.find((housing: Housing) => housing.id === id);
}
