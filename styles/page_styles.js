import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    Homepage: {
      flex: 1,
      backgroundColor: '#71BC78',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',   
    },

    buttonLayout:{
      borderWidth: 2,
      height: "85%",
      width: '85%',
      position: 'absolute',
      borderColor: 'blue',
      backgroundColor: '#CA96FD',
      margin:5,
    },

    buttonContainer:{
      flex: .1,
      top: 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#CA96FD',
      padding: 28,
    },

    msTitle:{
      top: 10,
      color: 'white',
      fontSize: 40,
      textAlign: 'center',
    },

    button:{
    },

    buttonIcon:{
      justifyContent: 'center',
      alignItems: 'center',
      width:300,
      height: 80,
    },

 });

  export default styles;
