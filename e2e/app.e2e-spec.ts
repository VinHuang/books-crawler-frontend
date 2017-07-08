import { BooksCrawlerFrontendPage } from './app.po';

describe('books-crawler-frontend App', () => {
  let page: BooksCrawlerFrontendPage;

  beforeEach(() => {
    page = new BooksCrawlerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
