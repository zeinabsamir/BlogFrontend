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
 comment = <any>{};
  constructor(private route: ActivatedRoute, private articleService: ArticleService, private commentService: CommentService) { }

  ngOnInit() {
  this.initArticle();
  }
  onCommentCreate() {
    this.route.params.subscribe(params => {
      const articleId = params.articleId;
      this.commentService.createComment(Number(articleId), this.comment).subscribe((data) => {
        console.log(data);
        this.comment.content = '';
        this.initArticle();

      });
    });
  }
  initArticle() {
    this.route.params.subscribe(params => {
      const articletId = params.articleId;
        this.articleService.getArticletById(articletId).subscribe((data) => {
          this.article = data.article;
          this.comments = data.comments;
          console.log(data);
        });

    });

    }

    onDeleteComment(commentId: number) {
      this.route.params.subscribe(params => {
        const articletId = params.articleId;

        this.commentService.deleteComment(articletId, commentId).subscribe((res) => {
          const commentToDelete      = this.comments.find(e => e.id === commentId);
          const commentToDeleteIndex = this.comments.indexOf(commentToDelete);
          this.comments.splice(commentToDeleteIndex, 1);
        });
      });
    }
  }

