import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CategoryService]
})
export class AppComponent implements OnInit, DoCheck{
  public title = 'blog-angular';
  public identity;
  public token;
  public categories;
  public url;

  constructor(
    public _userService: UserService,
    private _categoryService: CategoryService
  ){
    this.loadUser();
    this.url = global.url;
  }

  ngOnInit(){
    console.log('Webapp cargada correctamente');
    this.getCategories();
    //console.log(this.identity);
  }

  //Se usa el metodo DoCheck ya que no hay que vigile el LocalStorage, donde se almacenan los datos del usuario para persistencia,
  //una vez que se hacen los cambios en el LocalStorage el metodo ngDoCheck se ejecuta asignando los valores del usuario a la propiedad 
  //identity para que se muestren en la pagina automaticamente, sin necesidad de regescarla.
  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  getCategories(){
    this._categoryService.getCategories().subscribe(
      response => {
        if(response.status == 'success'){
          this.categories = response.categories;
          //console.log(this.categories);
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
