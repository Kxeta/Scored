export type SEASON = {
    season_id: number,
    name: string,
    is_current: bool,
    country_id: number,
    league_id: number,
    start_date: string,
    end_date: string
}

/*
{
   "query":{
      "apikey":"ce204da0-5955-11ed-9fec-ad8fbdb0ae2d",
      "league_id":"237"
   },
   "data":[
      {
         "season_id":352,
         "name":"20\/21",
         "is_current":0,
         "country_id":42,
         "league_id":237,
         "start_date":"2020-09-11",
         "end_date":"2021-05-24"
      },
      {
         "season_id":359,
         "name":"19\/20",
         "is_current":0,
         "country_id":42,
         "league_id":237,
         "start_date":"2019-08-09",
         "end_date":"2020-07-26"
      },
      {
         "season_id":370,
         "name":"18\/19",
         "is_current":0,
         "country_id":42,
         "league_id":237,
         "start_date":"2018-08-10",
         "end_date":"2019-05-13"
      },
      {
         "season_id":1980,
         "name":"21\/22",
         "is_current":0,
         "country_id":42,
         "league_id":237,
         "start_date":"2021-08-14",
         "end_date":"2022-05-22"
      },
      {
         "season_id":3161,
         "name":"22\/23",
         "is_current":1,
         "country_id":42,
         "league_id":237,
         "start_date":"2022-08-06",
         "end_date":"2023-05-28"
      }
   ]
}
*/