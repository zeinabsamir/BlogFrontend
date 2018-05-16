import { Component, OnInit, Input, } from '@angular/core';
import { Article } from '../../shared/model/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

}
