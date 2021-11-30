# How to run model in local

## Download nodeJS
- First, you need to download [NODEJS](https://nodejs.org/en/). Node.js is an open-source, cross-platform, JavaScript runtime environment. To get more infomation about Node.js, please see the [Node.js Website](https://nodejs.org/en/). 

## Install dependencies

- In your terminal, run this script to init:
```{bash} 
npm init: 
```

- Next, you should install all dependencies that were used in our source code. 

```{bash} 
npm install express
npm install express-handlebars
npm install handlebars
npm install multer
```

- Final, run this script to deploy to local in port ```3000```: 

```{bash} 
node index.js
```