import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { AdminService } from '../service/admin.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(
    private service: QuestionService,
    private dialog: MatDialog,
    
  ) {}
  data: any = [];

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this.service.getAllQuestions().then((res) => (this.data = res));
  }

  


 
}
