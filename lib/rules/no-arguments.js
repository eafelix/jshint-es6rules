/**
 * @fileoverview Rule to flag use of arguments.callee and arguments.caller.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

  return {
    "Identifier": function(node) {
      if (node.name === 'arguments') {
        context.report({
          node: node,
          message: "Invalid using of arguments"
        });
      }

    }
  };

};

module.exports.schema = [];
