import 'babel-polyfill';
import Express from 'express';
import handleRender from './handleRender';

// this is a very simple express app designed only for the purpose of this repo
const app = Express();
const port = process.env.PORT || 3000;

// server static content
app.use('/dist', Express.static('dist'));
app.use('/public', Express.static('public'));

// register route handler
app.use(handleRender);

// listen out for incoming requests
app.listen(port, () => {
  console.log('app now listening on port', port);
});
