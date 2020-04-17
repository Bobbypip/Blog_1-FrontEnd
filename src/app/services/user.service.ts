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

    register(user): Observable<any>{ // El tipo de dato que devolvera una peticion sera un Observable<any>, esto permitira leer 'response' y leer las propiedades changes y status
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

    update(token, user): Observable<any>{
        //Limpiar campo content (editor texto enriquecido) htmlEntities > utf-8
        user.description = global.htmlEntities(user.description);

        let json = JSON.stringify(user);
        let params = 'json='+json;
                    //'name de la variable por POST'=+'valor'
        
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.put(this.url + 'user/update', params, {headers: headers});
                                                              //Objeto JSON {nombre: variable}
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity && identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');

        if(token && token != "undefined"){
            this.token = token;
        }else{
            this.token =  null;
        }

        return this.token;
    }

    getPosts(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'post/user/' + id, {headers: headers});
    }

    getUser(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'user/detail/' + id, {headers: headers});
    }
}