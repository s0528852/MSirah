import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import {  Link } from 'expo-router'; 
import Styles from '../styles/page_styles.js';


// IMAGES IMPORTS
import imposModeGif from '../Images/imposMode.gif'; 
import medModeGif from '../Images/medMode.gif'; 
import easyModeGif from '../Images/easyMode.gif'; 
import hardModeGif from '../Images/hardMode.gif';


export default function Pages() {
  return (
    <View style={Styles.Homepage}>

      <View style={Styles.buttonLayout}>
      
      <View>
          <Text style={Styles.msTitle}>MEME SWEEPER</Text>
      </View>

          {/* Easy Mode */}
          <TouchableOpacity style={Styles.buttonContainer}>
            <Text>EASY MODE 2 BOMBS</Text>
            <Text></Text>
           <Link href={{pathname: "/easyGame"}}>
            <Image source={easyModeGif} style={Styles.buttonIcon} />  
           </Link>
          </TouchableOpacity>

          {/* Medium Mode */}
          <TouchableOpacity style={Styles.buttonContainer}>
            <Text>MEDIUM MODE 5 BOMBS</Text>
            <Text></Text>
           <Link href={{pathname: "/medGame",}}>
                <Image source={medModeGif} style={Styles.buttonIcon} />  
            </Link>
          </TouchableOpacity>
    
              {/* Hard Mode */}
          <TouchableOpacity style={Styles.buttonContainer}>
          <Text>! HARD MODE 12 BOMBS !</Text>
            <Text></Text>
           <Link href={{pathname: "/hardGame",}}>
                <Image source={hardModeGif} style={Styles.buttonIcon} />  
            </Link>
          </TouchableOpacity>
          
              {/* Impossible Mode */}
                     <TouchableOpacity style={Styles.buttonContainer}>
                     <Text>!! IMPOSSIBLE MODE 24 BOMBS !!</Text>
            <Text></Text>
           <Link href={{pathname: "/imposGame",}}>
                <Image source={imposModeGif} style={Styles.buttonIcon} />  
            </Link>
          </TouchableOpacity>

          

          <StatusBar style="auto" />
        </View>
      </View>
    
  );
}
