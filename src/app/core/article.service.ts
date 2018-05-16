import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Article } from '../shared/model/article.model';

@Injectable()
export class ArticleService {

  private apiUrl = 'http://localhost:3000';  // URL to web api

  constructor(private http: Http) { }

  getArticles() {
    return this.http.get(`${this.apiUrl}/articles`)
    .map((res: Response) => res.json());
  }

  createArticle(postBody: {title: string;  description: String}) {
    return this.http.post(`${this.apiUrl}/articles`, postBody)
    .map((res: Response) => res.json());
  }

}
