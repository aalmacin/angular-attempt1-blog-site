import {Component, Inject, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
  article: Article;

  constructor(articleService: ArticleService) {
    this.article = articleService.getFeatured();
  }

  ngOnInit() {
  }

}
