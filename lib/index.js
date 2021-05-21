/**
 * @fileoverview check monorepo
 * @author Lei Chenlong
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  configs: {
    recommended: {
      rules: {
        'no-relative-import-outside-package': 'error'
      }
    }
  },
  rules: requireIndex(__dirname + "/rules")
};



