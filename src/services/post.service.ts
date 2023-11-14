import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private HttpClient:HttpClient) { }

  getPost(userID:number){
    return this.HttpClient.get(`https://jsonplaceholder.typicode.com/posts/`)
    // console.log(HttpClient)
  }
}
