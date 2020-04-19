import { Pipe, PipeTransform } from '@angular/core';
import { AddedPart } from './addedPart.model';


@Pipe({
  name: 'addedpartsFilter'
})
export class AddedpartsFilterPipe implements PipeTransform {

  transform(addedParts: AddedPart[], part: number): AddedPart[] {

    if (addedParts != null)
    {
      return addedParts.filter(a => a.getPartId == part);
    }
    else
    {
      return new Array<AddedPart>();
    }

    
    
  }

}
