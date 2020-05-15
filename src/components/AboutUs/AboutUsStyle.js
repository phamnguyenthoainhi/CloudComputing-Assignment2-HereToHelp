const style = (theme) => ({
    container:{
        textAlign: 'center',
        fontFamily: theme.font,
        marginLeft: 50,
        marginRight: 50
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
        paddingTop: 270,
        fontFamily: theme.font,
    },
    name: {
       fontSize: 23,
       color: theme.blue.dark,
       padding: 20,
       fontFamily: theme.font,
    },
    text: {
        fontSize: 19,
        paddingBottom: 10,
        fontFamily: theme.font,
    }
})
export  default style;