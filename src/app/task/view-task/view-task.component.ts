import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {Task} from "../../model/task.model";
import {ApiService} from "../../service/api.service";
import {ApiResponse} from "../../model/api.response";
import { DatePipe } from '@angular/common';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  providers: [DatePipe]
})
export class ViewTaskComponent implements OnInit {
  viewForm : FormGroup;
  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  tasks: ApiResponse;
  currentDate = new Date();
  today = '';
  ti: Task;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService,private datepipe: DatePipe) { 
    this.apiService.getTasks()
    .subscribe( fdata => {
      this.tasks = fdata;
    
      //  alert("View"+ tasks);
      //  alert("View value"+ tasks.message);
    });
    this.today = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd');    

  }

  ngOnInit() {

    
  //   this.apiService.getTasks()
  //     .subscribe( tasks => {
  //       this.tasks = this.tasks;
      
  //        alert("View"+ tasks);
  //        alert("View value"+ tasks.message);
  //     });

      this.viewForm = this.formBuilder.group({
        taskName: ['', Validators.required],
        parentTaskName: ['', Validators.required],
        priority: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      });
  }

  isOld(date){
    
    if(date > this.today){
      return false;
    }else{
      return true;
    }
  }

  editTask(task: Task): void {
    // ti : Task;
    
    // this.ti.taskName = task.taskName;
    // this.ti.priority = task.priority;
    // this.ti.startDate = task.startDate;
    // this.ti.endDate = task.endDate;
    // this.ti.parentTaskName = task.parentTaskName;
    this.router.navigate(['edit-task']);
  };

  // onSubmit() {
  //   // this.apiService.createTask(this.viewForm.value)
  //   // .subscribe( data => {
  //   //   alert(data);
  //   //   this.router.navigate(['view-task']);
  //   // });
  // }

  // // addUser(): void {
  // //   this.router.navigate(['add-user']);
  // // };
 
}
