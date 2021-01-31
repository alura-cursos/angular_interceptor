import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animais } from './animais';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient) {}

  listDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }
}
