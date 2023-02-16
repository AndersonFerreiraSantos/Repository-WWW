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
        {name: 'ON AAAA', onClick:() => {console.log('b3')}},
        {name: 'ON AAAA', onClick:() => {console.log('b3')}},
        {name: 'ON AAAA', onClick:() => {console.log('b3')}},
        {name: 'ON AAAA', onClick:() => {console.log('b3')}},
        {name: 'ON AAAA', onClick:() => {console.log('b3')}}
    ],
    ON_RIGHT:[
    ]
}

export const CONFIG_LIST = [
    { text: 'logout', onClick:() => {googleAuthentication.logout()}, icon:'FiX' },
]

export const MENU_LIST = [
    { text: 'logout', onClick:() => {console.log('teste')}, icon:'FiX' },
    { text: 'logout', onClick:() => {console.log('teste1')}, icon:'FiX' },
    { text: 'logout', onClick:() => {console.log('teste2')}, icon:'FiX' },
    { text: 'logout', onClick:() => {console.log('teste3')}, icon:'FiX' },
    { text: 'logout', onClick:() => {console.log('teste4')}, icon:'FiX' },
    { text: 'logout', onClick:() => {console.log('teste5')}, icon:'FiX' },
    { text: 'logout', onClick:() => {console.log('teste6')}, icon:'FiX' },
    { text: 'logout', onClick:() => {console.log('teste7')}, icon:'FiX' },

]