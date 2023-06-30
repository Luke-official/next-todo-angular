import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  _isModalOpen: boolean = false;
  public modalChanged = new Subject<any>();

  constructor() {}

  get isModalOpen(): boolean {
    return this._isModalOpen;
  }

  toggleModalOpen = () => {
    this._isModalOpen = !this._isModalOpen;
    this.modalChanged.next(this._isModalOpen);
  };
}
