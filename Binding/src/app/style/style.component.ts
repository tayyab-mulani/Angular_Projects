import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent 
{
  public Mycolor = "Orange";
  public Isset = true;
  public Myclass = "success"; 

  public Data = "________________________";

  public MyAction()
  {
    this.Data = "Submit Button Clicked...";     
  }

  public MyActionNew(value : any)
  {
    console.log(value);
  }
}
