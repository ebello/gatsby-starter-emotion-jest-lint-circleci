module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/test-config/jest.preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-plugin-mdx)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: ['<rootDir>/test-config/loadershim.js'],
  setupFilesAfterEnv: ['./test-config/setup-tests.js'],
  snapshotSerializers: ['jest-emotion'],
};
