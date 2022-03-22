import { InfoPoke } from 'src/app/interfaces/poke.interfaces';
export interface RepoPoke {
  count: number;
  next: string;
  previous?: any;
  results: InfoPoke[];
}
