import { Injectable } from '@angular/core';
import {Part} from '../app';

@Injectable({
  providedIn: 'root'
})
export class PartDataServiceService {

  private _parts = PARTS;

  constructor() { }

  get recipes(): Part[]
  {
    return this._parts;
  }
}
