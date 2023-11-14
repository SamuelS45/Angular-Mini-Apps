import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseURL = 'https://dummyjson.com/users'

@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  constructor(private httpClient:HttpClient) { }

  readAll():Observable<any>{
    return this.httpClient.get(baseURL)
  }
}
