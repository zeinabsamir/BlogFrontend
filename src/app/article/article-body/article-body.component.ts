import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../shared/model/article.model';
import { ArticleService } from '../../core/article.service';
import { CommentService } from '../../core/comment.service';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit {

 article: Article;
 comments = [];
  constructor(private route: ActivatedRoute, private articleService: ArticleService, private commentService: CommentService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const articleId = params.articleId;
      this.articleService.getArticletById(Number(articleId)).subscribe((data) => {
        this.article = data.article;
        this.comments = data.comments;
        console.log(data);

      });
    });
  }
  createComment(comment: string) {
    this.route.params.subscribe(params => {
      const articleId = params.articleId;
      this.commentService.createComment(Number(articleId), comment).subscribe((data) => {
        console.log(data);

      });
    });
  }
}
