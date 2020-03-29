import { Pipe, PipeTransform } from '@angular/core';
import { AddedPart } from './addedPart.model';


@Pipe({
  name: 'addedpartsFilter'
})
export class AddedpartsFilterPipe implements PipeTransform {

  transform(addedParts: AddedPart[], part: number): AddedPart[] {
    return addedParts.filter(a => a.part.id == part);
    
  }

}
