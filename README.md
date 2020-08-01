# 11ty Plugins

A collection of plugins I've written for eleventy.

## Plugins Found Here

|                             |                                                                        |
| --------------------------- | ---------------------------------------------------------------------- |
| [date](packages/date)       | Dead simple Eleventy plugin for formatting dates inside your templates |
| [vibrant](packages/vibrant) | Extract prominent colors from your Eleventy site's images              |
|                             |                                                                        |

## Contributing

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) which leverages [pnpm](https://pnpm.js.org/) for dependency management.

To begin, please install `pnpm`:

```console
$ npm install pnpm -g
```

### Working with Plugin Packages

All plugin packages are kept in the `/packages` directory.

#### Adding dependencies:

```console
$ pnpm add <package> --filter ./packages/<name>
```

Where `<package>` is the name of the NPM package you wish to add for a plugin package, and `<name>` is the proper name of the plugin.

#### Running Tests:

To run tests on all packages which have changes:

```console
$ pnpm run test
```

To run tests on a specific package:

```console
$ pnpm run test --filter ./packages/<name>
```

Linting:

To lint all packages which have changes:

```console
$ pnpm run lint
```

To lint a specific package:

```console
$ pnpm run lint --filter ./packages/<name>
```

_Note: Scripts in the repository will run the root `test` and `lint` script on those packages which have changes. This is also how the CI pipelines function. To run either on a package outside of that pipeline, use `pnpm run <script> -- eleventy-plugin-<name>`._

## Meta

[CONTRIBUTING](./.github/CONTRIBUTING.md)

[LICENSE (MIT)](./LICENSE)
