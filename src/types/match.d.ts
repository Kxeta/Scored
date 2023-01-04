import { GROUP } from "./group"
import { STAGE } from "./stage"
import { ROUND } from './round';
import { TEAM } from "./team";
import { STATS } from './stats';
import { VENUE } from './venue';

export type MATCH_EVENTS = {
    team_id: number,
    type: string,
    player_id: number,
    player_name: string,
    related_player_id: number|null,
    related_player_name: string|null,
    minute: number,
    extra_minute: number|null,
    reason: string|null,
    injured: bool,
    own_goal: bool,
    penalty: bool,
    result: string
 }

export type MATCH_STATISTICS = {
    team_id: number,
    team_name: string,
    fouls: number,
    injuries: number,
    corners: number,
    offsides: number,
    shots_total: number,
    shots_on_target: null,
    shots_off_target: number,
    shots_blocked: number,
    possessiontime: number,
    possessionpercent: number,
    yellowcards: number,
    yellowredcards: number,
    redcards: number,
    substitutions: number,
    goal_kick: number,
    goal_attempts: number,
    free_kick: number,
    throw_in: number,
    ball_safe: number,
    goals: number,
    penalties: number,
    attacks: number,
    dangerous_attacks: number
}


// Missing adding types for lineups for this project because it won't be used for it.
export type MATCH = {
    match_id: number,
    status_code: number,
    status: string,
    match_start: string,
    match_start_iso: string,
    minute: number|null,
    league_id: number,
    season_id: number,
    stage: STAGE,
    group: GROUP,
    round: ROUND,
    referee_id: number,
    home_team: TEAM,
    away_team: TEAM,
    stats: STATS,
    venue: VENUE,
    match_events: MATCH_EVENTS[],
    match_statistics: [MATCH_STATISTICS, MATCH_STATISTICS]
}

/* MATCHES

    {
   "query":{
      "apikey":"ce204da0-5955-11ed-9fec-ad8fbdb0ae2d",
      "season_id":"352"
   },
   "data":[
      {
         "match_id":136906,
         "status_code":3,
         "status":"finished",
         "match_start":"2020-09-12 11:30:00",
         "match_start_iso":"2020-09-12T11:30:00+00:00",
         "minute":null,
         "league_id":237,
         "season_id":352,
         "stage":{
            "stage_id":1,
            "name":"Regular Season"
         },
         "group":{
            "group_id":103,
            "group_name":"Premier League"
         },
         "round":{
            "round_id":17514,
            "name":"1",
            "is_current":null
         },
         "referee_id":191,
         "home_team":{
            "team_id":12429,
            "name":"Fulham FC",
            "short_code":"FUL",
            "common_name":"Fulham (R)",
            "logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/6214.png",
            "country":{
               "country_id":42,
               "name":"England",
               "country_code":"en",
               "continent":"Europe"
            }
         },
         "away_team":{
            "team_id":2522,
            "name":"Arsenal FC",
            "short_code":"ARS",
            "common_name":"",
            "logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/18.png",
            "country":{
               "country_id":42,
               "name":"England",
               "country_code":"en",
               "continent":"Europe"
            }
         },
         "stats":{
            "home_score":0,
            "away_score":3,
            "ht_score":"0-1",
            "ft_score":"0-3",
            "et_score":null,
            "ps_score":null
         },
         "venue":{
            "venue_id":1232,
            "name":"Craven Cottage",
            "capacity":25700,
            "city":"London",
            "country_id":42
         }
      }
   ]
}
*/

