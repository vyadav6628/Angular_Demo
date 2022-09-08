import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project';
  displayvalue:string='';
  getdata(val:any)
  {
    console.warn(val);
  }
  getvalue(val:string)
  {
    this.displayvalue=val;
  }
  count:any=0;
  counts(type:string)
  {
      if(type=='add')
      {
        this.count++;
      }
      else{
        this.count--;
      }
  }
}
