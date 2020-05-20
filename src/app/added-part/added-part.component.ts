import { Component, OnInit, Input } from '@angular/core';
import { AddedPart } from './addedPart.model';
import { Observable } from 'rxjs';
import { AddedPartDataService } from './added-part-data.service';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-added-part',
  templateUrl: './added-part.component.html',
  styleUrls: ['./added-part.component.css']
})
export class AddedPartComponent implements OnInit {

  @Input() public _addedPart: AddedPart;
  public _fetchImages$: Observable<any[]>;
  public image: any;

  constructor(
    private _addedPartData: AddedPartDataService,
    private _sanitizer: DomSanitizer
  ) {
    
   }

  ngOnInit(): void {
      
      this._addedPartData.getImage(this._addedPart.Id).subscribe(data =>
        {
          if(data)
          {
          let objectURL = 'data:image/png;base64,' + data;
          this.image = this._sanitizer.bypassSecurityTrustUrl(objectURL);
          }
          else
          {
            this.image = null;
          }
          
        });
  }

}
