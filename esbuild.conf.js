import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/App.jsx'],
  bundle: true,
  sourcemap: true,
  outfile: 'build/javascript/app.js',
});