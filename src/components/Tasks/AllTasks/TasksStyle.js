const style = (theme) => ({
    card: {
        minWidth: 300,
        fontFamlily: theme.font,
       
        backgroundColor: 'white',
        margin: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    container: {
        backgroundColor: 'whitesmoke',
        height: "100vh"
    },
    title: {
        color: theme.green.dark,
        fontSize: 18,
        fontFamily: theme.font,
    },
    textbody: {
        
        fontSize: 14,
        fontFamily: theme.font,
    },
    description: {
        marginTop: 15,
        fontFamily: theme.font,
    },
    info: {
        marginBottom: 15,
        fontFamily: theme.font,
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
        fontFamily: theme.font,
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
        
        minHeight: 250
    },
    grid: {
        paddingLeft: 20,
        paddingRight: 20
    }
    
})
export default style;