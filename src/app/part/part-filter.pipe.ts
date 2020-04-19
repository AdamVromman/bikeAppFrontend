import { Pipe, PipeTransform } from '@angular/core';
import { Part } from './part.model';

@Pipe({
  name: 'partFilter'
})
export class PartFilterPipe implements PipeTransform {

  transform(Parts:Part[], bike:number): Part[] {
    return Parts.filter(p => p.bikeId.includes(bike));
  }

}
