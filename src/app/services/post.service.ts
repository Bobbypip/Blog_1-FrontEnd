import {Injectable} from '@angular/core'; //Decorador que marca una clase como disponible para ser prevista e injectada como una dependecia
import {HttpClient, HttpHeaders } from '@angular/common/http'; //Para hacer las peticiones AJAX
import { Observable } from 'rxjs';// Leer lo que llega de un servicio
import { Post } from '../models/post'; 
import { global } from './global';

@Injectable()//Permite usar esta clase como un servicio
export class PostService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    pruebas(){
        return 'Hola desde el servicio de entradas!!';
    }

    create(token, post): Observable<any>{
        let json = JSON.stringify(post);//Convierte un objeto javascript a un formato json, pero es un string, porque es la menera
                                        //de enviar datos por Http
        let params = "json="+json;

        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', token);
        return this._http.post(this.url + 'post', params, {headers: headers});//En _http. es la peticion AJAX
    }

    getPosts(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

        return this._http.get(this.url + 'post', {headers: headers});
    }
}