import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  // testEnviroment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
