import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from "../model/task.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8083/taskmanager';

  // login(loginPayload) : Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  // }

  getTasks() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+"/tasks");
  }

  getTaskById(taskId: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + taskId);
  }

  createTask(task: Task): Observable<ApiResponse> {
    alert('Inside create Task=' +task.taskId);
    return this.http.post<ApiResponse>(this.baseUrl + "/task/create", task);
  }

  updateTask(task: Task): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + "/task/modify", task);
  }

  endTask(taskId: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + taskId);
  }
}
