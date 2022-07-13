import { Component } from '@angular/core';
import { GetApiService} from './get-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataType';
  value:any;
  addData:any;
  constructor(private api:GetApiService)
  {

  }
  ngOnInit()
  {
   this.getData()
  }

  getData(){
      this.api.apicall().subscribe((res:any) =>{
      this.addData=res;
      console.log(this.addData)
    });
  }


  // delData(){
  //    this.api.apidel().subscribe((res:any) =>{
  //     console.log("res data>>>>",res)
  //    });
  // }

delClk(id: number){

       // this.addData = this.addData.filter((id: any) => data.input!= del)

  var filtered = this.addData.filter(function(el:any) { return el.id != id }); 
    console.log(id)


  // this.addData.deleteData(id).subscribe((data:any)=>
  // {
  //   this.getData();
  // })

}

updClk(id:number){
  console.log(id)

}

onSubmit(data:any){
 this.api.saveUsers(data).subscribe((result:any)=>{
    console.log(result)

 });
}



}


