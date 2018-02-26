import { Musica } from "./musica.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from '@angular/http';
import 'rxjs'
import { Injectable } from "@angular/core";

@Injectable()
export class MusicaService {

    http: Http;
    headers: Headers;
    url: string = 'assets/data/musicas.json'; 

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    list(): Observable<Musica[]> {
        
        return this.http.get(this.url).map(res => res.json());
    }
}