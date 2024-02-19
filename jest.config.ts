import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',

    '^@/public/(.*)$': '<rootDir>/public/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom'
}

export default createJestConfig(config)
