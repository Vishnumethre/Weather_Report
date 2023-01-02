import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class Weather{
constructor(private http: HttpClient){};
getWeatherdata(cityName:string)
{
    this.http.get(environment.weatherApiBaseUrl,{
        headers:new HttpHeaders().set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderVlaue),
        params:new HttpParams()
        .set('q',cityName).
        set('units','metric').set('mode','json')
    })

}
}