const style = (theme) => ({
    container: {
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    center: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'black',
        fontFamily: theme.font,
        color: theme.orange.dark,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: "14px",
        transitionDuration: '0.4s',
        borderRadius: theme.button.radius,
        '&:hover':{
            backgroundColor: 'black',
            color: theme.orange.light
        }
    },
    successbtn: {
        backgroundColor: 'white',
        border: "2px solid black",
        fontFamily: theme.font,
        color: theme.green.darkest,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: "14px",
        transitionDuration: '0.4s',
        borderRadius: theme.button.radius,
        '&:hover':{
            
            color: theme.orange.darker
        }
    },
    title: {
        fontFamily: theme.font,
        fontSize: 25,
        fontWeight: 800,

    },
    input: {
        fontFamily: theme.font,
        paddingBottom: 20,
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.orange.darker,
        },
        '& .MuiInput-underline:hover': {
            borderBottomColor: theme.pale,
        },
        '& label.Mui-focused': {
            color: theme.green.dark,
        },
        '&.Mui-required':{
            color: 'red'
        }
    },
    helper: {
        color: theme.orange.darkest,
        fontFamily: theme.font,
        fontSize: 12

    },
    login: {
       
        color: theme.green.darkest,
        // marginTop: 20,
        // marginBottom: 10,
        // padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: "14px",
        textTransform: 'none',
        borderRadius: theme.button.radius,
        '&:hover':{
            
            textTransform: 'none',
            backgroundColor: theme.pale,
            borderRadius: theme.button.radius,
            color: theme.green.darker,
           
        },
        '&:focused': {
            textDecoration: 'none',
            oultine: 0
        }
    },
    text: {
        fontSize: "14px",
        color: theme.green.darker,
        fontFamily: theme.font,
    }
})
export default style;