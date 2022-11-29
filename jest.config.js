
module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    testMatch: [
       '<rootDir>/src/**/*.test.tsx'
    ],
    transform: {
       '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx'],
    setupFilesAfterEnv: [
       '@testing-library/jest-dom/extend-expect'
    ],
    collectCoverage: false
 }

 /*
 module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],testMatch: ['**\/*.test.ts'],
transform: {
   '^.+\\.tsx?$': 'ts-jest'
}
};
*/