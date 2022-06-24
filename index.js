import { logic } from './logic.js';
// const logic = require('./logic.js');

let params = {
    OSInformation: {
        type: 'Android',
        version: '12.3',
        PermissionsAndroid: ()=>{},
    },
    GoogleApiKey: '',
};

const finall = logic(params);
// module.exports = logic;