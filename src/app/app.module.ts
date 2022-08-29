import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCompComponent } from './top-comp/top-comp.component';
import { BottomCompComponent } from './bottom-comp/bottom-comp.component';
import { HighlightDirective } from './highlight.directive';
import { SortArrayPipe } from './sort-array.pipe';
import { ExpandDirective } from './expand.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopCompComponent,
    BottomCompComponent,
    HighlightDirective,
    SortArrayPipe,
    ExpandDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
