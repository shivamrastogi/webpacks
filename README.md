Loaders allow you to preprocess files as you require() or “load” them. Loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle frontend build steps. Loaders can transform files from a different language like, CoffeeScript to JavaScript, or inline images as data URLs. Loaders even allow you to do things like require() css files right in your JavaScript!


When applied, first run the css-loader on the file and then the style-loader on its output.

css-loader first converts the css file into a JavaScript module (a module form of the css).

style-loader accepts the generated JavaScript module and creates a new JavaScript module that, when run, will inject a style tag with the css into the DOM at the end of the head element.



As a reminder, we started this article by selecting the production option with the webpack-cli init command; we then supplemented it with:

html-webpack-plugin: Injects link and script tags
clean-webpack-plugin: Deletes the dist folder before each build
webpack-dev-server (and cheap-eval-source-map): Provides for rapid development with automatic builds and browser updating.
From the previous articles we can incorporate:

-p build option: optimized production build
source-map: A more accurate source map
file-loader: Supporting loading assets, e.g., images, as files.
url-loader: Supports loading assets, e.g., images, as data URLs.