import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { GameContexts } from '../GameContext'

import Theme from '../Theme'
import Styles from '../Styles'

const Win = () => {
    const navigation = useNavigation();

    // get the game's context
    const {
      players,setPlayers,  // players' list
      currentPlayer,setCurrentPlayer // current player
    }= useContext(GameContexts)

    // reset all players' position
    function resetPlayersPosition(players){
        return players.map((player) => {
            return { ...player, position: 0}
        })
    }


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Theme.MAIN_BACKGROUND_COLOR, justifyContent: 'space-around', alignItems: 'center'}}>
        <View>
            <Text>WIN</Text>

        {/* button next */}
        <TouchableOpacity title="Play" style={[Styles.button, Style.btn]}
            onPress={() => 
            {
                // reset players' position
                setPlayers(resetPlayersPosition(players))

                // reset current player
                setCurrentPlayer(0)
                
                // go back to the players's page
                navigation.navigate('Players');
            }}
          >
            <Text style={Styles.TextButton}>Play</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const Style = StyleSheet.create ({
    btn : {
      marginBottom : 70,
    }
  })

export default Win