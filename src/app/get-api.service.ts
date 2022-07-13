import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {  Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  url ='https://jsonplaceholder.typicode.com/posts';

  constructor
   (private http: HttpClient)
     { }

    apicall(): Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }


    // apidel(): Observable<any>{
    //   return this.http.post('https://jsonplaceholder.typicode.com//posts/id')
    // }

   // deleteData(id:any){
   //   return this.http.delete('https://jsonplaceholder.typicode.com/posts/id')

   // }

saveUsers(data:any){
  return this.http.post(this.url,data);

}



}
