const nextJest = require("next/jest");
const createJestConfig = nextJest({
    dir: "./",
});
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/db/(.*)$': '<rootDir>/db/$1',
    },
};
module.exports = createJestConfig(customJestConfig);

