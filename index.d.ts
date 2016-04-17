export interface Inning {
    num: string;
    bottom: Bottom;
    top: Top;
}

export interface Bottom {
    atbat: AtBat[];
}

export interface Top {
    action: Action;
    atbat: AtBat[];
}

export interface Action {
    home_team_runs: string;
    des: string;
    b: string;
    player: string;
    event_num: string;
    o: string;
    des_es: string;
    event_es: string;
    s: string;
    event: string;
    tfs: string;
    away_team_runs: string;
    tfs_zulu: string;
    putch: string;
}

export interface Pitch {
    start_speed: string;
    des: string;
    sv_id: string;
    pitch_type: string;
    type: string;
    des_es: string;
}

export interface AtBat {
    home_team_runs: string;
    des: string;
    b: string;
    event_num: string;
    b3: string;
    pitcher: string;
    b2: string;
    o: string;
    batter: string;
    des_es: string;
    event_es: string;
    num: string;
    start_tfs_zulu: string;
    s: string;
    event: string;
    b1: string;
    play_guid: string;
    pitch: Pitch[];
    away_team_runs: string;
    start_tfs: string;
}

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

export interface Events {
    inning: Inning[];
    atBat: { pid: string; };
    deck: { pid: string; };
    hole: { pid: string; };
}

export declare const gameIds: (date: Date) => Axios.IPromise<string[]>;
export declare const getGameBoxScoreById: (id: string) => Promise<BoxScore>;
export declare const getGameEventsById: (id: string) => Promise<Events>;

