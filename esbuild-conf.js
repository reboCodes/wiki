const res = require('esbuild').buildSync({
    entryPoints: ['src/App.jsx'],
    bundle: true,
    minify: true,
    format: 'cjs',
    sourcemap: true,
    outfile: 'dist/output.js',
  })