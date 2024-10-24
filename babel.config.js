const presets = [
  ['@babel/preset-env',{
    targets: {
      edge: '17',
      firefox: '60',
      chrome: '67',
      safari: '12',
      ie:'11'
    },
    useBuiltIns: 'entry',
    corejs: '3.6.4',
  }]
];
module.exports = { presets};