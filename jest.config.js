module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@data_structures/(.*)$': '<rootDir>/src/data_structures/$1',
        '^@errors/(.*)$': '<rootDir>/src/errors/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    },
};