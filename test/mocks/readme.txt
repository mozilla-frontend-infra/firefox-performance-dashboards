This file describe what can of data lives within the mocks/ directory.

At the top level we have the optionCollectionHash.json [1] which is shared across all
jobs running on Treeherder.

For each platform (e.g. Windows 10) there's a list of all subtest that is run on that platform:
* signaturesNoSubtests.json

For each benchmark we define three sets of files (mocks/${os}/${benchmark}/):
* data.json [2]
  * 3 days worth of data instead of the default 14 days
* subtests.json [3]
  * All subtests that compose this specific benchmark
* expected.json
  * After all processing we should obtain this data structure

[1] https://treeherder.mozilla.org/api/optioncollectionhash/
[2] https://treeherder.mozilla.org/api/project/mozilla-central/performance/data/?framework=1&interval=259200&signature_id=1651448&signature_id=1651449&signature_id=1651446&signature_id=1651447
[3] https://treeherder.mozilla.org/api/project/mozilla-central/performance/signatures/?format=json&parent_signature=947870e091eef0257755ce0e6fd6302e1704c15b
[4] https://treeherder.mozilla.org/api/project/mozilla-central/performance/signatures/?format=json&framework=1&platform=linux64&subtests=0
