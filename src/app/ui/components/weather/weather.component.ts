import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any;
  weatherList: any[] = [];
  error: boolean = false;

  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey: string = '7292f194914dcf14d3d7c87d2eed44d7';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDefaultCities();
  }

    loadDefaultCities() {
      const defaultCities = ['London', 'Istanbul', 'Berlin', 'Paris'];
      defaultCities.forEach(city => {
        this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`)
          .subscribe(
            (data: any) => {
              if (!this.weatherList.find(item => item.name === data.name)) {
                this.weatherList.push(data); // Varsayılan şehirleri ekle
              }
            },
            (error) => {
              console.error('Hata:', error);
            }
          );
      });
    }

      searchWeather(city: string = this.city): void {
        if (!city.trim()) return; // Boş arama yapılmasını engellemek için
        this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`)
          .subscribe(
            (data: any) => {
              this.weatherData = data; // Sadece arama sonucunu göster
              this.error = false;
            },
            (error) => {
              console.error('Hata:', error);
              this.error = true;
            }
          );
      }

  getFormattedTime(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString();
  }

  getWeatherIconUrl(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }
}
