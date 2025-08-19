// alert.service.ts
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root' // Makes it available app-wide
})
export class AlertService {

  // Success Alert
  success(title: string, message?: string) {
    return Swal.fire({
      icon: 'success',
      title,
      text: message,
      confirmButtonColor: '#3085d6'
    });
  }

  // Error Alert
  error(title: string, message?: string) {
    return Swal.fire({
      icon: 'error',
      title,
      text: message,
      confirmButtonColor: '#d33'
    });
  }

  // Warning Alert
  warning(title: string, message?: string) {
    return Swal.fire({
      icon: 'warning',
      title,
      text: message,
      confirmButtonColor: '#ffc107'
    });
  }
}