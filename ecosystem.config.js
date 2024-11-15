module.exports = {
    apps: [{
      name: "gloria",
      script: "pnpm",
      args: "run dev --characters=\"./characters/gloria.character.json\"",
      interpreter: "none",
      env: {
        NODE_ENV: "development",
      }
    }]
  }