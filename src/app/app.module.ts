import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { httpParams } from './com/annaniks/dastavok-dispatcher/params';
import { ApiService } from './com/annaniks/dastavok-dispatcher/services';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'angular2-cookie';
import { AuthGuard } from './com/annaniks/dastavok-dispatcher/guards';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    CookieService,
    AuthGuard,
    { provide: "BASE_URL", useValue: httpParams.baseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
