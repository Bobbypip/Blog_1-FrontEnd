import {Injectable} from '@angular/core'; //Decorador que marca una clase como disponible para ser prevista e injectada como una dependecia
import {HttpClient, HttpHeaders } from '@angular/common/http'; //Para hacer las peticiones AJAX
import { Observable } from 'rxjs';// Leer lo que llega de un servicio
import { User } from '../models/user'; 
import { global } from './global';

@Injectable()//Permite usar esta clase como un servicio
export class UserService{
    public url: string;
    public identity;
    public token;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    test(){
        return "Hola mundo desde un servicio";
    }

    register(user): Observable<any>{
        let json = JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'register', params, {headers: headers})
    }

    signup(user, gettoken = null): Observable<any>{
        if(gettoken != null){
            user.gettoken = 'true';
        }

        let json = JSON.stringify(user);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'login', params, {headers: headers});
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity && identity != "undefined"){
            this.identity = identity;
        }

        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');

        if(token && token != "undefined"){
            this.token = token;
        }

        return this.identity;
    }
}