import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Evento } from "./evento.model";

@Injectable()
export class EventoService {
    http: Http;
    headers: Headers;
    url: string = 'assets/data/eventos.json';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    list(): Observable<Evento[]> {

        return this.http.get(this.url).map(res => res.json());
    }
}