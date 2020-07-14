export class WeatherModel {
    constructor(
        public location?: Location,
        public current?: Current,
        public forecast?: Forecast,
        public day?: string,
        public icon?: string,         
    ) {}
}
export class HistoricItem{
    constructor(
        public periodsDay?: string,
        public temp_c?: string,
        public icon?: string){}
}
export class WeatherForecastModel {
    constructor(
        public location?: Location,      
        public forecast?: Forecast          
    ) {}
}

export class Location {
    constructor(
        public name: string,
        public localtime?: string
    ) {}
}

export class Current {
    constructor(
        public temp_c?: string,
        public wind_mph?: number,
        public humidity?: number,
        public condition?: Condition,
        public is_day?: boolean) {}
}

export class Condition {
    constructor(
        public text?: string,
        public icon?: string) {}
}

export class Forecast {
    constructor(public forecastday?: Forecastday) { }
}

export class Forecastday {
    constructor(public forecastday?: Array<ForecastItem>){}
}
export class ForecastItem {
    constructor(
        public day?: Day,
        public astro?: Astro,
        public hour?: Array<Hour>) {}
}
export class Day {
    constructor(
        public maxtemp_c?: number,
        public mintemp_c?: number,
        public condition?: Condition){}
}

export class Astro {
    constructor(
        public sunrise?: string, 
        public sunset?: string){}
}

export class Hour {
    constructor(
        public time: string,
        public temp_c: number,
        public condition: Condition,
        public is_day: boolean      
    ) { }
}