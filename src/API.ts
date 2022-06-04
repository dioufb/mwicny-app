/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePrayertimesInput = {
  id?: string | null,
  fajr?: string | null,
  dhur?: string | null,
  asr?: string | null,
  maghrib?: string | null,
  isha?: string | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type ModelPrayertimesConditionInput = {
  fajr?: ModelStringInput | null,
  dhur?: ModelStringInput | null,
  asr?: ModelStringInput | null,
  maghrib?: ModelStringInput | null,
  isha?: ModelStringInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelPrayertimesConditionInput | null > | null,
  or?: Array< ModelPrayertimesConditionInput | null > | null,
  not?: ModelPrayertimesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Prayertimes = {
  __typename: "Prayertimes",
  id: string,
  fajr?: string | null,
  dhur?: string | null,
  asr?: string | null,
  maghrib?: string | null,
  isha?: string | null,
  audittrail?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePrayertimesInput = {
  id: string,
  fajr?: string | null,
  dhur?: string | null,
  asr?: string | null,
  maghrib?: string | null,
  isha?: string | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type DeletePrayertimesInput = {
  id: string,
  _version?: number | null,
};

export type CreateMembersInput = {
  id?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  phonenumber?: string | null,
  address?: string | null,
  preferences?: string | null,
  active?: boolean | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type ModelMembersConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phonenumber?: ModelStringInput | null,
  address?: ModelStringInput | null,
  preferences?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelMembersConditionInput | null > | null,
  or?: Array< ModelMembersConditionInput | null > | null,
  not?: ModelMembersConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Members = {
  __typename: "Members",
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  phonenumber?: string | null,
  address?: string | null,
  preferences?: string | null,
  active?: boolean | null,
  audittrail?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMembersInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  phonenumber?: string | null,
  address?: string | null,
  preferences?: string | null,
  active?: boolean | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type DeleteMembersInput = {
  id: string,
  _version?: number | null,
};

export type CreateScreensInput = {
  id?: string | null,
  name?: string | null,
  location?: string | null,
  active?: string | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type ModelScreensConditionInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  active?: ModelStringInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelScreensConditionInput | null > | null,
  or?: Array< ModelScreensConditionInput | null > | null,
  not?: ModelScreensConditionInput | null,
};

export type Screens = {
  __typename: "Screens",
  id: string,
  name?: string | null,
  location?: string | null,
  active?: string | null,
  audittrail?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateScreensInput = {
  id: string,
  name?: string | null,
  location?: string | null,
  active?: string | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type DeleteScreensInput = {
  id: string,
  _version?: number | null,
};

export type CreateCurrentPlayListInput = {
  id?: string | null,
  playlist?: string | null,
  assests?: string | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type ModelCurrentPlayListConditionInput = {
  playlist?: ModelStringInput | null,
  assests?: ModelStringInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelCurrentPlayListConditionInput | null > | null,
  or?: Array< ModelCurrentPlayListConditionInput | null > | null,
  not?: ModelCurrentPlayListConditionInput | null,
};

export type CurrentPlayList = {
  __typename: "CurrentPlayList",
  id: string,
  playlist?: string | null,
  assests?: string | null,
  audittrail?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCurrentPlayListInput = {
  id: string,
  playlist?: string | null,
  assests?: string | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type DeleteCurrentPlayListInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlaylistsInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  active?: boolean | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type ModelPlaylistsConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelPlaylistsConditionInput | null > | null,
  or?: Array< ModelPlaylistsConditionInput | null > | null,
  not?: ModelPlaylistsConditionInput | null,
};

export type Playlists = {
  __typename: "Playlists",
  id: string,
  name?: string | null,
  description?: string | null,
  active?: boolean | null,
  audittrail?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  PlaylistsAssets?: ModelPlaylistsAssetsConnection | null,
};

export type ModelPlaylistsAssetsConnection = {
  __typename: "ModelPlaylistsAssetsConnection",
  items:  Array<PlaylistsAssets | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PlaylistsAssets = {
  __typename: "PlaylistsAssets",
  id: string,
  playlistsID: string,
  assetsID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  playlists: Playlists,
  assets: Assets,
};

export type Assets = {
  __typename: "Assets",
  id: string,
  url?: string | null,
  active?: boolean | null,
  description?: string | null,
  displaytime?: number | null,
  audittrail?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  playlistss?: ModelPlaylistsAssetsConnection | null,
};

export type UpdatePlaylistsInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  active?: boolean | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type DeletePlaylistsInput = {
  id: string,
  _version?: number | null,
};

export type CreateAssetsInput = {
  id?: string | null,
  url?: string | null,
  active?: boolean | null,
  description?: string | null,
  displaytime?: number | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type ModelAssetsConditionInput = {
  url?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  displaytime?: ModelIntInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelAssetsConditionInput | null > | null,
  or?: Array< ModelAssetsConditionInput | null > | null,
  not?: ModelAssetsConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAssetsInput = {
  id: string,
  url?: string | null,
  active?: boolean | null,
  description?: string | null,
  displaytime?: number | null,
  audittrail?: string | null,
  _version?: number | null,
};

export type DeleteAssetsInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlaylistsAssetsInput = {
  id?: string | null,
  playlistsID: string,
  assetsID: string,
  _version?: number | null,
};

export type ModelPlaylistsAssetsConditionInput = {
  playlistsID?: ModelIDInput | null,
  assetsID?: ModelIDInput | null,
  and?: Array< ModelPlaylistsAssetsConditionInput | null > | null,
  or?: Array< ModelPlaylistsAssetsConditionInput | null > | null,
  not?: ModelPlaylistsAssetsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePlaylistsAssetsInput = {
  id: string,
  playlistsID?: string | null,
  assetsID?: string | null,
  _version?: number | null,
};

export type DeletePlaylistsAssetsInput = {
  id: string,
  _version?: number | null,
};

export type ModelPrayertimesFilterInput = {
  id?: ModelIDInput | null,
  fajr?: ModelStringInput | null,
  dhur?: ModelStringInput | null,
  asr?: ModelStringInput | null,
  maghrib?: ModelStringInput | null,
  isha?: ModelStringInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelPrayertimesFilterInput | null > | null,
  or?: Array< ModelPrayertimesFilterInput | null > | null,
  not?: ModelPrayertimesFilterInput | null,
};

export type ModelPrayertimesConnection = {
  __typename: "ModelPrayertimesConnection",
  items:  Array<Prayertimes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMembersFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phonenumber?: ModelStringInput | null,
  address?: ModelStringInput | null,
  preferences?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelMembersFilterInput | null > | null,
  or?: Array< ModelMembersFilterInput | null > | null,
  not?: ModelMembersFilterInput | null,
};

export type ModelMembersConnection = {
  __typename: "ModelMembersConnection",
  items:  Array<Members | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelScreensFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  active?: ModelStringInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelScreensFilterInput | null > | null,
  or?: Array< ModelScreensFilterInput | null > | null,
  not?: ModelScreensFilterInput | null,
};

export type ModelScreensConnection = {
  __typename: "ModelScreensConnection",
  items:  Array<Screens | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCurrentPlayListFilterInput = {
  id?: ModelIDInput | null,
  playlist?: ModelStringInput | null,
  assests?: ModelStringInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelCurrentPlayListFilterInput | null > | null,
  or?: Array< ModelCurrentPlayListFilterInput | null > | null,
  not?: ModelCurrentPlayListFilterInput | null,
};

export type ModelCurrentPlayListConnection = {
  __typename: "ModelCurrentPlayListConnection",
  items:  Array<CurrentPlayList | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlaylistsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelPlaylistsFilterInput | null > | null,
  or?: Array< ModelPlaylistsFilterInput | null > | null,
  not?: ModelPlaylistsFilterInput | null,
};

export type ModelPlaylistsConnection = {
  __typename: "ModelPlaylistsConnection",
  items:  Array<Playlists | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAssetsFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  displaytime?: ModelIntInput | null,
  audittrail?: ModelStringInput | null,
  and?: Array< ModelAssetsFilterInput | null > | null,
  or?: Array< ModelAssetsFilterInput | null > | null,
  not?: ModelAssetsFilterInput | null,
};

export type ModelAssetsConnection = {
  __typename: "ModelAssetsConnection",
  items:  Array<Assets | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPlaylistsAssetsFilterInput = {
  id?: ModelIDInput | null,
  playlistsID?: ModelIDInput | null,
  assetsID?: ModelIDInput | null,
  and?: Array< ModelPlaylistsAssetsFilterInput | null > | null,
  or?: Array< ModelPlaylistsAssetsFilterInput | null > | null,
  not?: ModelPlaylistsAssetsFilterInput | null,
};

export type CreatePrayertimesMutationVariables = {
  input: CreatePrayertimesInput,
  condition?: ModelPrayertimesConditionInput | null,
};

export type CreatePrayertimesMutation = {
  createPrayertimes?:  {
    __typename: "Prayertimes",
    id: string,
    fajr?: string | null,
    dhur?: string | null,
    asr?: string | null,
    maghrib?: string | null,
    isha?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePrayertimesMutationVariables = {
  input: UpdatePrayertimesInput,
  condition?: ModelPrayertimesConditionInput | null,
};

export type UpdatePrayertimesMutation = {
  updatePrayertimes?:  {
    __typename: "Prayertimes",
    id: string,
    fajr?: string | null,
    dhur?: string | null,
    asr?: string | null,
    maghrib?: string | null,
    isha?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePrayertimesMutationVariables = {
  input: DeletePrayertimesInput,
  condition?: ModelPrayertimesConditionInput | null,
};

export type DeletePrayertimesMutation = {
  deletePrayertimes?:  {
    __typename: "Prayertimes",
    id: string,
    fajr?: string | null,
    dhur?: string | null,
    asr?: string | null,
    maghrib?: string | null,
    isha?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMembersMutationVariables = {
  input: CreateMembersInput,
  condition?: ModelMembersConditionInput | null,
};

export type CreateMembersMutation = {
  createMembers?:  {
    __typename: "Members",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    email?: string | null,
    phonenumber?: string | null,
    address?: string | null,
    preferences?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMembersMutationVariables = {
  input: UpdateMembersInput,
  condition?: ModelMembersConditionInput | null,
};

export type UpdateMembersMutation = {
  updateMembers?:  {
    __typename: "Members",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    email?: string | null,
    phonenumber?: string | null,
    address?: string | null,
    preferences?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMembersMutationVariables = {
  input: DeleteMembersInput,
  condition?: ModelMembersConditionInput | null,
};

export type DeleteMembersMutation = {
  deleteMembers?:  {
    __typename: "Members",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    email?: string | null,
    phonenumber?: string | null,
    address?: string | null,
    preferences?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateScreensMutationVariables = {
  input: CreateScreensInput,
  condition?: ModelScreensConditionInput | null,
};

export type CreateScreensMutation = {
  createScreens?:  {
    __typename: "Screens",
    id: string,
    name?: string | null,
    location?: string | null,
    active?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScreensMutationVariables = {
  input: UpdateScreensInput,
  condition?: ModelScreensConditionInput | null,
};

export type UpdateScreensMutation = {
  updateScreens?:  {
    __typename: "Screens",
    id: string,
    name?: string | null,
    location?: string | null,
    active?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScreensMutationVariables = {
  input: DeleteScreensInput,
  condition?: ModelScreensConditionInput | null,
};

export type DeleteScreensMutation = {
  deleteScreens?:  {
    __typename: "Screens",
    id: string,
    name?: string | null,
    location?: string | null,
    active?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCurrentPlayListMutationVariables = {
  input: CreateCurrentPlayListInput,
  condition?: ModelCurrentPlayListConditionInput | null,
};

export type CreateCurrentPlayListMutation = {
  createCurrentPlayList?:  {
    __typename: "CurrentPlayList",
    id: string,
    playlist?: string | null,
    assests?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCurrentPlayListMutationVariables = {
  input: UpdateCurrentPlayListInput,
  condition?: ModelCurrentPlayListConditionInput | null,
};

export type UpdateCurrentPlayListMutation = {
  updateCurrentPlayList?:  {
    __typename: "CurrentPlayList",
    id: string,
    playlist?: string | null,
    assests?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCurrentPlayListMutationVariables = {
  input: DeleteCurrentPlayListInput,
  condition?: ModelCurrentPlayListConditionInput | null,
};

export type DeleteCurrentPlayListMutation = {
  deleteCurrentPlayList?:  {
    __typename: "CurrentPlayList",
    id: string,
    playlist?: string | null,
    assests?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlaylistsMutationVariables = {
  input: CreatePlaylistsInput,
  condition?: ModelPlaylistsConditionInput | null,
};

export type CreatePlaylistsMutation = {
  createPlaylists?:  {
    __typename: "Playlists",
    id: string,
    name?: string | null,
    description?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PlaylistsAssets?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdatePlaylistsMutationVariables = {
  input: UpdatePlaylistsInput,
  condition?: ModelPlaylistsConditionInput | null,
};

export type UpdatePlaylistsMutation = {
  updatePlaylists?:  {
    __typename: "Playlists",
    id: string,
    name?: string | null,
    description?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PlaylistsAssets?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeletePlaylistsMutationVariables = {
  input: DeletePlaylistsInput,
  condition?: ModelPlaylistsConditionInput | null,
};

export type DeletePlaylistsMutation = {
  deletePlaylists?:  {
    __typename: "Playlists",
    id: string,
    name?: string | null,
    description?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PlaylistsAssets?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateAssetsMutationVariables = {
  input: CreateAssetsInput,
  condition?: ModelAssetsConditionInput | null,
};

export type CreateAssetsMutation = {
  createAssets?:  {
    __typename: "Assets",
    id: string,
    url?: string | null,
    active?: boolean | null,
    description?: string | null,
    displaytime?: number | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlistss?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateAssetsMutationVariables = {
  input: UpdateAssetsInput,
  condition?: ModelAssetsConditionInput | null,
};

export type UpdateAssetsMutation = {
  updateAssets?:  {
    __typename: "Assets",
    id: string,
    url?: string | null,
    active?: boolean | null,
    description?: string | null,
    displaytime?: number | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlistss?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteAssetsMutationVariables = {
  input: DeleteAssetsInput,
  condition?: ModelAssetsConditionInput | null,
};

export type DeleteAssetsMutation = {
  deleteAssets?:  {
    __typename: "Assets",
    id: string,
    url?: string | null,
    active?: boolean | null,
    description?: string | null,
    displaytime?: number | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlistss?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreatePlaylistsAssetsMutationVariables = {
  input: CreatePlaylistsAssetsInput,
  condition?: ModelPlaylistsAssetsConditionInput | null,
};

export type CreatePlaylistsAssetsMutation = {
  createPlaylistsAssets?:  {
    __typename: "PlaylistsAssets",
    id: string,
    playlistsID: string,
    assetsID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlists:  {
      __typename: "Playlists",
      id: string,
      name?: string | null,
      description?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      PlaylistsAssets?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    assets:  {
      __typename: "Assets",
      id: string,
      url?: string | null,
      active?: boolean | null,
      description?: string | null,
      displaytime?: number | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlistss?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type UpdatePlaylistsAssetsMutationVariables = {
  input: UpdatePlaylistsAssetsInput,
  condition?: ModelPlaylistsAssetsConditionInput | null,
};

export type UpdatePlaylistsAssetsMutation = {
  updatePlaylistsAssets?:  {
    __typename: "PlaylistsAssets",
    id: string,
    playlistsID: string,
    assetsID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlists:  {
      __typename: "Playlists",
      id: string,
      name?: string | null,
      description?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      PlaylistsAssets?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    assets:  {
      __typename: "Assets",
      id: string,
      url?: string | null,
      active?: boolean | null,
      description?: string | null,
      displaytime?: number | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlistss?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type DeletePlaylistsAssetsMutationVariables = {
  input: DeletePlaylistsAssetsInput,
  condition?: ModelPlaylistsAssetsConditionInput | null,
};

export type DeletePlaylistsAssetsMutation = {
  deletePlaylistsAssets?:  {
    __typename: "PlaylistsAssets",
    id: string,
    playlistsID: string,
    assetsID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlists:  {
      __typename: "Playlists",
      id: string,
      name?: string | null,
      description?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      PlaylistsAssets?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    assets:  {
      __typename: "Assets",
      id: string,
      url?: string | null,
      active?: boolean | null,
      description?: string | null,
      displaytime?: number | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlistss?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type GetPrayertimesQueryVariables = {
  id: string,
};

export type GetPrayertimesQuery = {
  getPrayertimes?:  {
    __typename: "Prayertimes",
    id: string,
    fajr?: string | null,
    dhur?: string | null,
    asr?: string | null,
    maghrib?: string | null,
    isha?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPrayertimessQueryVariables = {
  filter?: ModelPrayertimesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrayertimessQuery = {
  listPrayertimess?:  {
    __typename: "ModelPrayertimesConnection",
    items:  Array< {
      __typename: "Prayertimes",
      id: string,
      fajr?: string | null,
      dhur?: string | null,
      asr?: string | null,
      maghrib?: string | null,
      isha?: string | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPrayertimesQueryVariables = {
  filter?: ModelPrayertimesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPrayertimesQuery = {
  syncPrayertimes?:  {
    __typename: "ModelPrayertimesConnection",
    items:  Array< {
      __typename: "Prayertimes",
      id: string,
      fajr?: string | null,
      dhur?: string | null,
      asr?: string | null,
      maghrib?: string | null,
      isha?: string | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMembersQueryVariables = {
  id: string,
};

export type GetMembersQuery = {
  getMembers?:  {
    __typename: "Members",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    email?: string | null,
    phonenumber?: string | null,
    address?: string | null,
    preferences?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMemberssQueryVariables = {
  filter?: ModelMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemberssQuery = {
  listMemberss?:  {
    __typename: "ModelMembersConnection",
    items:  Array< {
      __typename: "Members",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      email?: string | null,
      phonenumber?: string | null,
      address?: string | null,
      preferences?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMembersQueryVariables = {
  filter?: ModelMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMembersQuery = {
  syncMembers?:  {
    __typename: "ModelMembersConnection",
    items:  Array< {
      __typename: "Members",
      id: string,
      firstname?: string | null,
      lastname?: string | null,
      email?: string | null,
      phonenumber?: string | null,
      address?: string | null,
      preferences?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetScreensQueryVariables = {
  id: string,
};

export type GetScreensQuery = {
  getScreens?:  {
    __typename: "Screens",
    id: string,
    name?: string | null,
    location?: string | null,
    active?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListScreenssQueryVariables = {
  filter?: ModelScreensFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScreenssQuery = {
  listScreenss?:  {
    __typename: "ModelScreensConnection",
    items:  Array< {
      __typename: "Screens",
      id: string,
      name?: string | null,
      location?: string | null,
      active?: string | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncScreensQueryVariables = {
  filter?: ModelScreensFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncScreensQuery = {
  syncScreens?:  {
    __typename: "ModelScreensConnection",
    items:  Array< {
      __typename: "Screens",
      id: string,
      name?: string | null,
      location?: string | null,
      active?: string | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCurrentPlayListQueryVariables = {
  id: string,
};

export type GetCurrentPlayListQuery = {
  getCurrentPlayList?:  {
    __typename: "CurrentPlayList",
    id: string,
    playlist?: string | null,
    assests?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCurrentPlayListsQueryVariables = {
  filter?: ModelCurrentPlayListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCurrentPlayListsQuery = {
  listCurrentPlayLists?:  {
    __typename: "ModelCurrentPlayListConnection",
    items:  Array< {
      __typename: "CurrentPlayList",
      id: string,
      playlist?: string | null,
      assests?: string | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCurrentPlayListsQueryVariables = {
  filter?: ModelCurrentPlayListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCurrentPlayListsQuery = {
  syncCurrentPlayLists?:  {
    __typename: "ModelCurrentPlayListConnection",
    items:  Array< {
      __typename: "CurrentPlayList",
      id: string,
      playlist?: string | null,
      assests?: string | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlaylistsQueryVariables = {
  id: string,
};

export type GetPlaylistsQuery = {
  getPlaylists?:  {
    __typename: "Playlists",
    id: string,
    name?: string | null,
    description?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PlaylistsAssets?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListPlaylistssQueryVariables = {
  filter?: ModelPlaylistsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlaylistssQuery = {
  listPlaylistss?:  {
    __typename: "ModelPlaylistsConnection",
    items:  Array< {
      __typename: "Playlists",
      id: string,
      name?: string | null,
      description?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      PlaylistsAssets?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlaylistsQueryVariables = {
  filter?: ModelPlaylistsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlaylistsQuery = {
  syncPlaylists?:  {
    __typename: "ModelPlaylistsConnection",
    items:  Array< {
      __typename: "Playlists",
      id: string,
      name?: string | null,
      description?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      PlaylistsAssets?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAssetsQueryVariables = {
  id: string,
};

export type GetAssetsQuery = {
  getAssets?:  {
    __typename: "Assets",
    id: string,
    url?: string | null,
    active?: boolean | null,
    description?: string | null,
    displaytime?: number | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlistss?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListAssetssQueryVariables = {
  filter?: ModelAssetsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssetssQuery = {
  listAssetss?:  {
    __typename: "ModelAssetsConnection",
    items:  Array< {
      __typename: "Assets",
      id: string,
      url?: string | null,
      active?: boolean | null,
      description?: string | null,
      displaytime?: number | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlistss?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAssetsQueryVariables = {
  filter?: ModelAssetsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAssetsQuery = {
  syncAssets?:  {
    __typename: "ModelAssetsConnection",
    items:  Array< {
      __typename: "Assets",
      id: string,
      url?: string | null,
      active?: boolean | null,
      description?: string | null,
      displaytime?: number | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlistss?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlaylistsAssetsQueryVariables = {
  filter?: ModelPlaylistsAssetsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlaylistsAssetsQuery = {
  syncPlaylistsAssets?:  {
    __typename: "ModelPlaylistsAssetsConnection",
    items:  Array< {
      __typename: "PlaylistsAssets",
      id: string,
      playlistsID: string,
      assetsID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlists:  {
        __typename: "Playlists",
        id: string,
        name?: string | null,
        description?: string | null,
        active?: boolean | null,
        audittrail?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        PlaylistsAssets?:  {
          __typename: "ModelPlaylistsAssetsConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
      },
      assets:  {
        __typename: "Assets",
        id: string,
        url?: string | null,
        active?: boolean | null,
        description?: string | null,
        displaytime?: number | null,
        audittrail?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlistss?:  {
          __typename: "ModelPlaylistsAssetsConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
      },
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePrayertimesSubscription = {
  onCreatePrayertimes?:  {
    __typename: "Prayertimes",
    id: string,
    fajr?: string | null,
    dhur?: string | null,
    asr?: string | null,
    maghrib?: string | null,
    isha?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePrayertimesSubscription = {
  onUpdatePrayertimes?:  {
    __typename: "Prayertimes",
    id: string,
    fajr?: string | null,
    dhur?: string | null,
    asr?: string | null,
    maghrib?: string | null,
    isha?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePrayertimesSubscription = {
  onDeletePrayertimes?:  {
    __typename: "Prayertimes",
    id: string,
    fajr?: string | null,
    dhur?: string | null,
    asr?: string | null,
    maghrib?: string | null,
    isha?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMembersSubscription = {
  onCreateMembers?:  {
    __typename: "Members",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    email?: string | null,
    phonenumber?: string | null,
    address?: string | null,
    preferences?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMembersSubscription = {
  onUpdateMembers?:  {
    __typename: "Members",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    email?: string | null,
    phonenumber?: string | null,
    address?: string | null,
    preferences?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMembersSubscription = {
  onDeleteMembers?:  {
    __typename: "Members",
    id: string,
    firstname?: string | null,
    lastname?: string | null,
    email?: string | null,
    phonenumber?: string | null,
    address?: string | null,
    preferences?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateScreensSubscription = {
  onCreateScreens?:  {
    __typename: "Screens",
    id: string,
    name?: string | null,
    location?: string | null,
    active?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScreensSubscription = {
  onUpdateScreens?:  {
    __typename: "Screens",
    id: string,
    name?: string | null,
    location?: string | null,
    active?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScreensSubscription = {
  onDeleteScreens?:  {
    __typename: "Screens",
    id: string,
    name?: string | null,
    location?: string | null,
    active?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCurrentPlayListSubscription = {
  onCreateCurrentPlayList?:  {
    __typename: "CurrentPlayList",
    id: string,
    playlist?: string | null,
    assests?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCurrentPlayListSubscription = {
  onUpdateCurrentPlayList?:  {
    __typename: "CurrentPlayList",
    id: string,
    playlist?: string | null,
    assests?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCurrentPlayListSubscription = {
  onDeleteCurrentPlayList?:  {
    __typename: "CurrentPlayList",
    id: string,
    playlist?: string | null,
    assests?: string | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaylistsSubscription = {
  onCreatePlaylists?:  {
    __typename: "Playlists",
    id: string,
    name?: string | null,
    description?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PlaylistsAssets?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdatePlaylistsSubscription = {
  onUpdatePlaylists?:  {
    __typename: "Playlists",
    id: string,
    name?: string | null,
    description?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PlaylistsAssets?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeletePlaylistsSubscription = {
  onDeletePlaylists?:  {
    __typename: "Playlists",
    id: string,
    name?: string | null,
    description?: string | null,
    active?: boolean | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PlaylistsAssets?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateAssetsSubscription = {
  onCreateAssets?:  {
    __typename: "Assets",
    id: string,
    url?: string | null,
    active?: boolean | null,
    description?: string | null,
    displaytime?: number | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlistss?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateAssetsSubscription = {
  onUpdateAssets?:  {
    __typename: "Assets",
    id: string,
    url?: string | null,
    active?: boolean | null,
    description?: string | null,
    displaytime?: number | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlistss?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteAssetsSubscription = {
  onDeleteAssets?:  {
    __typename: "Assets",
    id: string,
    url?: string | null,
    active?: boolean | null,
    description?: string | null,
    displaytime?: number | null,
    audittrail?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlistss?:  {
      __typename: "ModelPlaylistsAssetsConnection",
      items:  Array< {
        __typename: "PlaylistsAssets",
        id: string,
        playlistsID: string,
        assetsID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        playlists:  {
          __typename: "Playlists",
          id: string,
          name?: string | null,
          description?: string | null,
          active?: boolean | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        assets:  {
          __typename: "Assets",
          id: string,
          url?: string | null,
          active?: boolean | null,
          description?: string | null,
          displaytime?: number | null,
          audittrail?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreatePlaylistsAssetsSubscription = {
  onCreatePlaylistsAssets?:  {
    __typename: "PlaylistsAssets",
    id: string,
    playlistsID: string,
    assetsID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlists:  {
      __typename: "Playlists",
      id: string,
      name?: string | null,
      description?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      PlaylistsAssets?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    assets:  {
      __typename: "Assets",
      id: string,
      url?: string | null,
      active?: boolean | null,
      description?: string | null,
      displaytime?: number | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlistss?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnUpdatePlaylistsAssetsSubscription = {
  onUpdatePlaylistsAssets?:  {
    __typename: "PlaylistsAssets",
    id: string,
    playlistsID: string,
    assetsID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlists:  {
      __typename: "Playlists",
      id: string,
      name?: string | null,
      description?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      PlaylistsAssets?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    assets:  {
      __typename: "Assets",
      id: string,
      url?: string | null,
      active?: boolean | null,
      description?: string | null,
      displaytime?: number | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlistss?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnDeletePlaylistsAssetsSubscription = {
  onDeletePlaylistsAssets?:  {
    __typename: "PlaylistsAssets",
    id: string,
    playlistsID: string,
    assetsID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    playlists:  {
      __typename: "Playlists",
      id: string,
      name?: string | null,
      description?: string | null,
      active?: boolean | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      PlaylistsAssets?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    assets:  {
      __typename: "Assets",
      id: string,
      url?: string | null,
      active?: boolean | null,
      description?: string | null,
      displaytime?: number | null,
      audittrail?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      playlistss?:  {
        __typename: "ModelPlaylistsAssetsConnection",
        items:  Array< {
          __typename: "PlaylistsAssets",
          id: string,
          playlistsID: string,
          assetsID: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};
