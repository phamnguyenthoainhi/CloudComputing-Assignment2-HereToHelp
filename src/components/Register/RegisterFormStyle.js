const style = (theme) => ({
    grid: {
        fontFamily: theme.font,
    },
    left: {
        // backgroundColor: theme.orange.light,
        // alignContent: "center",
        position: "relative",
        // padding: 60,
        // height: 600,
        // height: '100vh'
       
    },
    img: {
        position: "absolute", 
        margin: "auto", 
        top: 0, 
        left: 0,
        right: 0,
        bottom: 0,
    },
    right: {
        // backgroundColor: theme.pale,
        alignContent: "center",
        display: "grid",
        paddingLeft: 80,
        paddingRight: 80,
        height: "100vh",
        fontFamily: theme.font
        
    },
    form: {
        backgroundColor: "white",
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 40,
        paddingBottom: 40
    }, 
    tittle: {
        fontWeight: 500,
        color: theme.green.dark,
        paddingTop: 10
    },
    input: {
        paddingBottom: 15,
        fontSize: '20px',
        fontFamily: theme.font,
        color: theme.green.darker,
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.orange.dark,
        },
        '& .MuiInput-underline:hover': {
            borderBottomColor: theme.pale,
        },
        '& label.Mui-focused': {
            color: theme.green.dark,
        }
    },
    button:{
        
        fontFamily: theme.font,
        backgroundColor: theme.green.darker,
        color: theme.pale,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: "14px",
        borderRadius: theme.button.radius,
        '&:hover':{
            backgroundColor: theme.green.dark,
            color: theme.orange.light
        }
        
    },
    successbutton:{
        
        
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
            
            color: theme.orange.darkest
        }
        
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
            color: theme.green.darker
            // color: theme.orange.light
        }
    },
    text: {
        fontSize: "14px",
        color: theme.green.dark,
        fontFamily: theme.font,
    }
    
})
export default style;