import { MeanTwitterPage } from './app.po';

describe('mean-twitter App', () => {
  let page: MeanTwitterPage;

  beforeEach(() => {
    page = new MeanTwitterPage();
  });

  it('should display a title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Chirps');
  });
});
