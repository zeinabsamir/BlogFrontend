import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../shared/model/article.model';
import { ArticleService } from '../../core/article.service';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit {

 article: Article;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const articleId = params.articleId;
      this.articleService.getArticletById(Number(articleId)).subscribe((data) => {
        this.article = data;

      });
    });
  }
}


