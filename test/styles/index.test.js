import { expect } from '@open-wc/testing';
import styles from '../../src/styles/index';

describe('styles generator', () => {
  it('returns an empty CSS literal when name is not a recognized font', () => {
    const ret = styles('foo');

    expect(ret.cssText).to.equal('');
  });
});
