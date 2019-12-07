import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ApiService} from "../../service/api.service";
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  title = 'task-manager';
  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 30
  };
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  updateForm: FormGroup;

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      parentTaskName: ['', Validators.required],
      priority: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    //this.router.navigate(['view-task']);
    return;

  }

  onSubmit() {
    console.log('Inside submit - task Name = '+this.updateForm.controls.taskName.value
    + ", Parent Task Name = "+this.updateForm.controls.parentTaskName.value
    + ", Priority = "+this.updateForm.controls.priority.value
    + ", Start Date = "+this.updateForm.controls.startDate.value
    + ", End Date = " +this.updateForm.controls.endDate.value);
    this.apiService.updateTask(this.updateForm.value)
      .subscribe( data => {
        this.router.navigate(['view-task']);
      });
  }
  
}
