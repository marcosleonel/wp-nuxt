import assert from 'assert';
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: 'http://admin.abdabauru.com.br/wp-json' });
const autoDiscovery = WPAPI.discover( 'http://admin.abdabauru.com.br/' );
const BASE_URL = 'http://localhost:3001/';

describe('Auto-Descovering', () => {
  let page
  beforeAll(async () => {
    page = await browser.newPage()
    await page.goto(BASE_URL)
  });
  afterAll(async () => {
    await page.close()
  });

  it('should return a promise', async () => {
    autoDiscovery
        .then( result => {
          expect(result).toBe(Promise);
          done();
        }).catch( error => {
          console.log('[Store Error]: getCustomRoutes failed', error);
        });
  });
});

