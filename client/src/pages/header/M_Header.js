import googleAuthentication from '../../database/serviceFirebase';


export const BUTTONS = {
    OF_LEFT:[
        {name: 'b1', onClick:() => {console.log('b3')}},
        {name: 'b1', onClick:() => {console.log('b3')}},
        {name: 'b1', onClick:() => {console.log('b3')}}
    ],
    OF_RIGHT:[
        {name: 'GOOGLE', onClick:() => {googleAuthentication.googleAuthentication()}},
    ],
    ON_LEFT:[
    ],
    ON_RIGHT:[
    ]
}

export const CONFIG_LIST = [
    { text: 'logout', onClick:() => {googleAuthentication.logout()}, icon:'exit_to_app' },
]