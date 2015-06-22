module.exports = function (babel) {
  var t = babel.types;

  return new babel.Transformer("ignore-local-styles", {
    CallExpression: function(node, parent) {
      var isRequire = t.isIdentifier(node.callee, {name: "require"});
      if (!isRequire) return;
      if (node.arguments.length !== 1) return;

      var argument = node.arguments[0];

      if (argument.type !== "Literal" || typeof argument.value !== "string") return;
      var ext = argument.value.split('.').pop();
      if (ext === 'scss' || ext === 'css') {
        this.dangerouslyRemove();
      }
    }
  });
};
