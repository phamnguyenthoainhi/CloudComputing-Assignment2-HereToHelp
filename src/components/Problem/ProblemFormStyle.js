const style = (theme) => ({
    form: {
        // backgroundColor: theme.pale,
        paddingLeft: 150,
        paddingRight: 150,
        paddingTop: 50,
        fontFamily: theme.font,
       
            
    },
    tittle: {
        fontWeight: 500,
        color: theme.green.dark,
        paddingBottom: 20

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
        
        
        backgroundColor: theme.green.dark,
        color: theme.orange.dark,
        marginTop: 40,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: "14px",
        borderRadius: theme.button.radius,
        '&:hover':{
            backgroundColor: theme.orange.dark,
            color: theme.green.darker
        }
        
    }
    
})
 export default style;