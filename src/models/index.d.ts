import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Members {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: string | null;
  readonly emmergencycontact?: string | null;
  readonly creationdatetime?: string | null;
  readonly active?: boolean | null;
  constructor(init: ModelInit<Members>);
  static copyOf(source: Members, mutator: (draft: MutableModel<Members>) => MutableModel<Members> | void): Members;
}

export declare class PrayerTimes {
  readonly id: string;
  readonly fadjr?: string | null;
  readonly dhur?: string | null;
  readonly asr?: string | null;
  readonly maghrib?: string | null;
  readonly isha?: string | null;
  readonly jumah?: string | null;
  constructor(init: ModelInit<PrayerTimes>);
  static copyOf(source: PrayerTimes, mutator: (draft: MutableModel<PrayerTimes>) => MutableModel<PrayerTimes> | void): PrayerTimes;
}

export declare class ScreenContent {
  readonly id: string;
  readonly associationdate?: string | null;
  readonly associatedby?: string | null;
  readonly playlistID: string;
  readonly screensID: string;
  constructor(init: ModelInit<ScreenContent>);
  static copyOf(source: ScreenContent, mutator: (draft: MutableModel<ScreenContent>) => MutableModel<ScreenContent> | void): ScreenContent;
}

export declare class PlaylistContent {
  readonly id: string;
  readonly playlistid?: number | null;
  readonly assetid?: number | null;
  readonly associationdate?: string | null;
  readonly associatedby?: string | null;
  readonly playlistID: string;
  readonly assestss?: (AssestsPlaylistContent | null)[] | null;
  constructor(init: ModelInit<PlaylistContent>);
  static copyOf(source: PlaylistContent, mutator: (draft: MutableModel<PlaylistContent>) => MutableModel<PlaylistContent> | void): PlaylistContent;
}

export declare class AssestsPlaylistContent {
  readonly id: string;
  readonly assests: Assests;
  readonly playlistcontent: PlaylistContent;
  constructor(init: ModelInit<AssestsPlaylistContent>);
  static copyOf(source: AssestsPlaylistContent, mutator: (draft: MutableModel<AssestsPlaylistContent>) => MutableModel<AssestsPlaylistContent> | void): AssestsPlaylistContent;
}

export declare class Assests {
  readonly id: string;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly uploaddate?: string | null;
  readonly active?: boolean | null;
  readonly uploadedby?: string | null;
  readonly uploadedfrom?: string | null;
  readonly modifeddate?: string | null;
  readonly modifyby?: string | null;
  readonly AssestsPlaylistContents?: (AssestsPlaylistContent | null)[] | null;
  constructor(init: ModelInit<Assests>);
  static copyOf(source: Assests, mutator: (draft: MutableModel<Assests>) => MutableModel<Assests> | void): Assests;
}

export declare class Playlist {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly creationdate?: string | null;
  readonly active?: boolean | null;
  readonly createdby?: string | null;
  readonly lastmodifeddate?: string | null;
  readonly lastmodifiedby?: string | null;
  readonly PlaylistContents_Rel?: (PlaylistContent | null)[] | null;
  readonly ScreenContents?: (ScreenContent | null)[] | null;
  constructor(init: ModelInit<Playlist>);
  static copyOf(source: Playlist, mutator: (draft: MutableModel<Playlist>) => MutableModel<Playlist> | void): Playlist;
}

export declare class Screens {
  readonly id: string;
  readonly screen_name?: string | null;
  readonly screen_type?: string | null;
  readonly scren_interface?: string | null;
  readonly screen_location?: string | null;
  readonly screen_masjid?: string | null;
  readonly screen_creationdatetime?: string | null;
  readonly ScreenContents?: (ScreenContent | null)[] | null;
  constructor(init: ModelInit<Screens>);
  static copyOf(source: Screens, mutator: (draft: MutableModel<Screens>) => MutableModel<Screens> | void): Screens;
}