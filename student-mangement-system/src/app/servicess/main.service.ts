import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  mainUrl: any
  constructor(private http: HttpClient) {
    this.mainUrl = 'http://localhost:5172'
  }

  async getAllData() {
    const endpoint = '/a';
    const resp = await this.http.get<any>(this.mainUrl + endpoint).toPromise().then(res => {
      return res;
    }).catch(error => {
      console.error('Error:', error);
      throw error;
    });
    return resp;
  }
  // async updateMarks(sno: number, marks: number) {
  //   const endpoint = `/update`;
  //   const resp = await this.http.get<any>(this.mainUrl + endpoint).toPromise().then(res => {
  //     return res;
  //   }).catch(error => {
  //     console.error('Error:', error);
  //     throw error;
  //   });
  //   return resp;
  // }

  // async updateMarks(sno: number, marks: number): Promise<void> {
  //   const endpoint = `/update/${sno}/${marks}`;
  //   try {
  //     await this.http.put<void>(this.mainUrl + endpoint, {}).toPromise();
  //   } catch (error) {
  //     console.error('Error:', error);
  //     return error;
  //   }
  // }
}
