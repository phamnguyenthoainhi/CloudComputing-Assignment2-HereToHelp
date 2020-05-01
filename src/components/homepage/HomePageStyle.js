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
        paddingLeft: 25,
        paddingRight: 25,
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
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: "12px",
        borderRadius: theme.button.radius,
        outline: 'none',
        '&:hover':{
            backgroundColor: theme.green.darker,
            color: theme.orange.dark,
        },
        '&:focused': {
            textDecoration: 'none',
            oultine: 0
        }
    },
    success: {
        textAlign: 'center',
        font: theme.font,
        backgroundColor: theme.blue.darkest,
        fontFamily: theme.font,
    },
    successtext: {
        color: theme.pale,
        fontFamily: theme.font,
        fontSize: 17,
        paddingTop: 20 
    },
    successbtn: {
        paddingBottom: 20,
        color: theme.blue.light,
        fontFamily: theme.font,
        fontSize: 15,
        
        '&:hover':{
            
            color: 'whitesmoke',
        }
    },
    logout: {
        color: theme.orange.darker,
        fontSize: 14,
        fontFamily: theme.font,
        float: "right",
        '&:hover':{
            
            color: theme.orange.darkest,
        }
    }

})
export default style;