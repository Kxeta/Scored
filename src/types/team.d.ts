import { COUNTRY } from "./country"

export type TEAM = {
    team_id: number,
    name: string,
    short_code: string,
    logo: string,
    country: COUNTRY
}