import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  body:{
    backgroundColor:'black'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  largeHeading: {
    fontSize: 60,
 
    //textAlign: 'center',
    fontStyle: 'bold',
   
  }, mediumHeading: {
    fontSize:80,
    textAlign: 'center',
    fontStyle: 'bold'
    
  }, headingColor:{
    ...Platform.select({
      android:{
        color:'yellow'
      },
      ios:{
        color:'red',
      },
      default:{
        color:'blue'
      }
    })
  }
});


export default styles;
