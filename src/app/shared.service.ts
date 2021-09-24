import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:65385/api";
  constructor(private http:HttpClient) { }
//student
  getStudentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/students')
  }
  addStudent(val:any){
    return this.http.post(this.APIUrl+'/students',val)
  }
  
  updateStudent(id:any,val:any){
    return this.http.put(this.APIUrl+'/students/'+id,val)
  }

  
  
  deleteStudent(val:any){
    return this.http.delete(this.APIUrl+'/students/'+val)
  }

  //course
  
  getCourseList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/courses')
  }
  addCourse(val:any){
    return this.http.post(this.APIUrl+'/courses',val)
  }
  
  updateCourse(id:any,val:any){
    return this.http.put(this.APIUrl+'/courses/'+id,val)
  }
  
  deleteCourse(val:any){
    return this.http.delete(this.APIUrl+'/courses/'+val)
  }
  // batchs
  
  getBatchList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/batches')
  }
  addBatch(val:any){
    return this.http.post(this.APIUrl+'/batches',val)
  }
  
  updateBatch(id:any,val:any){
    return this.http.put(this.APIUrl+'/batches/'+id,val)
  }
  
  deleteBatch(val:any){
    return this.http.delete(this.APIUrl+'/batches/'+val)
  }
  // enrollments
  
  getEnrollmentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/enrollments')
  }
  addEnrollment(val:any){
    return this.http.post(this.APIUrl+'/enrollments',val)
  }
  
  updateEnrollment(id1:any,id2:any,val:any){
    return this.http.put(this.APIUrl+'/enrollments/'+id1+'/'+id2,val)
  }
  
  deleteEnrollment(id1:any,id2:any){
    return this.http.delete(this.APIUrl+'/enrollments/'+id1+'/'+id2)
  }

}
