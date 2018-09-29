import {Component, Inject, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../article';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
  private article: Article;
  title: string;
  body: string;
  image: string;

  constructor(articleService: ArticleService) {
    this.article = articleService.getFeatured();
  }

  ngOnInit() {
    this.title = this.article.title;
    this.image = this.article.imageUrl;
    this.body = this.article.sections[0].slice(0, 150) + '...';
  }

}
