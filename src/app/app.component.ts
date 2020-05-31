import { Component } from '@angular/core';
import { logReaderService } from './services/logreader.service';
import { Logs } from './classes/logs';
import { Query } from './classes/query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listlogs:Logs[];
  lquery:Query;
  title = 'logreader';
  constructor(private _logreaderservice:logReaderService){}


  ngOnInit(){
    //this.lquery.starttime="2020-05-31 11:35:33";
    //this.lquery.lookbackduration="3";
    this._logreaderservice.getlogs()//this.lquery)
    .subscribe(
        data=>
        {
              this.listlogs=data;
        }
    );

  }

}
