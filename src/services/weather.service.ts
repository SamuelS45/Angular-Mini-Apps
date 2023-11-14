import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { resolve } from 'path';
// import { rejects } from 'assert';
// import { response } from 'express';


// const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat={${loc.lat}}&lon={${loc.lon}}&appid={5430d7c0f303b5778debb80cc9b05fe0}`

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  // loc:number[] = [] 
  
  constructor(private httpClient:HttpClient) { 
    
  }
  
  // getLocation():Promise<any>{
  //   const loc = new Promise((resolve, reject)=>{
  //     navigator.geolocation.getCurrentPosition(res=>{
  //       resolve({lon: res.coords.longitude, lat: res.coords.latitude})
  //       reject("Wrong")
  //     })
  //   })
  //   return loc
  // }

  gteIcon(icon:string){
    return this.httpClient.get(`https://openweathermap.org/img/wn/${icon}.png`)
  }
  getWeather(city:string){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2bc55aa422a1ece0849490877b884fa`)
  }

}
