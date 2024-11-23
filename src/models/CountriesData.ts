export interface ILanguage {
  name: string;
}

export interface IContinent {
  name: string;
}

export interface ICountry {
  name: string;
  capital: string;
  languages: ILanguage[];
  continent: IContinent;
}

export interface ICountriesData {
  countries: ICountry[];
}
