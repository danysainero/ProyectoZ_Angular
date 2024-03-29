import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivateGuard } from './guards/can-activate.service';
/**************COMPONENTES*********************** */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostComponent } from './shared/post/post.component';
import { MessagesComponent } from './shared/messages/messages.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderProfileComponent } from './shared/header-profile/header-profile.component';
import { FriendsComponent } from './shared/friends/friends.component';
import { SearchComponent } from './shared/search/search.component';

/***************PAGINAS ROUTER****************************************** */
import { VerifypageComponent } from './pages/verifypage/verifypage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignpageComponent } from './pages/signpage/signpage.component';
import { MappageComponent } from './pages/mappage/mappage.component';
import { MessagepageComponent } from './pages/messagepage/messagepage.component';
import { FriendspageComponent } from './pages/friendspage/friendspage.component';
import { TimelinepageComponent } from './pages/timelinepage/timelinepage.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

/***************FORMULARIOS******************************** */
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutosizeModule} from 'ngx-autosize';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule, MatSnackBarModule} from '@angular/material';
import { ContactUsersComponent } from './shared/contact-users/contact-users.component';
import { ChatpageComponent } from './pages/chatpage/chatpage.component';
import { SettingspageComponent } from './pages/settingspage/settingspage.component'; 
import { ImageUploadModule } from "angular2-image-upload"
import { FileSelectDirective } from 'ng2-file-upload';
import { LoginpagelocalComponent } from './pages/loginpagelocal/loginpagelocal.component';
import { SignpagelocalComponent } from './pages/signpagelocal/signpagelocal.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor'; 

const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderProfileComponent,
    SearchComponent,
    FriendsComponent,
    PostComponent,
    MessagesComponent,
    NavbarComponent,
    LoginpageComponent,
    SignpageComponent,
    MappageComponent,
    MessagepageComponent,
    FriendspageComponent,
    TimelinepageComponent,
    LandingpageComponent,
    VerifypageComponent,
    ContactUsersComponent,
    ChatpageComponent,
    SettingspageComponent,
    FileSelectDirective,
    LoginpagelocalComponent,
    SignpagelocalComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AutosizeModule,    
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ImageUploadModule,    
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [    
    ActivateGuard,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})


export class AppModule { 

}
