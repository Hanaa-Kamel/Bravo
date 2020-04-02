import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseURL:string ="https://jsonplaceholder.typicode.com/posts"
  constructor( private httpclient: HttpClient) { }

  get_articles(){
    return this.httpclient.get(this.baseURL);
  }
}


