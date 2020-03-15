import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
  import { from } from 'rxjs';

/*
Hay que cargar el servicio UserService como una prpiedad dentro del componente,
eso se "inyecta" y se trenda una instancia del servicio dentro de una propiedad
que se defina dentro de la clase
*/
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService] //Carga del servicio
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User; //Objeto de tipo user, creado de la clase User
  public status: string;

  constructor(
    private _userService: UserService //instancia del servicio, ya no se tiene que hacer un nuevo Objeto para usar el servicio dentro de la clase
  ) {
    this.page_title = 'Registrate';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '' );
   }

  ngOnInit() {
    console.log('Componente de registro lanzado');
    console.log(this._userService.test());
  }

  onSubmit(form){
    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == "success"){
          this.status = response.status;
          form.reset(); //Vacia el formulario que fue rellenado para activar este metodo
        }else{
          this.status = 'error';
        }
      },

      error => {
        this.status = 'error';
        console.log(<any>error);
      } 
    )
    
    
  }

}
