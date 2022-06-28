import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, Text, TextInput } from 'react-native'
import Player from '../components/Player'
import { GameContexts } from '../GameContext'

const Players = () => {
    const navigation = useNavigation();
    const {players,setPlayers}= useContext(GameContexts) // players' list
    const [playerInput, setPlayerInput] = useState('') // player's input value

    //add a player to the players' list
    function addPlayer(){
      const newPlayer = {pseudo:playerInput, position: 0}
      if(checkPlayerPseudo(newPlayer.pseudo)){
        // reset the player's input value
        setPlayerInput('')
        // update the players' list
        return setPlayers([...players,newPlayer])
      }
    }
    //remove a player from the players' list
    function deletePlayer(playerPseudo){
      setPlayers(players.filter(p => p.pseudo != playerPseudo))
    }
    //check player pseudo
    function checkPlayerPseudo(pseudo){
      // check player's pseudo length
      if(pseudo.length < 3){
        console.log("Player pseudo must be at least 3 characters long")
        return false
      }
      // check player's pseudo is unique
      if(players.filter(player => player.pseudo === pseudo).length > 0){
        console.log("Player pseudo must be unique")
        return false
      }
      return true
    }
  return (
    <SafeAreaView>
        <StatusBar/>
        {/* Screen's Title */}
        <Text>Ajouter un joueur!</Text>

        {/* for each player return a component */}
        <FlatList 
        data={players}
        renderItem={( {item} ) => <Player player={item} delete={deletePlayer}/>}
        keyExtractor={(player) => player.pseudo}
        showsVerticalScrollIndicator={false}
        />

        {/* player's input */}
        <TextInput
          value={playerInput}
          onChangeText={(e)=>setPlayerInput(e)}
          placeholder="nom du joueur"
          maxLength = {15}
          style={{borderWidth: 1,padding:5}}
        />

        {/* button to add player */}
        <Button title='+' onPress={()=>addPlayer()}/>

        {/* button to add player */}
        <Button disabled={players.length > 0 ? false : true} title="Play" onPress={() => navigation.navigate('BoardGame')}/>
    </SafeAreaView>
  )
}

export default Players