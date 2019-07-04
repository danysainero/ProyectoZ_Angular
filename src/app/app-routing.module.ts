import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*PAGES***********************************************************************************/
import { SignpageComponent } from '../app/pages/signpage/signpage.component';
import { LoginpageComponent } from '../app/pages/loginpage/loginpage.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { TimelinepageComponent } from './pages/timelinepage/timelinepage.component';
import { MessagepageComponent } from './pages/messagepage/messagepage.component';
import { MappageComponent } from './pages/mappage/mappage.component';
import { FriendspageComponent } from './pages/friendspage/friendspage.component';
import { VerifypageComponent } from './pages/verifypage/verifypage.component'
import { ChatpageComponent } from './pages/chatpage/chatpage.component';
import { SettingspageComponent } from './pages/settingspage/settingspage.component';
import { SignpagelocalComponent } from './pages/signpagelocal/signpagelocal.component';
import { LoginpagelocalComponent } from './pages/loginpagelocal/loginpagelocal.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingpageComponent
  },
  /* {
  path: 'sign',
  component: SignpageComponent
},
{
  path: 'login',
  component: LoginpageComponent
},
*/
  {
    path: 'sign',
    component: SignpagelocalComponent
  },
  {
    path: 'login',
    component: LoginpagelocalComponent
  },
  {
    path: 'verify',
    component: VerifypageComponent
  },
  {
    path: 'timeline',
    component: TimelinepageComponent
  },
  {
    path: 'map',
    component: MappageComponent
  },
  {
    path: 'friends',
    component: FriendspageComponent
  },
  {
    path: 'messages',
    component: MessagepageComponent
  }, {
    path: 'chat',
    component: ChatpageComponent
  },
  {
    path: 'settings',
    component: SettingspageComponent
  },
  {
    path: 'logout',
    component: SignpageComponent
  },
  {
    path: '',
    component: LandingpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
