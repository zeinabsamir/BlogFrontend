import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentService } from '../core/comment.service';
import { CommentsBodyComponent } from './comments-body/comments-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommentsBodyComponent
  ],
  providers: [ CommentService],
  declarations: [CommentsBodyComponent]
})
export class CommentModule { }
