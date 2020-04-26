const style = (theme) => ({
    container:{
        textAlign: 'center',
        fontFamily: theme.font
    },
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: 'auto',
        top: 300,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    },
    img: {
        position: 'relative'
    },
    content: {
        paddingTop: 270
    },
    name: {
       fontSize: 23,
       color: theme.blue.dark,
       padding: 20
    },
    text: {
        fontSize: 19,
        paddingBottom: 10
    }
})
export  default style;