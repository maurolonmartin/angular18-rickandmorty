import { Info } from "./api.model";

enum Gender {
    "MALE" = "Male",
    "FEMALE" = "Female",
    "GENDERLESS" = "Genderless",
    "UNKNOWN" = "unknown"
}

export interface LocationInfo {
    name: string;
    url: string;
}

export interface Origin extends LocationInfo{}
export interface Location extends LocationInfo{}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: Gender;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharacterInfo {
    info: Info;
    results: Character[];
}