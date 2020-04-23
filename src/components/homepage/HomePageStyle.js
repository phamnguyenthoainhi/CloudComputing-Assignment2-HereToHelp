const style = (theme) => ({
    itemtopleft: {
        backgroundColor: theme.pale
    },
    itemtopright: {
        backgroundColor: theme.orange.light,
        // padding: 20
    },
    itemmiddleleft: {
        backgroundColor: theme.orange.light
    },
    itemmiddleright: {
        backgroundColor: theme.orange.light,
        // padding: 20
    },
    grid: {
        backgroundColor: theme.blue.light
        // ,
        // marginBottom: 50
    },
    
    footer: {
        paddingTop: 30
    },
    containerword:{
        marginTop: 200,
        marginBottom: 100,
        marginLeft: 60,
        marginRight: 60
    },
    containerwordmiddle: {
        marginTop: 300,
    },
    welcome: {
        fontFamily: theme.font,
        color: theme.green.darker,
        fontSize: 45,
        fontWeight: 900,
        marginBottom: 20
    },
    content: {
        fontFamily: theme.font,
        color: theme.green.dark,
        fontSize: 16,
    },

    problemBtn: {
        backgroundColor: theme.orange.dark,
        color: theme.green.darker,
        marginTop: 30,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: "12px",
        borderRadius: theme.button.radius,
        '&:hover':{
            backgroundColor: theme.green.dark,
            color: theme.orange.dark,
        }
    },

    registerBtn: {
        backgroundColor: theme.green.dark,
        color: theme.pale,
        marginTop: 30,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: "12px",
        borderRadius: theme.button.radius,
        outline: 'none',
        '&:hover':{
            backgroundColor: theme.green.darker,
            color: theme.orange.dark,
        },
        '&:focuse': {
            textDecoration: 'none',
            oultine: 0
        }
    }

})
export default style;