import jsonFetch from './fetch';

const TH_HOST = 'https://treeherder.mozilla.org';
const REPO_NAME = 'mozilla-central';

// XXX: We should see what calls can be cached in-memory
const getDatumMeta = (pushId, repoName = REPO_NAME) =>
  jsonFetch(`${TH_HOST}/api/project/${repoName}/resultset/${pushId}/`);

export default getDatumMeta;
