import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Article } from '../shared/model/article.model';

@Injectable()
export class CommentService {

  private apiUrl = 'http://localhost:3000';  // URL to web api

  constructor(private http: Http) { }

  getCommentById(articleId: number, commentId: number) {
    return this.http.get(`${this.apiUrl}/articles/${articleId}/comments/${commentId}`)
    .map((res: Response) => res.json());
  }
  createComment(articleId: number, commentBody: {content: String}) {
    return this.http.post(`${this.apiUrl}/articles/${articleId}/comments`, commentBody)
    .map((res: Response) => res.json());
  }

  deleteComment(articleId: number, commentId: number) {
    return this.http.delete(`${this.apiUrl}/articles/${articleId}/comments/${commentId}`)
    .map((res: Response) => res.json());
  }

  updateCommentById (articleId: number, commentBody) {
    return this.http.put(`${this.apiUrl}/articles/${articleId}/comments/${commentBody.id}`, commentBody)
    .map((res: Response) => res.json());
  }
}
