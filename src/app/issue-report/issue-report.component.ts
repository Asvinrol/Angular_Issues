import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter } from 'stream';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined
  @Output() formClose = new EventEmitter();

  constructor(private builder: FormBuilder, private issueService: IssuesService ) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: [''],
      descripttion: [''],
      priority: [''],
      type: ['']
    });
  }

  addIssue(){
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
