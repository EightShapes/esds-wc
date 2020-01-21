const sass = require('sass');
const fs = require('fs');
const chokidar = require('chokidar');

const template = "import { css, unsafeCSS } from 'lit-element';\nexport default css`${unsafeCSS(`INJECTCSSHERE`)}`;";

// One-liner for current directory
chokidar.watch('./src/*.scss').on('all', (event, path) => {
  console.log(event, path);
  const result = sass.renderSync({file: './src/esds-button.scss', outputStyle: 'compressed'});
  fs.writeFileSync('./src/esds-button-styles.js', template.replace(/INJECTCSSHERE/, result.css.toString()));
});
