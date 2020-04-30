const style = (theme) => ({
    container: {
        fontFamily : theme.font,

    },
    root: {
        backgroundColor: theme.blue.dark,
        display: "inline-block",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    welcome: {
        color: theme.orange.light,
        fontFamily : theme.font,
        fontWeight: 400,
        fontSize: 17
    },
    hello: {
        color: "white",
        fontFamily : theme.font,
        fontWeight: 900,
        fontSize: 24
    }
})
export default style;