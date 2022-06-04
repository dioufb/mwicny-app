/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrayertimes = /* GraphQL */ `
  query GetPrayertimes($id: ID!) {
    getPrayertimes(id: $id) {
      id
      fajr
      dhur
      asr
      maghrib
      isha
      audittrail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPrayertimess = /* GraphQL */ `
  query ListPrayertimess(
    $filter: ModelPrayertimesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrayertimess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fajr
        dhur
        asr
        maghrib
        isha
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrayertimes = /* GraphQL */ `
  query SyncPrayertimes(
    $filter: ModelPrayertimesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrayertimes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fajr
        dhur
        asr
        maghrib
        isha
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMembers = /* GraphQL */ `
  query GetMembers($id: ID!) {
    getMembers(id: $id) {
      id
      firstname
      lastname
      email
      phonenumber
      address
      preferences
      active
      audittrail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMemberss = /* GraphQL */ `
  query ListMemberss(
    $filter: ModelMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        email
        phonenumber
        address
        preferences
        active
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMembers = /* GraphQL */ `
  query SyncMembers(
    $filter: ModelMembersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstname
        lastname
        email
        phonenumber
        address
        preferences
        active
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getScreens = /* GraphQL */ `
  query GetScreens($id: ID!) {
    getScreens(id: $id) {
      id
      name
      location
      active
      audittrail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listScreenss = /* GraphQL */ `
  query ListScreenss(
    $filter: ModelScreensFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScreenss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        active
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncScreens = /* GraphQL */ `
  query SyncScreens(
    $filter: ModelScreensFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncScreens(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        location
        active
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlaylists = /* GraphQL */ `
  query GetPlaylists($id: ID!) {
    getPlaylists(id: $id) {
      id
      name
      description
      active
      audittrail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PlaylistsAssets {
        items {
          id
          playlistsID
          assetsID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          playlists {
            id
            name
            description
            active
            audittrail
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          assets {
            id
            url
            active
            description
            displaytime
            audittrail
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listPlaylistss = /* GraphQL */ `
  query ListPlaylistss(
    $filter: ModelPlaylistsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaylistss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        active
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        PlaylistsAssets {
          items {
            id
            playlistsID
            assetsID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlaylists = /* GraphQL */ `
  query SyncPlaylists(
    $filter: ModelPlaylistsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlaylists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        active
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        PlaylistsAssets {
          items {
            id
            playlistsID
            assetsID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAssets = /* GraphQL */ `
  query GetAssets($id: ID!) {
    getAssets(id: $id) {
      id
      url
      active
      description
      displaytime
      audittrail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      playlistss {
        items {
          id
          playlistsID
          assetsID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          playlists {
            id
            name
            description
            active
            audittrail
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          assets {
            id
            url
            active
            description
            displaytime
            audittrail
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listAssetss = /* GraphQL */ `
  query ListAssetss(
    $filter: ModelAssetsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        active
        description
        displaytime
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        playlistss {
          items {
            id
            playlistsID
            assetsID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAssets = /* GraphQL */ `
  query SyncAssets(
    $filter: ModelAssetsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        url
        active
        description
        displaytime
        audittrail
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        playlistss {
          items {
            id
            playlistsID
            assetsID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlaylistsAssets = /* GraphQL */ `
  query SyncPlaylistsAssets(
    $filter: ModelPlaylistsAssetsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlaylistsAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        playlistsID
        assetsID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        playlists {
          id
          name
          description
          active
          audittrail
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          PlaylistsAssets {
            nextToken
            startedAt
          }
        }
        assets {
          id
          url
          active
          description
          displaytime
          audittrail
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          playlistss {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
