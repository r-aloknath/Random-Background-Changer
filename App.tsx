import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App():JSX.Element {
  const [randomBackgroound, setrandomBackgroound] = useState('#ffffff');
  const generateColor = () =>{
    const hexRange = '01234567891ABCDE'
    let color = "#"

    for(let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random()*16)]
    }
    setrandomBackgroound(color);
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackgroound} />
    <View style={[styles.container,{backgroundColor:randomBackgroound}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press ME</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:'#61AB4D',
    paddingVertical:10,
    paddingHorizontal:10
  },
  actionBtnTxt:{
    fontSize:24,
    color:'#ffffff',
    textTransform:'uppercase'
  }
})