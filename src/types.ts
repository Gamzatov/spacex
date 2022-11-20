export interface IResponse {
  active?:boolean
  auto_update?: boolean;
  date_precision?: string;
  date_unix?: number;
  flight_number?: number;
  details?:string;
  id?: string;
  small?: string;
  large?: string;
  campaign?: string;
  launch?: string;
  media?: string;
  recovery?: string;
  date_local?: string;
  presskit?: string;
  webcast?: string;
  youtube_id?: string;
  article?: string;
  wikipedia?: string;
  date_utc?: string;
  crew?: {
    crew?: string;
    role?: string;
  };
  core?: {
    core?: string;
    flight?: number;
    gridfins?: boolean;
    landing_attempt?: true;
  };
  name?: string;
  
  net?: boolean;
  rocket?: string;
  links?: {
    webcast?: string;
    youtube_id?: string;
    wikipedia?: string;
    patch?: {
      small?: string;
      large?: string;
    };
    reddit?: {
      campaign?: string | null;
      launch?: string;
      media?: string | null;
      recovery?: string | null;
      webcast?: string;
      wikipedia?: string;
      youtube_id?: string;
    };
  };
}
