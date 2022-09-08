import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { Student } from 'src/app/modal/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  student_Details !: FormGroup;
  stdObj:Student=new Student();
  stdList:Student[]=[];
  constructor(private formBulider :FormBuilder,private studentService : StudentService) { }

  ngOnInit(): void {
    this.getAllStudent();
    this.student_Details = this.formBulider. group({
      id : [''],
      name : [''],
      email : [''],
      mobile : ['']
    });
  }
  addstudentdetails(){
    console.log(this.student_Details);
    this.stdObj.id=this.student_Details.value.id;
    this.stdObj.name=this.student_Details.value.name;
    this.stdObj.email=this.student_Details.value.email;
    this.stdObj.mobile=this.student_Details.value.mobile;
    console.log(this.stdObj);
    
    this.studentService.addstudent(this.stdObj).subscribe(res=>{
      console.log(res);
      this.getAllStudent();
    },err=>{
      console.log(err);
    })
  }
  getAllStudent(){
    this.studentService.getAllStudent().subscribe(res=>{
      this.stdList=res;
    },err=>{
      console.log("error while fetching data.");
    });
  }
  editStudent(std:Student){
    this.student_Details.controls['id'].setValue(std.id);
    this.student_Details.controls['name'].setValue(std.name);
    this.student_Details.controls['email'].setValue(std.email);
    this.student_Details.controls['mobile'].setValue(std.mobile);
  }
}
function id(id: any) {
  throw new Error('Function not implemented.');
}

