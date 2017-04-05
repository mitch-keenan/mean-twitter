import { MeanTwitterPage } from './app.po';

describe('mean-twitter App', () => {
  let page: MeanTwitterPage;

  beforeEach(() => {
    page = new MeanTwitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
