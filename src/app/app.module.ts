import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Para usar formularios y 2wayDB
import { HttpClientModule } from '@angular/common/http'; //Para comunicarse con el servidor por medio del protocolo de HTTP
import { routing, appRoutingProviders } from './app.routing';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';// Import de Froala, editor de texto enriquecido
import { AngularFileUploaderModule } from "angular-file-uploader";// Import para subir archivos

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    UserEditComponent,
  ],
  imports: [
    //Aqui se cargan los modulos
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),// Import de Froala, editor de texto enriquecido
    FroalaViewModule.forRoot(),// Import de Froala, editor de texto enriquecido
    AngularFileUploaderModule,// Import para subir archivos
  ],
  providers: [
    //Aqui se cargan los servicios
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
