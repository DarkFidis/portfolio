import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule } from './modules/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(APP_ROUTING)
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
