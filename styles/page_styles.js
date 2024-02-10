// page_styles.js
import { StyleSheet } from 'react-native';

const CELL_SIZE = 40; // Assuming CELL_SIZE is constant

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
    borderColor: 'blue',
    backgroundColor: '#CA96FD',
    margin: 5,
  },
  buttonContainer: {
    flex: .1,
    top: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CA96FD',
    padding: 28,
  },
  msTitle: {
    top: 10,
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
  button: {
    // Add styles if needed
  },
  buttonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 80,
  },
  // Newly added styles from easyGame.js
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
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
