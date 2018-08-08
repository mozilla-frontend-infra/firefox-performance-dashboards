import jsonFetch from './fetch';

const TH_HOST = 'https://treeherder.mozilla.org';
const REPO_NAME = 'mozilla-central';

const getDatumMeta = (pushId, repoName = REPO_NAME) =>
  jsonFetch(`${TH_HOST}/api/project/${repoName}/resultset/${pushId}/`);

export default getDatumMeta;
