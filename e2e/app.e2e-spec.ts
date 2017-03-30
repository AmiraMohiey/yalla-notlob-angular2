import { YallaNotlobAngular2Page } from './app.po';

describe('yalla-notlob-angular2 App', () => {
  let page: YallaNotlobAngular2Page;

  beforeEach(() => {
    page = new YallaNotlobAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
