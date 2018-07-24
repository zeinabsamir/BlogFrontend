import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Article } from '../shared/model/article.model';

@Injectable()
export class CommentService {

  private apiUrl = 'http://localhost:3000';  // URL to web api

  constructor(private http: Http) { }

  createComment(articleId: number, comment: string) {
    return this.http.post(`${this.apiUrl}/articles/${articleId}/comments`, comment)
    .map((res: Response) => res.json());
  }

}
