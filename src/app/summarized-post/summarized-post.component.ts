import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-summarized-post',
  templateUrl: './summarized-post.component.html',
  styleUrls: ['./summarized-post.component.css']
})
export class SummarizedPostComponent implements OnInit {
  @Input() article: Article;
  preview: string;

  constructor() { }

  ngOnInit() {
    this.preview = this.article.sections[0].slice(0, 200) + '...';
  }

}
