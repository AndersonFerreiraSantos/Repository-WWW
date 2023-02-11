import googleAuthentication from '../../database/serviceFirebase'

export const BUTTONS = {
    OF_LEFT:[
        {name: 'b1', onClick:() => {console.log('b3')}},
        {name: 'b1', onClick:() => {console.log('b3')}},
        {name: 'b1', onClick:() => {console.log('b3')}}
    ],
    OF_RIGHT:[
        {name: 'GOOGLE', onClick:() => {googleAuthentication.googleAuthentication()}},
    ]
}