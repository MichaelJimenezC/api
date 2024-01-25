import { Component, OnInit } from '@angular/core';
import { DashbordService } from '../services/dashbord.service';
import { LoginService } from '../services/login.service';
import { ApiService } from '../services/api.service';
import { Cuenta } from '../interfaces/cuenta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  cuentas: Cuenta[] = [];
  fechaActual: Date = new Date();
  

  constructor(private dashbordService: DashbordService, private loginService: LoginService, private apiService:ApiService) { }

  ngOnInit(): void {
    const loggedInUser = this.loginService.getLoggedInUser();
    console.log(JSON.stringify(loggedInUser, null, 2));
    console.log(loggedInUser.emailId);
    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
    this.apiService.getCuentas(loggedInUser.emailId).subscribe((res) => {
      let dataArray = (res as Cuenta[]); 
      this.cuentas = dataArray;
      console.log(this.cuentas);
    }, error => {
      console.error('Error from API', error);
      // Manejar errores según tu lógica de la aplicación
    });
  }

 
}
