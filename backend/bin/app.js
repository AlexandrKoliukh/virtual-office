import getApp from '..';

const port = process.env.PORT || 3000;
/* eslint-disable */
getApp().listen(port, () => console.log(`port: ${port}`));