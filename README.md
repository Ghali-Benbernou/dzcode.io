# dzCode.io

[<img src="http://img.shields.io/badge/Join%20us%20on%20Slack-@dzCode.io-yellow.svg?logo=slack">](https://join.slack.com/t/dzcode/shared_invite/zt-ek9kscb7-m8z_~cBjX79l~uchuABPFQ)

The code for [dzcode.io](https://dzcode.io), a website for Algerian open-source community.

## Meta

You can find more about each folder by clicking on the folder name

| Folder               | Coverage                                                                                                                       |                                         Production URL |                                                                                                                                                                                         Staging URL |                                               Local URL |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------: |
| [./web](./web)       | [![codecov](https://codecov.io/gh/dzcode-io/dzcode.io/graph/badge.svg?flag=web)](https://codecov.io/gh/dzcode-io/dzcode.io)    |                         [dzcode.io](https://dzcode.io) |                                                                                                                                                          [stage.dzcode.io](https://stage.dzcode.io) |                 [localhost:8080](http://localhost:8080) |
| [./data](./data)     | [![codecov](https://codecov.io/gh/dzcode-io/dzcode.io/graph/badge.svg?flag=data)](https://codecov.io/gh/dzcode-io/dzcode.io)   |               [data.dzcode.io](https://data.dzcode.io) |                                                                                                                                                [data.stage.dzcode.io](https://data.stage.dzcode.io) |                 [localhost:9090](http://localhost:9090) |
| [./api](./api)       | [![codecov](https://codecov.io/gh/dzcode-io/dzcode.io/graph/badge.svg?flag=api)](https://codecov.io/gh/dzcode-io/dzcode.io)    | [api.dzcode.io/v2/docs](https://api.dzcode.io/v2/docs) |                                                                                                                                  [api-stage.dzcode.io/v2/docs](https://api-stage.dzcode.io/v2/docs) | [localhost:7070/v2/docs](http://localhost:7070/v2/docs) |
| [./mobile](./mobile) | [![codecov](https://codecov.io/gh/dzcode-io/dzcode.io/graph/badge.svg?flag=mobile)](https://codecov.io/gh/dzcode-io/dzcode.io) |                                                        | [Android](https://play.google.com/store/apps/details?id=io.dzcode.mobile) \| [iOS](https://testflight.apple.com/join/XDcfIqdJ) \| [Expo](https://expo.dev/@zakman.dev/dzcode?release-channel=stage) |               [localhost:19002](http://localhost:19002) |
| [./common](./common) | [![codecov](https://codecov.io/gh/dzcode-io/dzcode.io/graph/badge.svg?flag=common)](https://codecov.io/gh/dzcode-io/dzcode.io) |                                                        |                                                                                                                                                                                                     |                                                         |

## Get Started

### Perquisites

Make sure you have:

- [Git](https://git-scm.com/)
- [Nodejs](https://nodejs.org/) version 14 or higher
- [Yarn](https://yarnpkg.com/) version 1.4.2 or higher

### Run it locally

- Open terminal and clone the repo:

```sh
 git clone https://github.com/dzcode-io/dzcode.io.git
```

- Make **sure** you are in the project **root**:

```sh
 cd dzcode.io
```

- Install dependencies:

```sh
yarn
```

- Run it locally by either:

```sh
yarn dev:web
```

```sh
yarn dev:mobile
```

```sh
yarn dev:all
```

- For web server go to <http://localhost:8080>
- For data server go to <http://localhost:9090>
- For api server go to <http://localhost:7070/v2/docs>
- For mobile go to <http://localhost:19002> and scan QR code with your phone

## Contributing

To get started see [the contributing guidelines](https://github.com/dzcode-io/dzcode.io/blob/main/.github/CONTRIBUTING.md).

### Before You Create a Pull Request

- If you already forked the repository, please make sure your fork is up-to-date, following [this simple steps](https://www.dzcode.io/Learn/Git_Basics/Syncing_An_Old_Forked_Repository_With_Upstream).
- Please make sure your code follows the style guideline defined in this repo, for that simply run `yarn lint:fix` to ensure the conformity. This process should happen automatically whenever you commit your changes, but you can always do it manually when your Pull Request checks are failing due to linting errors.

### List Your Project or Add/Edit Article

- To list your project on dzcode.io, see [this tutorial](https://dzcode.io/Learn/About_dzcode_io/Add_Your_Project_To_dzcode_io)
- To add an article, see [this tutorial](https://dzcode.io/Learn/About_dzcode_io/Add_Your_Article_To_dzcode_io)

## License

Copyright (c) 2020 dzCode.io (twitter: [@dzcode_io](https://twitter.com/dzcode_io)) Licensed under the MIT license.
