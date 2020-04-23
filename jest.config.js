module.exports = {
    // Flag to indicate if Code Coverage to be collected and reported
    collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage
    // information should be collected
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // Allows for a label to be printed along side a test while it is running.
    displayName: {
        name: 'AWESOME TESTING',
        color: 'yellow',
    },
};