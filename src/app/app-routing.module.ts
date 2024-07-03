import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { HomeComponent } from './home/home.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { QuestiondashboardComponent } from './questiondashboard/questiondashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { UsercrudComponent } from './usercrud/usercrud.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'Register', component: RegisterComponent},
  {path:'UserDashBoard',component:UserdashboardComponent},
  {path:'AskQuestion',component:AskquestionComponent},
  {path:'QuestionDashBoard',component:QuestiondashboardComponent},
  {path:'NewQuestions',component:NewquestionComponent},
  {path:'Questions',component:QuestionsComponent},
  {path:'UserUpdate',component:UsercrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
