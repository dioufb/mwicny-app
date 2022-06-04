// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Prayertimes, Members, Screens, Playlists, PlaylistsAssets, Assets } = initSchema(schema);

export {
  Prayertimes,
  Members,
  Screens,
  Playlists,
  PlaylistsAssets,
  Assets
};