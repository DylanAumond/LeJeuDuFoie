import React from 'react'
import { Text, View } from 'react-native'

const PlayerPawn = ({player}) => {
  return (
    <View style={{backgroundColor: player.color, borderColor: 'yellow',width: 20, height: 20}}></View>
  )
}

export default PlayerPawn