import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Article } from '../../shared/model/article.model';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() article: Article;
  @Output() deletedArticleId: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
