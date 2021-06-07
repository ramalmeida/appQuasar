export interface Pont{
    name: string;
}

export interface City{
    name: string;
    pontot: Pont;
}

export interface Stat{
    name: string;
    cities: City;
    sing: string;
}
