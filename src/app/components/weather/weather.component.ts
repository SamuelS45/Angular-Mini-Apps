import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent{
  
  city!:string
  weatherData:any
  iconData:any 
  constructor(private weatherServices:WeatherService){}

  ngOnInit(){
    // this.city =''
  }
  // loadIcon(){
  //     // this.weatherServices.gteIcon(this.weatherData.weather[0].icon).subscribe(data=>{
  //     //     this.iconData = data;
  //     //     console.log(data)
  //     //   })
  //     // }
  //   }
  loadWeather(){
      this.weatherServices.getWeather(this.city).subscribe(data=>{
        this.weatherData = data;
        this.iconData = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
      console.log(data);
      // this.loadIcon
    })
    // console.log(this.iconData)
  }
  
  
}
