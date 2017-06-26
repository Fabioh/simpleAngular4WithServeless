import { NgServerlessPage } from './app.po';

describe('ng-serverless App', () => {
  let page: NgServerlessPage;

  beforeEach(() => {
    page = new NgServerlessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
