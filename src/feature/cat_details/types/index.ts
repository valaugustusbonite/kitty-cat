export interface CatDetailsInfo {
    id: string;
    width: number;
    height: number;
    url: string;
    breeds: Breed[];
}

interface Breed {
    weight: Weight;
    id: string;
    name: string;
    temperament: string;
    origin: string;
    countryCodes: string;
    countryCode: string;
    lifeSpan: number;
    wikipediaURL: string;
}

interface Weight {
    imperial: string;
    metric: string
}