const style = (theme) => ({
    card: {
        minWidth: 300,
        fontFamlily: theme.font,
        minHeight: 600,
        backgroundColor: '#F4F3ED',
        margin: 20
    },
    title: {
        color: theme.green.darker,
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
        marginTop: 20,
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
    }


      
      
})
export default style;