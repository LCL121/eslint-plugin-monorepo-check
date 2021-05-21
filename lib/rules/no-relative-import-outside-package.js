module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: 'prevent relative imports outside own workspace',
      category: 'Best Practices',
      recommended: true
    },
    fixable: 'code'
  },

  create (context) {
    const readPkgUp = require('read-pkg-up');
    const path = require('path');


    return {
      ImportDeclaration (node) {
        console.log(node.source.value)
        console.log(context.getCwd())
        console.log(context.getFilename())
        console.log(path.dirname(context.getFilename()))
        const nearestPkg = readPkgUp.sync({
          cwd: context.getFilename(),
          normalize: false
        })
        console.log(nearestPkg);
      }
    }
  }
}