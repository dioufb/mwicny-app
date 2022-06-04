import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Prayertimes {
  readonly id: string;
  readonly fajr?: string | null;
  readonly dhur?: string | null;
  readonly asr?: string | null;
  readonly maghrib?: string | null;
  readonly isha?: string | null;
  readonly audittrail?: string | null;
  constructor(init: ModelInit<Prayertimes>);
  static copyOf(source: Prayertimes, mutator: (draft: MutableModel<Prayertimes>) => MutableModel<Prayertimes> | void): Prayertimes;
}

export declare class Members {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly phonenumber?: string | null;
  readonly address?: string | null;
  readonly preferences?: string | null;
  readonly active?: boolean | null;
  readonly audittrail?: string | null;
  constructor(init: ModelInit<Members>);
  static copyOf(source: Members, mutator: (draft: MutableModel<Members>) => MutableModel<Members> | void): Members;
}

export declare class Screens {
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly active?: string | null;
  readonly audittrail?: string | null;
  constructor(init: ModelInit<Screens>);
  static copyOf(source: Screens, mutator: (draft: MutableModel<Screens>) => MutableModel<Screens> | void): Screens;
}

export declare class Playlists {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly active?: boolean | null;
  readonly audittrail?: string | null;
  readonly PlaylistsAssets?: (PlaylistsAssets | null)[] | null;
  constructor(init: ModelInit<Playlists>);
  static copyOf(source: Playlists, mutator: (draft: MutableModel<Playlists>) => MutableModel<Playlists> | void): Playlists;
}

export declare class PlaylistsAssets {
  readonly id: string;
  readonly playlists: Playlists;
  readonly assets: Assets;
  constructor(init: ModelInit<PlaylistsAssets>);
  static copyOf(source: PlaylistsAssets, mutator: (draft: MutableModel<PlaylistsAssets>) => MutableModel<PlaylistsAssets> | void): PlaylistsAssets;
}

export declare class Assets {
  readonly id: string;
  readonly url?: string | null;
  readonly active?: boolean | null;
  readonly description?: string | null;
  readonly displaytime?: number | null;
  readonly audittrail?: string | null;
  readonly playlistss?: (PlaylistsAssets | null)[] | null;
  constructor(init: ModelInit<Assets>);
  static copyOf(source: Assets, mutator: (draft: MutableModel<Assets>) => MutableModel<Assets> | void): Assets;
}