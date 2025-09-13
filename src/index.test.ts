import { describe, it, expect } from 'vitest';
import { main } from './index';

describe('smoke', () => {
  it('main existuje', () => {
    expect(typeof main).toBe('function');
  });
});
