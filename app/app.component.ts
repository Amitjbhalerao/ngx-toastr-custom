import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  toastRef;

  constructor(
    private toastr: ToastrService){

  }

  showSuccessToast(){
    this.toastRef = this.toastr.success("The reboot request was unsuccessful","Device Unreachable",{
     disableTimeOut: true,
      tapToDismiss: true,
      positionClass:'toast-top-right',
      toastClass: "toast-icon custom-toast-success"
    });

    
  }

   showWarningToast(){
    this.toastRef = this.toastr.warning("The reboot request was unsuccessful","Device Unreachable",{
     disableTimeOut: true,
      tapToDismiss: true,
      toastClass: "toast-icon custom-toast-warning"
    });
   }
   showInfoToast(){
    this.toastRef = this.toastr.info("The reboot request was unsuccessful","Device Unreachable",{
     disableTimeOut: true,
      tapToDismiss: true,
      toastClass: "toast-icon custom-toast-info"
    });
   }
showErrorToast(){
    this.toastRef = this.toastr.error("The reboot request was unsuccessful","Device Unreachable",{
      disableTimeOut: true,
      tapToDismiss: true,
      toastClass: "toast-icon custom-toast-error"
    });
    
  }

  removeToast() {
    this.toastr.clear(this.toastRef.ToastId);
  }
}
