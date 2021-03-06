import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BridgingTheGapComponent } from './bridging-the-gap/bridging-the-gap.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ConferenceComponent } from './conference/conference.component';
import { DirectoryComponent } from './directory/directory.component';
import { DistrictComponent } from './district/district.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { LinksComponent } from './links/links.component';
import { LoginComponent } from './login/login.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ServiceComponent } from './service/service.component';
import { StepsComponent } from './steps/steps.component';
import { TraditionsComponent } from './traditions/traditions.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'professionals', component: ProfessionalsComponent },
  { path: 'conference', component: ConferenceComponent },
  { path: 'bridging-the-gap', component: BridgingTheGapComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'traditions', component: TraditionsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'information', component: InformationComponent },
  { path: 'links', component: LinksComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service', component: ServiceComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
