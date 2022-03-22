import { Pipe, PipeTransform } from '@angular/core';
import { InfoPoke } from '../../interfaces/poke.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemos: InfoPoke[], page: number = 0, busqueda: string = ''): InfoPoke[] {

    if(busqueda.length === 0)
      return pokemos.slice(page, page + 10);
    const filteredPoke = pokemos.filter (poke => poke.name.includes(busqueda));
    return filteredPoke.slice(page, page + 10);
  }

}
