
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin : UsuarioLogin) : Observable <UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://jaqueblog.herokuapp.com/usuarios/logar', usuarioLogin )

  }

  cadastrar(usuario:Usuario) :Observable<Usuario>{
    return this.http.post<Usuario>('https://jaqueblog.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://jaqueblog.herokuapp.com/usuarios/${id}`)
  }

  logado() {
    let ok: boolean = false

      if(environment.token != ''){
        ok = true
      }
      //se o environment token for diferente de vazio então é true, existe senha armazenada e há login feito.//

    return ok
  }
  
}
