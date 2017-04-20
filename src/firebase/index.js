import rebase from 're-base';

const base = rebase.createClass({
  apiKey: process.env.REACT_APP_APIKEYa,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
});

export default base;