// page_styles.js
import { StyleSheet } from 'react-native';

const CELL_SIZE = 40; 

export default StyleSheet.create({

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
  
  buttonLayout: {
    borderWidth: 2,
    height: "85%",
    width: '85%',
    position: 'absolute',
    backgroundColor: '#71BC78',
    borderColor: '#71BC78',
    margin: 5,
  },

  buttonContainer: {
    flex: .1,
    top: 85,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71BC78',
    padding: 28,
  },

  msTitle: {
    top: 10,
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },

  button: {

  },
  buttonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 80,
  },


  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71BC78',
  },

  row: {
    flexDirection: 'row',
  },

  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },

  revealed: {
    backgroundColor: '#bbb',
  },

  score: {
    fontSize: 24,
    margin: 20,
  },

  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },

});
