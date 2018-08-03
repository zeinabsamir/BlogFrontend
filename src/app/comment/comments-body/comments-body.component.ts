import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comments-body',
  templateUrl: './comments-body.component.html',
  styleUrls: ['./comments-body.component.css']
})
export class CommentsBodyComponent implements OnInit {


   @Input() comment;
   @Output() deletedCommentId: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }


}
