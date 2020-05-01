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
        paddingBottom: 10,
        fontFamily: theme.font,
    },
    
    hello: {
        color: "black",
        fontFamily : theme.font,
        fontWeight: 900,
        fontSize: 24,
        marginTop: 50,
        marginBottom: 50,
        
    },
    avatar: {
        backgroundColor: theme.pale,
        padding: 2
        
    },
   
    listItemText1: {
      
      fontSize: 14,
      fontFamily: theme.font,
    },
    listItemText2: {
      
      fontSize: 12,
      fontFamily: theme.font,
    },
    row: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle",
        
    },
    id: {
        marginTop: '50%',
        backgroundColor: theme.blue.dark
    },
    table: {
        // backgroundColor: theme.blue.darker,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10
      },
      tbody: {
          marginTop: 40
      },
      completebtn: {
        backgroundColor: theme.blue.dark,
        fontFamily: theme.font,
        color: theme.pale,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: "12px",
        transitionDuration: '0.4s',
        borderRadius: theme.button.radius,
        border: "2px solid #51617D",
        '&:hover':{
            backgroundColor: 'white',
            color: theme.blue.darker,
            
            marginTop: 20,
            marginBottom: 10,
            padding: 10,
            paddingLeft: 25,
            paddingRight: 25,
            fontSize: "12px",
            
            border: "2px solid #51617D",
        }
      },
      btngroup: {
        backgroundColor: 'transparent',
        border: "2px solid white",
        fontFamily: theme.font,
        fontSize: "14px",
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 2,
        marginBottom: 10,
        color: "black",
        // borderBottom: "2px solid #1e2f45",
        textAlign: 'center',
        fontWeight: 500
        // textDecoration:"underline"
        
      },
      home: {
        backgroundColor: 'transparent',
        border: "2px solid white",
        fontFamily: theme.font,
        fontSize: "14px",
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        marginBottom: 10,
        color: "black",
        
        
        fontWeight: 500,
        '&:hover':{
            color: "black",
            fontWeight: 700,
        }
        
      }
})
export default style;