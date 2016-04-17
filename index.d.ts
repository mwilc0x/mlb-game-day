export interface Batting {
    hr: string;
    d: string;
    da: string;
    so: string;
    batter: Batter[];
    h: string;
    text_data_es: string;
    note_es: string;
    text_data: string;
    obp: string;
    rbi: string;
    lob: string;
    t: string;
    r: string;
    team_flag: string;
    ab: string;
    po: string;
    slg: string;
    avg: string;
    bb: string;
    note: string;
    ops: string;
}

export interface Batter {
    hr: string;
    sac: string;
    name_display_first_last: string;
    s_h: string;
    s_hr: string;
    s_rbi: string;
    pos: string;
    id: string;
    rbi: string;
    bo: string;
    lob: string;
    name: string;
    slg: string;
    avg: string;
    bb: string;
    fldg: string;
    ops: string;
    hbp: string;
    d: string;
    e: string;
    so: string;
    a: string;
    s_so: string;
    sf: string;
    h: string;
    cs: string;
    obp: string;
    s_bb: string;
    s_r: string;
    t: string;
    ao: string;
    r: string;
    sb: string;
    po: string;
    ab: string;
    go: string;
}

export interface Pitcher {
    hr: string;
    s_er: string;
    np: string;
    name_display_first_last: string;
    s_h: string;
    era: string;
    game_score: string;
    bs: string;
    pos: string;
    id: string;
    name: string;
    bf: string;
    sv: string;
    bb: string;
    hld: string;
    so: string;
    s_so: string;
    l: string;
    h: string;
    s_ip: string;
    w: string;
    s_bb: string;
    s_r: string;
    s: string;
    r: string;
    er: string;
    out: string;
}

export interface Pitching {
    hr: string;
    so: string;
    r: string;
    pitcher: Pitcher[];
    bf: string;
    era: string;
    team_flag: string;
    bb: string;
    er: string;
    h: string;
    out: string;
}

export interface InningLineScore {
    home: string;
    away: string;
    inning: string;
}

export interface LineScore {
    home_team_runs: string;
    home_team_errors: string;
    home_team_hits: string;
    inning_line_score: InningLineScore[];
    away_team_errors: string;
    away_team_runs: string;
    away_team_hits: string;
}

export interface BoxScore {
    home_sname: string;
    away_fname: string;
    game_info: string;
    home_loss: string;
    venue_name: string;
    linescore: LineScore;
    home_sport_code: string;
    away_wins: string;
    game_pk: string;
    status_ind: string;
    date: string;
    pitching: Pitching[];
    home_id: string;
    away_loss: string;
    game_info_es: string;
    batting: Batting[];
    away_sname: string;
    game_id: string;
    home_team_code: string;
    venue_id: string;
    home_wins: string;
    away_team_code: string;
    away_id: string;
    home_fname: string;
}

export declare const gameIds: (date: Date) => Axios.IPromise<string[]>;
export declare const getGameBoxScoreById: (id: string) => Promise<BoxScore>;
export declare const getGameEventsById: (id: string) => Promise<any>;

