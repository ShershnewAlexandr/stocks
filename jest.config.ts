const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '#/(.*)$': '<rootDir>/src/$1',
  },
}

export default jestConfig;
