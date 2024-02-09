import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import {  Link } from 'expo-router'; // Importing NativeRouter and Link
import Styles from '../styles/page-styles.js';
import imposModeGif from '../Images/imposMode.gif'; 
import medModeGif from '../Images/medMode.gif'; 
import easyModeGif from '../Images/easyMode.gif'; 
import hardModeGif from '../Images/hardMode.gif';


export default function HomePage() {
  return (
    <View style={Styles.Homepage}>

      <View>
          <Text style={Styles.msTitle}>MINE SWEEPER</Text>
      </View>
      <View style={Styles.buttonLayout}>
      
          {/* Easy Mode */}
          <TouchableOpacity style={Styles.buttonContainer}>
           <Link href={{pathname: "../Pages/easyGame"}}>
           <Image source={easyModeGif} style={Styles.buttonIcon} />  
            </Link>
          </TouchableOpacity>

          {/* Medium Mode */}
          <TouchableOpacity style={Styles.buttonContainer}>
           <Link href={{pathname: "/Pages/medGame",}}>
                <Image source={medModeGif} style={Styles.buttonIcon} />  
            </Link>
          </TouchableOpacity>
    
              {/* Hard Mode */}
          <TouchableOpacity style={Styles.buttonContainer}>
           <Link href={{pathname: "/Pages/hardGame",}}>
                <Image source={hardModeGif} style={Styles.buttonIcon} />  
            </Link>
          </TouchableOpacity>
          
              {/* Impossible Mode */}
                     <TouchableOpacity style={Styles.buttonContainer}>
           <Link href={{pathname: "/Pages/imposGame",}}>
                <Image source={imposModeGif} style={Styles.buttonIcon} />  
            </Link>
          </TouchableOpacity>

          

          <StatusBar style="auto" />
        </View>
      </View>
    
  );
}
