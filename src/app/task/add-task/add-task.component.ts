import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ApiService} from "../../service/api.service";
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title = 'task-manager';
  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 30
  };
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
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
    console.log('Inside submit - task Name = '+this.addForm.controls.taskName.value
    + ", Parent Task Name = "+this.addForm.controls.parentTaskName.value
    + ", Priority = "+this.addForm.controls.priority.value
    + ", Start Date = "+this.addForm.controls.startDate.value
    + ", End Date = " +this.addForm.controls.endDate.value);
    this.apiService.createTask(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['view-task']);
      });
    //this.router.navigate(['view-task']);
  }
  
}
