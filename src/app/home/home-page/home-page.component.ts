import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../core/article.service';
import { Article } from '../../shared/model/article.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
