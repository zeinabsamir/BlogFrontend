import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommentService } from '../../core/comment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-body',
  templateUrl: './comments-body.component.html',
  styleUrls: ['./comments-body.component.css']
})
export class CommentsBodyComponent implements OnInit {


   @Input() comment;
   @Output() deletedCommentId: EventEmitter<number> = new EventEmitter();
   edit = false;
  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {

  }
  toggleEdit() {
     this.edit = !this.edit;

  }

  onCommentEdit() {
    this.route.params.subscribe(params => {
      const articletId = params.articleId;
      this.commentService.updateCommentById(articletId, this.comment).subscribe(res => {
        console.log(res);
        this.edit = !this.edit;
      });

    });
  }
}
