import { Consent } from './consent';

describe('cookie-consent', () => {
  it('builds', () => {
    expect(new Consent()).toBeTruthy();
  });
});
