/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePrayertimes = /* GraphQL */ `
  subscription OnCreatePrayertimes {
    onCreatePrayertimes {
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
export const onUpdatePrayertimes = /* GraphQL */ `
  subscription OnUpdatePrayertimes {
    onUpdatePrayertimes {
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
export const onDeletePrayertimes = /* GraphQL */ `
  subscription OnDeletePrayertimes {
    onDeletePrayertimes {
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
export const onCreateMembers = /* GraphQL */ `
  subscription OnCreateMembers {
    onCreateMembers {
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
export const onUpdateMembers = /* GraphQL */ `
  subscription OnUpdateMembers {
    onUpdateMembers {
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
export const onDeleteMembers = /* GraphQL */ `
  subscription OnDeleteMembers {
    onDeleteMembers {
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
export const onCreateScreens = /* GraphQL */ `
  subscription OnCreateScreens {
    onCreateScreens {
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
export const onUpdateScreens = /* GraphQL */ `
  subscription OnUpdateScreens {
    onUpdateScreens {
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
export const onDeleteScreens = /* GraphQL */ `
  subscription OnDeleteScreens {
    onDeleteScreens {
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
export const onCreatePlaylists = /* GraphQL */ `
  subscription OnCreatePlaylists {
    onCreatePlaylists {
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
export const onUpdatePlaylists = /* GraphQL */ `
  subscription OnUpdatePlaylists {
    onUpdatePlaylists {
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
export const onDeletePlaylists = /* GraphQL */ `
  subscription OnDeletePlaylists {
    onDeletePlaylists {
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
export const onCreateAssets = /* GraphQL */ `
  subscription OnCreateAssets {
    onCreateAssets {
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
export const onUpdateAssets = /* GraphQL */ `
  subscription OnUpdateAssets {
    onUpdateAssets {
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
export const onDeleteAssets = /* GraphQL */ `
  subscription OnDeleteAssets {
    onDeleteAssets {
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
export const onCreatePlaylistsAssets = /* GraphQL */ `
  subscription OnCreatePlaylistsAssets {
    onCreatePlaylistsAssets {
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
export const onUpdatePlaylistsAssets = /* GraphQL */ `
  subscription OnUpdatePlaylistsAssets {
    onUpdatePlaylistsAssets {
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
export const onDeletePlaylistsAssets = /* GraphQL */ `
  subscription OnDeletePlaylistsAssets {
    onDeletePlaylistsAssets {
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
