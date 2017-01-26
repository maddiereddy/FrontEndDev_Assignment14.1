import { Assignment141Page } from './app.po';

describe('assignment14-1 App', function() {
  let page: Assignment141Page;

  beforeEach(() => {
    page = new Assignment141Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
