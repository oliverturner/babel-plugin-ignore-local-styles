module.exports = function (babel) {
  var t = babel.types;

  return new babel.Transformer("ignore-local-styles", {

    ImportDeclaration: function(specifiers, source) {
      var ext = specifiers.source.value.match(/\.s?css$/);
      if (ext) return;
      this.dangerouslyRemove();
    },

    CallExpression: function(node, parent) {
      var isRequire, argument, ext;

      isRequire = t.isIdentifier(node.callee, {name: "require"});
      if (!isRequire) return;
      if (node.arguments.length !== 1) return;

      argument = node.arguments[0];
      if (argument.type !== "Literal" || typeof argument.value !== "string") return;

      ext = argument.value.split('.').pop();
      if (ext === 'scss' || ext === 'css') {
        this.dangerouslyRemove();
      }
    }
  });
};
