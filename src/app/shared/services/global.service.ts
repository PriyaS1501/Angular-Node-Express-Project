import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //baseURL="http://localhost:3000/Doctors" old URL
  //baseURL = "http://localhost:3000/"
   baseURL = "https://dark-pink-quail-hose.cyclic.app/" //new url
  //tableName="Doctors"

  constructor(private http: HttpClient) { }

  // Get Record
  getRecords(table: string) {
    return this.http.get(this.baseURL + table)
  }
  // get single record
  getRecord(table: string, _id: any) {
    const getURL = `${this.baseURL}${table}/${_id}`
    return this.http.get(getURL)
  }
  // Delete Record
  deleteRecord(table: string, _id: any) {
    const delURL = `${this.baseURL}${table}/${_id}`
    return this.http.delete(delURL)
  }
  // add data
  addRecord(table:string, addForm: any) {
    return this.http.post(this.baseURL + table, addForm)
  }

  // edit record
  updateRecord(table: string,docData: any) {
    const putURL = `${this.baseURL}${table}/${docData._id}`
    return this.http.put(putURL, docData)
  }

  //store the user in the sessionstorage
  signIn(user: string) {
    sessionStorage.setItem("user_key", user)
  }

  
  //remove the user from the sessionstorage
  signOut() {
    sessionStorage.removeItem("user_key")
  }



}
