let jestConfigObject = {
  displayName: 'app',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/app'
}

if (process.env.NODE_ENV === 'CI' || process.env.CI === 'true') {
  jestConfigObject.transform = {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        isolatedModules: true,
        diagnostics: false
      }
    ]
  }
}

module.exports = jestConfigObject
