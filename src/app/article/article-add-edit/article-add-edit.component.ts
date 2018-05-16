import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/model/article.model';
import { ArticleService } from '../../core/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-add-edit',
  templateUrl: './article-add-edit.component.html',
  styleUrls: ['./article-add-edit.component.css']
})
export class ArticleAddEditComponent implements OnInit {
article = {
  title: '',
  description: ''
};

  constructor(private articleService: ArticleService,
              private router: Router) { }

  ngOnInit() {
  }

  onPostSubmit() {
    this.articleService.createArticle(this.article).subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }
}
