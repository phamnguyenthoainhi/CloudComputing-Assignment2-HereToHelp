const style = (theme) => ({
    card: {
        minWidth: 300,
        fontFamlily: theme.font,
       
        backgroundColor: 'white',
        margin: 20
    },
    container: {
        backgroundColor: 'whitesmoke',
        height: "100vh"
    },
    title: {
        color: theme.green.dark,
        fontSize: 18
    },
    textbody: {
        
        fontSize: 14
    },
    description: {
        marginTop: 15
    },
    info: {
        marginBottom: 15
    },
    action : {
        display: "flex",
        justifyContent: "center",
        alignIems: "center"
    },
    selectBtn: {
        backgroundColor: theme.green.darkest,
        color: theme.pale,
        marginTop: 0,
        marginBottom: 10,
        padding: 7,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: "12px",
        borderRadius: theme.button.radius,
        '&:hover':{
            backgroundColor: theme.green.darker,
            color: theme.orange.light
        }
    },
    skeleton: {
        margin: 20,
        minWidth: 300,
        backgroundColor: '#F4F3ED',
        margin: 20,
        minHeight: 250
    },
    card: {
        paddingTop: 20,
        paddingBottom: 20,
        // paddingLeft: 10,
        // paddingRight: 10
    },
    grid: {
        paddingLeft: 20,
        paddingRight: 20
    }


      
      
})
export default style;