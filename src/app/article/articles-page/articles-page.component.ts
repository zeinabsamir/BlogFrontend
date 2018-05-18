import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../core/article.service';
import { Article } from '../../shared/model/article.model';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

  private articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe(articleData => this.articles = articleData);
  }
  deleteArticle(articleId: number) {
    this.articleService.deleteArticle(articleId).subscribe(articles => {
      this.articles = articles;
    });
  }

}
