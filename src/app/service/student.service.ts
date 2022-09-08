import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../modal/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

addstudentURL:string;
getStdURL : string;
  constructor(private http:HttpClient) {
    this.addstudentURL='http://localhost:4200/student/addstudent';
    this.getStdURL='http://localhost:4200/student/getAll';

   }
   addstudent(std:Student):Observable<Student>{
    return this.addstudent.prototype.value
      return this.http.post<Student>(this.getStdURL,std);
      console.log( this.http.post<Student>(this.getStdURL,std))
   }

   getAllStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.getStdURL);

   }
}
