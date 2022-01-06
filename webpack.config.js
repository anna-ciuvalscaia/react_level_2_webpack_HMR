const path = require('path');

// export confid object
module.exports = {

    entry: './src/index.ts', // multiple entry points + config
    mode: 'development',
    module: { 
         rules: [
             // rule no 1
             {
                 test: /\.ts$/, 
                 include: [path.resolve(__dirname, 'src')],
                 use: 'ts-loader'
             },
              // rule no 2
              {
                test: /\.scss$/, 
                include: [path.resolve(__dirname, 'src')],
                use: ['style-loader','css-loader','sass-loader']
            },
             // rule no 3
             {
                test: /\.css$/i, 
                include: [path.resolve(__dirname, 'src')],
                use: ['style-loader', 'css-loader'],
            }
         ]
    },
    resolve: {
       extensions: ['.ts', '.js', '.scss', '.css'] 
    },
    devtool: 'eval-source-map',
  
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
        
    }
  };