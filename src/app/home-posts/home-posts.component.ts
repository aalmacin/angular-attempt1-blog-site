import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.css']
})
export class HomePostsComponent implements OnInit {
  articles: Array<Article>;

  constructor(articleService: ArticleService) {
    this.articles = articleService.getArticles();
  }

  ngOnInit() {
  }

}
