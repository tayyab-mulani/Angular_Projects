import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit
{
  public Batches : any = [];

  constructor(public obj : MarvellousService) {}

  ngOnInit() 
  {
    return this.obj.GetBatchDetails().subscribe(data=>this.Batches=data);
  }
}

