import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroItem } from 'src/app/marca-detail/carro-item/carro-item.model';
import { BORGESCAR2_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroCarroService {

  constructor(private http: HttpClient) { }

  cadastro(carro: CarroItem): Observable<CarroItem>{
    return this.http.post<CarroItem>(`${BORGESCAR2_API}/carro`, carro)
  }
}