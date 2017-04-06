import { Ejemplo02Page } from './app.po';

describe('ejemplo02 App', () => {
  let page: Ejemplo02Page;

  beforeEach(() => {
    page = new Ejemplo02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
