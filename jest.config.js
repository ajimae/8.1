/* eslint-disable max-len */
module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__test__/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFiles: [
    '<rootDir>/__test__/setup/shim.js',
    '<rootDir>/__test__/setup/setup.js'
  ],
  testPathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
};
