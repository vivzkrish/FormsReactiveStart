import { FormsReactiveStartPage } from './app.po';

describe('forms-reactive-start App', function() {
  let page: FormsReactiveStartPage;

  beforeEach(() => {
    page = new FormsReactiveStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
