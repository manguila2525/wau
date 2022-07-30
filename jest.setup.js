// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
function mountWithIntl(
  node,
  intlKeys,
  formatKeys,
  {context, childContextTypes} = {},
) {
  const {intl} = getIntlContext(intlKeys, formatKeys);
  return mount(nodeWithIntlProp(node, intl), {
    context: {...context, intl},
    childContextTypes: {...childContextTypes, intl: intlShape},
  });
}
