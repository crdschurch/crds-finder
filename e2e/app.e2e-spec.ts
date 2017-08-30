import { CrdsAngularBoilerplatePage } from './app.po';

describe('crds-angular-boilerplate App', () => {
  let page: CrdsAngularBoilerplatePage;

  beforeEach(() => {
    page = new CrdsAngularBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
