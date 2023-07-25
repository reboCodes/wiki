import React from 'react';
import { CodeBlock, github } from 'react-code-blocks';

const ReactEsbuildGuide = () => {

    const esbuild_content = 
    `import esbuild from 'esbuild'

    await esbuild.build({
      entryPoints: ['src/App.jsx'],
      bundle: true,
      minify: true,
      format: 'cjs',
      sourcemap: true,
      outfile: 'dist/output.js',
    });`

    const esbuild_multi_page_content = 
    `import esbuild from 'esbuild'

    const build = async () => {
      const result = await esbuild.build({
        entryPoints: () => ['pages/**/*.jsx'],
        bundle: true,
        minify: true,
        format: 'cjs',
        sourcemap: true,
        outfile: (entryPoint) => \`dist/\${entryPoint.replace('.jsx', '.js')}\`,
      });
    };
    
    build();`

    const index_html_content = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="dist/output.js"></script>
    </body>
    </html>`

    const app_js_content =
    `import React from 'react';
    import ReactDOM from 'react-dom';
    
    const App = () => {
      return(
        <>
          <h1>Hello World!</h1>
        </>
      );
    };
    
    const rootElement = document.getElementById('root');
    ReactDOM.createRoot(rootElement).render(<App />);`

    return(
        <div className='how-to'>

            <div className='header'>
                <h1>How to setup a Reactjs / esbuild app from scratch:</h1>
            </div>

            <ul>

                <li>
                    <h3>Install the packages</h3>
                    <p>Create a folder for your project. Inside the folder initilize git and npm.</p>
                    <p className='shell'>git init</p>
                    <p className='shell'>npm init -y</p>
                    <p>Install react, react-dom, and esbuild</p>
                    <p className='shell'>npm install react react-dom esbuild</p>
                </li>
                <li>
                    <h3>Setup the structure</h3>
                    <p>Create the following files and folders from the project root:</p>
                    <ul>
                        <li>esbuild-conf.js</li>
                        <li>src/</li>
                        <li>src/index.html</li>
                        <li>src/components/</li>
                        <li>src/App.jsx</li>
                    </ul>
                </li>

                <li>
                    <h3>Configure esbuild-conf.js App.jsx index.html</h3>
                    <p>Open index.html and paste the following code:</p>
                    <CodeBlock
                        className = "codeblock"
                        text = {index_html_content}
                        language = 'html'
                        showLineNumbers = {false}
                        theme = {github}
                    />
                    <p>Open esbuild-conf.js and paste the following code:</p>
                    <CodeBlock
                        className = "codeblock"
                        text = {esbuild_content}
                        language = 'javascript'
                        showLineNumbers = {false}
                        theme = {github}
                    />
                    <p>If you want to have a separate output file for each jsx entry point in
                        a folder, use this code instead. (This uses src/pages/ as an example)
                    </p>
                    <CodeBlock
                        className = "codeblock"
                        text = {esbuild_multi_page_content}
                        language = 'javascript'
                        showLineNumbers = {false}
                        theme = {github}
                    />
                    <p>Open App.js and paste the following code:</p>
                    <CodeBlock
                        className = "codeblock"
                        text = {app_js_content}
                        language = 'javascript'
                        showLineNumbers = {false}
                        theme = {github}
                    />
                </li>

                <li>
                    <h3>Run the app!</h3>
                    <p>To run the app, start a local webserver pointing to index.html then run the command:</p>
                    <p className='shell'>node esbuild-conf.js</p>
                </li>

            </ul>

        </div>
    );
};

export default ReactEsbuildGuide;