# Typescript Playground

## Getting Started

### Install nodejs

This can be done through your package manager or via NVM (node version manager).
NVM allows you to have multiple versions of nodejs installed and still call `node` / `npm`
without specifying a version number.

https://github.com/nvm-sh/nvm#install--update-script

`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

### Install Typescript

`npm install -g typescript`

### Run Type Checking

cd to `typescriptplayground/basics` and run `tsc` to run the typescript compiler.
All of the configuration is in `tsconfig.json` and it's setup to configure `tsc` to be in a 'check only' mode suitable for CI / linting.


## Research Notes 

### Compiling React Apps

Typically a react app will be compiled with webpack. The following link alludes to the ability to
do the following things for handling typescript files in this case:

* Replace babel with the compiler that ships with typescript
* Use the typescript compiler as a build step prior to the existing babel step to convert .ts(x) files to .js(x) 
files to re-use as much of the existing build pipeline as possible
8 Use the
* Use the typescript plugin available with babel if it's already being used in webpack 

https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide

https://github.com/Microsoft/TypeScript-Babel-Starter#readme

https://en.wikipedia.org/wiki/Microsoft_TypeScript

### CI Integration

Type script can be run in a check only mode which produces stdout / stderr or a non-zero
exit code when there are type errors making it easy to integrate.

### Further Reading

A three part series on the potential downsides of typescript

* https://medium.jonasbandi.net/here-is-why-you-might-not-want-to-use-typescript-part-1-alternatives-ec1248bb6dc
* https://medium.jonasbandi.net/here-is-why-you-might-not-want-to-use-typescript-part-2-typescript-adds-overhead-20b670b9105a
* https://medium.jonasbandi.net/here-is-why-you-might-not-want-to-use-typescript-50ab0d225bdd

Alternatives to TypeScript
 
 * https://flow.org/en/docs/types/
    * https://blog.jetbrains.com/webstorm/2016/11/using-flow-in-webstorm/
    * https://flow.org/en/docs/react/
 * https://reasonml.github.io/docs/en/type
