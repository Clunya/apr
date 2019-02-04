import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class XxxService {

  
  /**
   * Readonly для свойств и допускает инициализацию только в первый раз.
   */
  readonly paskhalia = {
    
    2015: [3, 12],
    2016: [4, 1],
    2017: [3, 16],
    2018: [3, 8],
    2019: [3, 28],
    2020: [3, 19],
    2021: [4, 2],
    2022: [3, 24],
    2023: [3, 16],
    2024: [4, 5],
    2025: [3, 20],
    2026: [3, 12],
    2027: [4, 2],
    2028: [3, 16],
    2029: [3, 8],
    2030: [3, 28],
    2031: [3, 13],
    2032: [4, 2],
    2033: [3, 24],
    2034: [3, 9],
    2035: [3, 29],
    2036: [3, 20],
    2037: [3, 5],
    2038: [3, 25]
  };

 constructor(private http: HttpClient) { }


  public getPaskhaliaFromJSON(){
    // return this.paskhalia;
    return this.http.get<any>('./assets/paskhalia.json');
    
  }
  
  paskhaliaArray() {
    return this.paskhalia
  }
}
