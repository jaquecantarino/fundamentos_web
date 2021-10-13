import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(mensagem: string, type: string){
    const bsModalRef : BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = mensagem
  }

  showAlertDanger(mensagem: string){
    this.showAlert(mensagem, 'danger')
  }

  showAlertSuccess(mensagem: string){
    this.showAlert(mensagem, 'success')
  }

  showAlertInfo(mensagem: string){
    this.showAlert(mensagem, 'info')
  }
}
