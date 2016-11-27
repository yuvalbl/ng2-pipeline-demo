import { Ng2PipelineDemoPage } from './app.po';

describe('ng2-pipeline-demo App', function() {
  let page: Ng2PipelineDemoPage;

  beforeEach(() => {
    page = new Ng2PipelineDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
