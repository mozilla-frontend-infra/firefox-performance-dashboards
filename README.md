# Firefox performance dashboards

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
[![codecov](https://codecov.io/gh/mozilla-frontend-infra/firefox-performance-dashboard/branch/master/graph/badge.svg)](https://codecov.io/gh/mozilla-frontend-infra/firefox-performance-dashboard)
[![Build status][circleci-image]][circleci-url]

The Firefox Performance dashboards permits creating independent dashboards with graphs tracking data from [Perfherder](https://wiki.mozilla.org/EngineeringProductivity/Projects/Perfherder).

Some dashboards:

* [AreWeFastYet](https://arewefastyet.com) tracks various Firefox performance benchmarks
* [AreWeSlimYet](https://awsy.netlify.com) tracks various Firefox memory metrics

## Requirements

* [Node.js](https://nodejs.org)
* [Yarn Package Manager](https://yarnpkg.com/en/docs/install)

## Set up

**NOTE**: To choose a dashboard different than the default one define the `DASHBOARD` environment
variable and set its value to one of the values defined in `src/config.js` (e.g. `awsy`).

Checkout the code and run:

```bash
yarn install
yarn start
```

After that open <http://localhost:5000> on your preferred browser.

[circleci-image]: https://circleci.com/gh/mozilla-frontend-infra/firefox-performance-dashboard.svg?style=badge
[circleci-url]: https://app.circleci.com/pipelines/github/mozilla-frontend-infra/firefox-performance-dashboard

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://armenzg.com"><img src="https://avatars2.githubusercontent.com/u/44410?v=4" width="100px;" alt=""/><br /><sub><b>Armen Zambrano</b></sub></a><br /><a href="#projectManagement-armenzg" title="Project Management">📆</a></td>
    <td align="center"><a href="http://www.divyanshurawat.in"><img src="https://avatars3.githubusercontent.com/u/13464678?v=4" width="100px;" alt=""/><br /><sub><b>Divyanshu Rawat</b></sub></a><br /><a href="https://github.com/mozilla-frontend-infra/firefox-performance-dashboard/commits?author=divyanshu-rawat" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!