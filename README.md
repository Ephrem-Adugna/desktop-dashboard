# Getting Started
1. Clone the repo:
```
git clone https://github.com/Ephrem-Adugna/desktop-dashboard.git
```
2. Install the node packages
```
npm i
```
3. Run
```
npm start
```
4. When you want to edit the logic for `bundles/newsbundle.js` or `bundles/weatherbundle.js` make sure to first edit the javascript files `getnews.js` and `getweather.js` and then bundle them by running
```
browserify getnews.js -o newsbundle.js
```
 or
```
browserify getweather.js -o weatherbundle.js
```