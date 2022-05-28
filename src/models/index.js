// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Members, PrayerTimes, ScreenContent, PlaylistContent, AssestsPlaylistContent, Assests, Playlist, Screens } = initSchema(schema);

export {
  Members,
  PrayerTimes,
  ScreenContent,
  PlaylistContent,
  AssestsPlaylistContent,
  Assests,
  Playlist,
  Screens
};