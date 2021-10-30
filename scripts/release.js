const path = require('path')
const shell = require('shelljs')
const pkg = require('../package')

shell.cd(path.resolve(__dirname, '..'))
shell.rm('-rf', 'build')
shell.exec('yarn build')
shell.exec(`yarn crx pack build -o ${pkg.name}-v${pkg.version}.crx -p build.pem`)