/* MATCH
    {
   "query":{
      "apikey":"ce204da0-5955-11ed-9fec-ad8fbdb0ae2d",
      "season_id":"352"
   },
   "data":{
      "match_id":136906,
      "league_id":237,
      "round":{
         "round_id":17514,
         "name":"1",
         "is_current":null
      },
      "referee_id":191,
      "season_id":352,
      "stage":{
         "stage_id":1,
         "name":"Regular Season"
      },
      "group":{
         "group_id":103,
         "group_name":"Premier League"
      },
      "status_code":3,
      "match_start":"2020-09-12 11:30:00",
      "match_start_iso":"2020-09-12T11:30:00+00:00",
      "minute":null,
      "status":"finished",
      "stats":{
         "ht_score":"0-1",
         "ft_score":"0-3",
         "et_score":null,
         "ps_score":null
      },
      "home_team":{
         "team_id":12294,
         "name":"Fulham FC",
         "short_code":"FUL",
         "common_name":"Fulham",
         "logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/262.png",
         "country":{
            "country_id":42,
            "name":"England",
            "country_code":"en",
            "continent":"Europe"
         }
      },
      "away_team":{
         "team_id":2522,
         "name":"Arsenal FC",
         "short_code":"ARS",
         "common_name":"",
         "logo":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/teams\/100\/18.png",
         "country":{
            "country_id":42,
            "name":"England",
            "country_code":"en",
            "continent":"Europe"
         }
      },
      "match_events":[
         {
            "team_id":2522,
            "type":"goal",
            "player_id":2913,
            "player_name":"Lacazette, Alexandre",
            "related_player_id":null,
            "related_player_name":null,
            "minute":8,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":"0-1"
         },
         {
            "team_id":12429,
            "type":"yellowcard",
            "player_id":10922,
            "player_name":"Hector, Michael",
            "related_player_id":null,
            "related_player_name":null,
            "minute":26,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":2522,
            "type":"yellowcard",
            "player_id":2914,
            "player_name":"Aubameyang, Pierre-Emerick",
            "related_player_id":null,
            "related_player_name":null,
            "minute":39,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":2522,
            "type":"goal",
            "player_id":4273,
            "player_name":"Magalhaes, Gabriel",
            "related_player_id":null,
            "related_player_name":"Willian",
            "minute":49,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":"0-2"
         },
         {
            "team_id":2522,
            "type":"yellowcard",
            "player_id":3572,
            "player_name":"Bellerin, Hector",
            "related_player_id":null,
            "related_player_name":null,
            "minute":55,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":2522,
            "type":"goal",
            "player_id":2914,
            "player_name":"Aubameyang, Pierre-Emerick",
            "related_player_id":null,
            "related_player_name":"Willian",
            "minute":57,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":"0-3"
         },
         {
            "team_id":12429,
            "type":"yellowcard",
            "player_id":3124,
            "player_name":"Cairney, Tom",
            "related_player_id":null,
            "related_player_name":null,
            "minute":61,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":12429,
            "type":"substitution",
            "player_id":3125,
            "player_name":"Kamara, Aboubakar",
            "related_player_id":3126,
            "related_player_name":"Mitrovic, Aleksandar",
            "minute":63,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":12429,
            "type":"substitution",
            "player_id":10924,
            "player_name":"Kebano, Neeskens",
            "related_player_id":226,
            "related_player_name":"Zambo Anguissa, Andre-Frank",
            "minute":63,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":2522,
            "type":"injury",
            "player_id":2911,
            "player_name":"Xhaka, Granit",
            "related_player_id":null,
            "related_player_name":null,
            "minute":74,
            "extra_minute":null,
            "reason":null,
            "injured":"1",
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":12429,
            "type":"substitution",
            "player_id":10926,
            "player_name":"Onomah, Joshua",
            "related_player_id":2999,
            "related_player_name":"Reid, Bobby",
            "minute":75,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":2522,
            "type":"substitution",
            "player_id":2958,
            "player_name":"Willian",
            "related_player_id":162,
            "related_player_name":"Pepe, Nicolas",
            "minute":76,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":2522,
            "type":"back from injury",
            "player_id":2911,
            "player_name":"Xhaka, Granit",
            "related_player_id":null,
            "related_player_name":null,
            "minute":76,
            "extra_minute":null,
            "reason":null,
            "injured":"0",
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":2522,
            "type":"substitution",
            "player_id":2911,
            "player_name":"Xhaka, Granit",
            "related_player_id":3140,
            "related_player_name":"Ceballos, Dani",
            "minute":79,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         },
         {
            "team_id":2522,
            "type":"substitution",
            "player_id":2913,
            "player_name":"Lacazette, Alexandre",
            "related_player_id":4158,
            "related_player_name":"Nketiah, Edward",
            "minute":86,
            "extra_minute":null,
            "reason":null,
            "injured":null,
            "own_goal":false,
            "penalty":false,
            "result":null
         }
      ],
      "match_statistics":[
         {
            "team_id":12429,
            "team_name":"Fulham FC",
            "fouls":12,
            "injuries":0,
            "corners":2,
            "offsides":2,
            "shots_total":5,
            "shots_on_target":null,
            "shots_off_target":2,
            "shots_blocked":1,
            "possessiontime":null,
            "possessionpercent":null,
            "yellowcards":2,
            "yellowredcards":0,
            "redcards":0,
            "substitutions":3,
            "goal_kick":4,
            "goal_attempts":4,
            "free_kick":14,
            "throw_in":17,
            "ball_safe":43,
            "goals":0,
            "penalties":0,
            "attacks":28,
            "dangerous_attacks":29
         },
         {
            "team_id":2522,
            "team_name":"Arsenal FC",
            "fouls":12,
            "injuries":1,
            "corners":3,
            "offsides":2,
            "shots_total":14,
            "shots_on_target":null,
            "shots_off_target":3,
            "shots_blocked":4,
            "possessiontime":null,
            "possessionpercent":null,
            "yellowcards":2,
            "yellowredcards":0,
            "redcards":0,
            "substitutions":3,
            "goal_kick":3,
            "goal_attempts":10,
            "free_kick":14,
            "throw_in":22,
            "ball_safe":43,
            "goals":3,
            "penalties":0,
            "attacks":21,
            "dangerous_attacks":36
         }
      ],
      "lineups":[
         {
            "team_id":12429,
            "formation":"4-2-3-1",
            "formation_confirmed":1,
            "players":[
               {
                  "player_id":10921,
                  "firstname":"Marek",
                  "lastname":"Rodak",
                  "birthday":"1996-12-13",
                  "age":26,
                  "weight":69,
                  "height":194,
                  "img":"",
                  "country":{
                     "country_id":110,
                     "name":"Slovakia",
                     "country_code":"sk",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":12,
                     "position":"G",
                     "order":1
                  }
               },
               {
                  "player_id":3118,
                  "firstname":"Denis",
                  "lastname":"Odoi",
                  "birthday":"1988-05-27",
                  "age":34,
                  "weight":71,
                  "height":178,
                  "img":"",
                  "country":{
                     "country_id":21,
                     "name":"Belgium",
                     "country_code":"be",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":4,
                     "position":"D",
                     "order":2
                  }
               },
               {
                  "player_id":10922,
                  "firstname":"Michael Anthony James",
                  "lastname":"Hector",
                  "birthday":"1992-07-19",
                  "age":30,
                  "weight":82,
                  "height":193,
                  "img":"",
                  "country":{
                     "country_id":64,
                     "name":"Jamaica",
                     "country_code":"jm",
                     "continent":"North America"
                  },
                  "detailed":{
                     "number":3,
                     "position":"D",
                     "order":3
                  }
               },
               {
                  "player_id":3362,
                  "firstname":"Timothy Michael",
                  "lastname":"Ream",
                  "birthday":"1987-10-05",
                  "age":35,
                  "weight":79,
                  "height":186,
                  "img":"",
                  "country":{
                     "country_id":125,
                     "name":"USA",
                     "country_code":"us",
                     "continent":"North America"
                  },
                  "detailed":{
                     "number":13,
                     "position":"D",
                     "order":4
                  }
               },
               {
                  "player_id":3121,
                  "firstname":"Joseph Edward",
                  "lastname":"Bryan",
                  "birthday":"1993-09-17",
                  "age":29,
                  "weight":75,
                  "height":173,
                  "img":"",
                  "country":{
                     "country_id":106,
                     "name":"Scotland",
                     "country_code":"s",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":23,
                     "position":"D",
                     "order":5
                  }
               },
               {
                  "player_id":3516,
                  "firstname":"Harrison",
                  "lastname":"Reed",
                  "birthday":null,
                  "age":null,
                  "weight":null,
                  "height":null,
                  "img":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/players\/50\/26986.png",
                  "country":null,
                  "detailed":{
                     "number":21,
                     "position":"M",
                     "order":6
                  }
               },
               {
                  "player_id":3124,
                  "firstname":"Thomas",
                  "lastname":"Cairney",
                  "birthday":"1991-01-20",
                  "age":31,
                  "weight":83,
                  "height":185,
                  "img":"",
                  "country":{
                     "country_id":106,
                     "name":"Scotland",
                     "country_code":"s",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":10,
                     "position":"M",
                     "order":7
                  }
               },
               {
                  "player_id":10924,
                  "firstname":"Neeskens",
                  "lastname":"Kebano",
                  "birthday":null,
                  "age":null,
                  "weight":65,
                  "height":170,
                  "img":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/players\/50\/11294.png",
                  "country":null,
                  "detailed":{
                     "number":7,
                     "position":"M",
                     "order":8
                  }
               },
               {
                  "player_id":10926,
                  "firstname":"Joshua",
                  "lastname":"Onomah",
                  "birthday":null,
                  "age":null,
                  "weight":null,
                  "height":null,
                  "img":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/players\/50\/26985.png",
                  "country":null,
                  "detailed":{
                     "number":25,
                     "position":"M",
                     "order":9
                  }
               },
               {
                  "player_id":3127,
                  "firstname":"Ivan Ricardo",
                  "lastname":"Neves Abreu Cavaleiro",
                  "birthday":"1993-10-18",
                  "age":29,
                  "weight":72,
                  "height":175,
                  "img":"",
                  "country":{
                     "country_id":98,
                     "name":"Portugal",
                     "country_code":"pt",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":17,
                     "position":"F",
                     "order":10
                  }
               },
               {
                  "player_id":3125,
                  "firstname":"Aboubakar",
                  "lastname":"Kamara",
                  "birthday":"1995-03-07",
                  "age":27,
                  "weight":81,
                  "height":177,
                  "img":"",
                  "country":{
                     "country_id":46,
                     "name":"France",
                     "country_code":"fr",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":47,
                     "position":"F",
                     "order":11
                  }
               }
            ]
         },
         {
            "team_id":2522,
            "formation":"3-4-3",
            "formation_confirmed":1,
            "players":[
               {
                  "player_id":2905,
                  "firstname":"Bernd",
                  "lastname":"Leno",
                  "birthday":"1992-03-04",
                  "age":30,
                  "weight":83,
                  "height":190,
                  "img":"",
                  "country":{
                     "country_id":48,
                     "name":"Germany",
                     "country_code":"de",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":1,
                     "position":"G",
                     "order":1
                  }
               },
               {
                  "player_id":3573,
                  "firstname":"Rob",
                  "lastname":"Holding",
                  "birthday":null,
                  "age":null,
                  "weight":null,
                  "height":null,
                  "img":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/players\/50\/22739.png",
                  "country":null,
                  "detailed":{
                     "number":16,
                     "position":"D",
                     "order":2
                  }
               },
               {
                  "player_id":4273,
                  "firstname":"Gabriel",
                  "lastname":"dos Santos Magalhaes",
                  "birthday":"1997-12-19",
                  "age":25,
                  "weight":78,
                  "height":190,
                  "img":"",
                  "country":{
                     "country_id":46,
                     "name":"France",
                     "country_code":"fr",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":6,
                     "position":"D",
                     "order":3
                  }
               },
               {
                  "player_id":3520,
                  "firstname":"Kieran",
                  "lastname":"Tierney",
                  "birthday":null,
                  "age":null,
                  "weight":null,
                  "height":null,
                  "img":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/players\/50\/22738.png",
                  "country":null,
                  "detailed":{
                     "number":3,
                     "position":"D",
                     "order":4
                  }
               },
               {
                  "player_id":3572,
                  "firstname":"Hector",
                  "lastname":"Bellerin Moruno",
                  "birthday":"1995-03-19",
                  "age":27,
                  "weight":74,
                  "height":178,
                  "img":"",
                  "country":{
                     "country_id":113,
                     "name":"Spain",
                     "country_code":"es",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":2,
                     "position":"D",
                     "order":5
                  }
               },
               {
                  "player_id":7,
                  "firstname":"Mohamed Naser",
                  "lastname":"Elneny",
                  "birthday":"1992-07-11",
                  "age":30,
                  "weight":74,
                  "height":181,
                  "img":"",
                  "country":{
                     "country_id":40,
                     "name":"Egypt",
                     "country_code":"eg",
                     "continent":"Africa"
                  },
                  "detailed":{
                     "number":25,
                     "position":"M",
                     "order":6
                  }
               },
               {
                  "player_id":2911,
                  "firstname":"Granit",
                  "lastname":"Xhaka",
                  "birthday":"1992-09-27",
                  "age":30,
                  "weight":82,
                  "height":183,
                  "img":"",
                  "country":{
                     "country_id":115,
                     "name":"Switzerland",
                     "country_code":"ch",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":34,
                     "position":"M",
                     "order":7
                  }
               },
               {
                  "player_id":2906,
                  "firstname":"Ainsley Cory",
                  "lastname":"Maitland-Niles",
                  "birthday":"1997-08-29",
                  "age":25,
                  "weight":71,
                  "height":177,
                  "img":"",
                  "country":{
                     "country_id":42,
                     "name":"England",
                     "country_code":"en",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":15,
                     "position":"M",
                     "order":8
                  }
               },
               {
                  "player_id":2958,
                  "firstname":"Willian",
                  "lastname":"Borges da Silva",
                  "birthday":"1988-08-09",
                  "age":34,
                  "weight":77,
                  "height":175,
                  "img":"",
                  "country":{
                     "country_id":25,
                     "name":"Brazil",
                     "country_code":"br",
                     "continent":"South America"
                  },
                  "detailed":{
                     "number":12,
                     "position":"F",
                     "order":9
                  }
               },
               {
                  "player_id":2913,
                  "firstname":"Alexandre",
                  "lastname":"Lacazette",
                  "birthday":"1991-05-28",
                  "age":31,
                  "weight":73,
                  "height":175,
                  "img":"",
                  "country":{
                     "country_id":46,
                     "name":"France",
                     "country_code":"fr",
                     "continent":"Europe"
                  },
                  "detailed":{
                     "number":9,
                     "position":"F",
                     "order":10
                  }
               },
               {
                  "player_id":2914,
                  "firstname":"Pierre-Emerick",
                  "lastname":"Aubameyang",
                  "birthday":null,
                  "age":null,
                  "weight":80,
                  "height":187,
                  "img":"https:\/\/cdn.sportdataapi.com\/images\/soccer\/players\/50\/489.png",
                  "country":null,
                  "detailed":{
                     "number":14,
                     "position":"F",
                     "order":11
                  }
               }
            ]
         }
      ],
      "venue":{
         "venue_id":1232,
         "name":"Craven Cottage",
         "capacity":25700,
         "city":"London",
         "country_id":42
      }
   }
}
*/