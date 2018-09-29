import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { SubscribeBoxComponent } from './subscribe-box/subscribe-box.component';
import { SummarizedPostComponent } from './summarized-post/summarized-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedPostComponent,
    SubscribeBoxComponent,
    SummarizedPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
