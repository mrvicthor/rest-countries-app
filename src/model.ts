export interface Country {
  ccn3: string;
  name: any;
  population: number;
  region: string;
  capital: string;
  flags: string;
}

export interface GetCountryResult {
  results: Country[];
}

export interface Name {
  common: string;
}
