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
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { NgxPopper } from 'angular-popper';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

//Importar guard
import { IdentityGuard } from './services/identity.guard';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    UserEditComponent,
    CategoryNewComponent,
    PostNewComponent,
    PostDetailComponent,
    PostEditComponent,
    CategoryDetailComponent,
  ],
  imports: [
    //Aqui se cargan los modulos
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),// Import de Froala, editor de texto enriquecido
    FroalaViewModule.forRoot(),// Import de Froala, editor de texto enriquecido
    AngularFileUploaderModule, NgxPopper,// Import para subir archivos
  ],
  providers: [
    //Aqui se cargan los servicios
    appRoutingProviders,
    IdentityGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
