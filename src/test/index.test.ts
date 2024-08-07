
// in jest the typescript syntax shows somwtime error as it was made for 
// Javscript and not for typescript
import { describe, expect, it, test } from '@jest/globals';
import { sum, multi} from '../index';

describe('sum module', () => {
    it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
describe('multi module', () => {
    test('multiply 1 * 2 to equal 2', () => {
      expect(multi(1, 2)).toBe(2);
    });
    
  });
// main things to keep in mind.
// describe , it