# CrdsAngularBoilerplate

This is a starting point for developing an Angular microclient. It uses the [Angular CLI](https://github.com/angular/angular-cli/wiki) ( [installation instructions](https://github.com/angular/angular-cli#installation) )with a few additions specific to Crossroads.


* Includes the [crds-styles](https://github.com/crdschurch/crds-styles)
* ~~Includes [crds-ng2-content-block](https://github.com/crdschurch/crds-ng2-content-block) for retrieving content blocks from the CMS~~
* Includes some [default variables](./src/environments/environment.ts) used in the Crossroads environment
* Unit tests use the [Mocha reporter](https://www.npmjs.com/package/karma-mocha-reporter) by default
* Includes [ng2-toastr](https://www.npmjs.com/package/ng2-toastr) for great toasting.

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
If you prefer to run the tests with Chrome istead of PhantomJS, just pass the `--browser` flag
```
ng test --browser Chrome --reporter kjhtml
```

To see code coverage:
```
ng test --code-coverage
```
and open [the coverage report](./coverage/index.html)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Other Topics

### Making Analytics Calls

To make analytics calls to astronomer & google analytics, use 
> analytics.service.ts

### Adding Content Blocks

Make sure you have installed the [crds-ng2-content-block](https://github.com/crdschurch/crds-ng2-content-block) module.
> If you don't have it run `npm i crds-ng2-content-block`

Import the `ContentBlockModule` in your module file. Ex:

```ts
@NgModule({
  imports: [
    ContentBlockModule.forRoot({ categories: Array('main', 'common'), endpoint: environment.crdsEndpoint })
  ]
})
```
> Note: the `categories` property determines what content block categories will be available to your module.


Now you can use the `crds-content-block` component in your templates. Ex:
```html
<crds-content-block id="{name_of_content_block}"></crds-content-block>
```

For more info check out the [crds-ng2-content-block repo](https://github.com/crdschurch/crds-ng2-content-block)

### Using the Preloader Spinner

This repo contains an implementation of the preloader directive used in `crds-angular`. Ex:

```html
<app-preloader fullscreen="<boolean>" [hidden]="<boolean>"></app-preloader>
```

The `fullscreen` attribute will default to `true`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## ng2-toastr example

We default the options to allow html so content blocks can be passed in. Methods you can use are success, warning, info, and error.

```javascript

import { ToastsManager } from 'ng2-toastr';
...
constructor(private toast: ToastsManager) {}

yeahToast() {
    this.toast.success('content', 'title', 'options(optional)');
    this.toast.warning('this is warning', 'WARN!');
}
```
