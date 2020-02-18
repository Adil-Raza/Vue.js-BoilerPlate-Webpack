This is Vue.js boiler plate


to setup boiler plate commad used:
1. npm init -y    //y to initialize with default settings
2. remove main key in package.json
3. npm install vue --save
4. npm install express@4.15.4 --save
5. setup server.js file with express
6. setup package.json so that when running npm start the server will start
7. now install webpack: npm install webpack@3.5.5 --save-dev
8. create /build/webpack.base.config.js
9. configure webpack configs in the above file
10. npm install webpack-dev-middleware@1.12.0 webpack-hot-middleware@2.18.2 --save-dev


to run server in local use : npm start

to run webpack: node ./node_modules/webpack/bin/webpack --config ./build/webpack.base.config.js


