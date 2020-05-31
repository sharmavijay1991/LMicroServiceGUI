import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Query } from './../classes/query';

@Injectable()
export class logReaderService
{
    constructor(private httpclient: HttpClient){

    }

    //getlogs(lq:Query):Observable<any>{
    getlogs():Observable<any>{
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json'
        });
        let options = {
            headers: httpHeaders
        };
        return this.httpclient.post("http://35.225.79.175:80/getlogs", {
            starttime: '2020-05-31 11:35:33',
            lookbackduration: '3',
            deviceid:'101vMac'
        }, options);

    }
}