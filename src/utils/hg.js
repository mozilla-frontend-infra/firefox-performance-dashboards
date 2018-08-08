import jsonFetch from './fetch';

const HG_HOST = 'https://hg.mozilla.org';
const REPO_PATH = 'mozilla-central';

export const getPushMeta = async (node, repoPath = REPO_PATH) =>
  jsonFetch(`${HG_HOST}/${repoPath}/json-rev/${node}`);

export const changesetUrl = node => `${HG_HOST}/${REPO_PATH}/rev/${node}`;
