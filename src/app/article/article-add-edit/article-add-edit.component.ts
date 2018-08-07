import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/model/article.model';
import { ArticleService } from '../../core/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-add-edit',
  templateUrl: './article-add-edit.component.html',
  styleUrls: ['./article-add-edit.component.css']
})
export class ArticleAddEditComponent implements OnInit {
article: Article = <any>{};

  constructor(private articleService: ArticleService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initArticle();
  }

  onArticleCreate() {
    this.articleService.createArticle(this.article).subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }

  onArticleEdit() {
    this.articleService.updateArticleById(this.article).subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }
  initArticle() {
    this.route.params.subscribe(params => {
      const articletId = params.articleId;

      if (articletId) {
        this.articleService.getArticletById(articletId).subscribe(data =>
          this.article = data.article);
      }
    });
  }
}
