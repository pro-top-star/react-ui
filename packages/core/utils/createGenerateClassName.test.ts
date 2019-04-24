import { createGenerateClassName } from './createGenerateClassName';

const generateClassName = createGenerateClassName();

const rule = {
  key: 'someKey'
};

describe('createGenerateClassName', () => {
  test('basic test', () => {
    expect(typeof generateClassName).toBe('function');
  });

  test('with valid jssId and classNamePrefix', () => {
    const sheet = {
      options: {
        jss: {
          id: '1'
        },
        classNamePrefix: 'WithStyles(Component)'
      }
    };
    const className = generateClassName(rule, sheet);
    expect(className.match(/Component-someKey--1-.*/).length > 0).toBe(true);
  });

  test('with invalid jssId and invalid classNamePrefix', () => {
    const sheet = {
      options: {
        jss: {
          id: null
        },
        classNamePrefix: 'WithStyles-Component'
      }
    };
    const className = generateClassName(rule, sheet);
    expect(className.match(/WithStyles-Component-someKey--.*/).length > 0).toBe(true);
  });
});
