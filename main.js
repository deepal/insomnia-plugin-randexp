const randexp = require('randexp').randexp;

module.exports.templateTags = [
  {
    name: "regex",
    displayName: "Random Data from Regex",
    description: "Generate random data that matches a regular expression",
    args: [
      {
        displayName: "Regular Expression",
        description: "Regular expression to generate matching data for",
        type: "string",
      },
    ],
    async run(context, rgx) {
      return randexp(new RegExp(rgx))
    },
  },
];
