/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrayertimes = /* GraphQL */ `
  mutation CreatePrayertimes(
    $input: CreatePrayertimesInput!
    $condition: ModelPrayertimesConditionInput
  ) {
    createPrayertimes(input: $input, condition: $condition) {
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
export const updatePrayertimes = /* GraphQL */ `
  mutation UpdatePrayertimes(
    $input: UpdatePrayertimesInput!
    $condition: ModelPrayertimesConditionInput
  ) {
    updatePrayertimes(input: $input, condition: $condition) {
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
export const deletePrayertimes = /* GraphQL */ `
  mutation DeletePrayertimes(
    $input: DeletePrayertimesInput!
    $condition: ModelPrayertimesConditionInput
  ) {
    deletePrayertimes(input: $input, condition: $condition) {
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
export const createMembers = /* GraphQL */ `
  mutation CreateMembers(
    $input: CreateMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    createMembers(input: $input, condition: $condition) {
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
export const updateMembers = /* GraphQL */ `
  mutation UpdateMembers(
    $input: UpdateMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    updateMembers(input: $input, condition: $condition) {
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
export const deleteMembers = /* GraphQL */ `
  mutation DeleteMembers(
    $input: DeleteMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    deleteMembers(input: $input, condition: $condition) {
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
export const createScreens = /* GraphQL */ `
  mutation CreateScreens(
    $input: CreateScreensInput!
    $condition: ModelScreensConditionInput
  ) {
    createScreens(input: $input, condition: $condition) {
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
export const updateScreens = /* GraphQL */ `
  mutation UpdateScreens(
    $input: UpdateScreensInput!
    $condition: ModelScreensConditionInput
  ) {
    updateScreens(input: $input, condition: $condition) {
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
export const deleteScreens = /* GraphQL */ `
  mutation DeleteScreens(
    $input: DeleteScreensInput!
    $condition: ModelScreensConditionInput
  ) {
    deleteScreens(input: $input, condition: $condition) {
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
export const createPlaylists = /* GraphQL */ `
  mutation CreatePlaylists(
    $input: CreatePlaylistsInput!
    $condition: ModelPlaylistsConditionInput
  ) {
    createPlaylists(input: $input, condition: $condition) {
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
export const updatePlaylists = /* GraphQL */ `
  mutation UpdatePlaylists(
    $input: UpdatePlaylistsInput!
    $condition: ModelPlaylistsConditionInput
  ) {
    updatePlaylists(input: $input, condition: $condition) {
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
export const deletePlaylists = /* GraphQL */ `
  mutation DeletePlaylists(
    $input: DeletePlaylistsInput!
    $condition: ModelPlaylistsConditionInput
  ) {
    deletePlaylists(input: $input, condition: $condition) {
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
export const createAssets = /* GraphQL */ `
  mutation CreateAssets(
    $input: CreateAssetsInput!
    $condition: ModelAssetsConditionInput
  ) {
    createAssets(input: $input, condition: $condition) {
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
export const updateAssets = /* GraphQL */ `
  mutation UpdateAssets(
    $input: UpdateAssetsInput!
    $condition: ModelAssetsConditionInput
  ) {
    updateAssets(input: $input, condition: $condition) {
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
export const deleteAssets = /* GraphQL */ `
  mutation DeleteAssets(
    $input: DeleteAssetsInput!
    $condition: ModelAssetsConditionInput
  ) {
    deleteAssets(input: $input, condition: $condition) {
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
export const createPlaylistsAssets = /* GraphQL */ `
  mutation CreatePlaylistsAssets(
    $input: CreatePlaylistsAssetsInput!
    $condition: ModelPlaylistsAssetsConditionInput
  ) {
    createPlaylistsAssets(input: $input, condition: $condition) {
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
    }
  }
`;
export const updatePlaylistsAssets = /* GraphQL */ `
  mutation UpdatePlaylistsAssets(
    $input: UpdatePlaylistsAssetsInput!
    $condition: ModelPlaylistsAssetsConditionInput
  ) {
    updatePlaylistsAssets(input: $input, condition: $condition) {
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
    }
  }
`;
export const deletePlaylistsAssets = /* GraphQL */ `
  mutation DeletePlaylistsAssets(
    $input: DeletePlaylistsAssetsInput!
    $condition: ModelPlaylistsAssetsConditionInput
  ) {
    deletePlaylistsAssets(input: $input, condition: $condition) {
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
    }
  }
`;
