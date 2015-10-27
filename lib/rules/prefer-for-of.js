/**
 * @fileoverview A rule to disallow unnecessary `.call()` and `.apply()`.
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  return {
    "CallExpression": function(node) {
      if (
        node.callee.type === "MemberExpression" &&
        node.callee.property.type === "Identifier" &&
        node.callee.computed === false && (node.callee.property.name === "forEach")) {
        context.report(
          node,
          'use "for...in" instead of "forEach"', {
            name: node.callee.property.name
          });
      }
    }
  };
};

module.exports.schema = [];
