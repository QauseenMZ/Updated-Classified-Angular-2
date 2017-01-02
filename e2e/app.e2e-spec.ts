import { Ng24seedPage } from './app.po';

describe('ng24seed App', function() {
  let page: Ng24seedPage;

  beforeEach(() => {
    page = new Ng24seedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
