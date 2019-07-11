const accessibility = require("./accessibility")
const ui = require("./ui")
const media = require("./media")
const tooling = require("./tooling")
const meta = require("./meta")
const hosting = require("./hosting")
const security = require("./security")

module.exports = [
  ...accessibility,
  ...ui,
  ...media,
  ...tooling,
  ...meta,
  ...hosting,
  ...security,
]
