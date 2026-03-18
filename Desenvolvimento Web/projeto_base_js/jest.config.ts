export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
    clearMocks: true,
    restoreMocks: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory: 'coverage',
    collectCoverage: true,
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90
        }
    }
};