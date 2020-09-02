# Using packages
In order to use a package we should add it as a dependency on the package.json file. The yarn command is:
```sh
yarn workspace @application/<Application Name> add @packages/<Package Name>@1.0.0
```
# Commands
##### Boostrap
Bootstrap the packages in the current Lerna repo. Installs all of their dependencies and links any cross-dependencies.
The flag `--use-workspaces` Enables integration with Yarn Workspaces
```sh
$ yarn bootstrap
```

##### Build
lerna exec will take any command and run it over all of the different packages. This command instructs Babel to run in parallel over every package, pulling from the /src folder and compiling into the /lib folder. We don’t want to include any stories in the compiled output.
Using `--root-mode upward` is the special sauce to using Yarn workspaces. This tells Babel the node_modules are located in the root instead of nested inside each of the individual packages. This prevents each package from having the same node_modules and extracts them up to the root.
```sh
$ yarn build
```

##### Start
Will spin up wrapper application - Agency SPA.
```sh
$ yarn start
```

##### Clean
Will execute the command rimraf lib in each package directory,
```sh
$ yarn clean:build
```
