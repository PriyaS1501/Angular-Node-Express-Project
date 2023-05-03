import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

baseURL="http://localhost:3000/Doctors"
//tableName="Doctors"

  constructor(private http:HttpClient) { }

  // Get Record
  getRecords(){
    return this.http.get(this.baseURL)
  }
  // get single record
  getRecord(id:any){
    const getURL= `${this.baseURL}/${id}`
    return this.http.get(getURL)
  }
  // Delete Record
  deleteRecord(id:any){
    const delURL =`${this.baseURL}/${id}`
    return this.http.delete(delURL)
  }
  // add data
  addRecord(addForm:any) {
    return this.http.post(this.baseURL, addForm)
  }

  // edit record
  updateRecord(docData: any) {
    const putURL = `${this.baseURL}/${docData.id}`
    return this.http.put(putURL, docData)
  }

  
 
}
