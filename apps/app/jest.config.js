module.exports = {
  displayName: 'app',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs',
          strict: true,
          strictMode: true
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            decorators: true,
            dynamicImport: true
          },
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true
          },
          target: 'es2021'
        },
        minify: false
      }
    ]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: '../../coverage/apps/app'
}
