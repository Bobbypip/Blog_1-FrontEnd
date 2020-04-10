import {Injectable} from '@angular/core'; //Decorador que marca una clase como disponible para ser prevista e injectada como una dependecia
import {HttpClient, HttpHeaders } from '@angular/common/http'; //Para hacer las peticiones AJAX
import { Observable } from 'rxjs';// Leer lo que llega de un servicio
import { Category } from '../models/category'; 
import { global } from './global';

@Injectable()//Permite usar esta clase como un servicio
export class CategoryService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    create(token, category): Observable<any>{
        let json = JSON.stringify(category);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.post(this.url + 'category', params, {headers: headers});
    }
}