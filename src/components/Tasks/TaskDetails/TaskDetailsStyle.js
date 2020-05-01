const style = (theme) => ({
    right: {
        // backgroundColor: theme.pale,
        height: '110vh'
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
        
    },
    left: {
        
    },
    rootList: {
        
        
        font: theme.font,
        fontSize: 18,
        marginTop: 30,
        marginBottom: 30,
        fontFamily: theme.font,
        
      },
      avatar: {
          backgroundColor: theme.pale,
          padding: 2
          
      },
     
      listItemText1: {
        font: theme.font,
        fontSize: 16,
        fontFamily: theme.font,
      },
      listItemText2: {
        font: theme.font,
        fontSize: 14,
        fontFamily: theme.font,
      },
      btnContainer: {
        display: "flex",
        justifyContent: "center",
        alignIems: "center"
      },
      button: {
        backgroundColor: theme.blue.darkest,
        color: theme.orange.light,
        marginTop: 20,
        marginBottom: 20,
        
        padding: 7,
        paddingLeft: 25,
        paddingRight: 25,
        fontFamily: theme.font,
       
        fontSize: "12px",
        borderRadius: theme.button.radius,
        '&:hover':{
            backgroundColor: theme.green.darker,
            color: theme.orange.light
        }
      },
      

})
export default style;