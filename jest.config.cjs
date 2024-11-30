module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        babelConfig: true,
      },
    ],
  },
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
};
