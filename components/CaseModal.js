import React from 'react'
import { Modal, Text, View } from 'react-native'

const CaseModal = ({...props}) => {
  // return all players on the selected case
  const players = () => {
    // check if at least a player is on the selected case
    if (props.playersOnCase.length > 0) {
      //for each player on the selected case return the player's pseudo
     return props.playersOnCase.map((player,index)=> <Text key={index}>{player.pseudo}</Text>) 
    }
    // if no players are on the selected case
    return (<Text> Il n'y a pas de joueur sur cette case</Text>)
  }
  return (
    <Modal
        transparent={true}
        visible={props.isOpen}
    >
        {/* Modal Content */}
        <View style={{width: '100%',height: '40%',backgroundColor: 'white',marginTop: '50%'}}>
            {props.case !== undefined ? <Text>{props.case.rule}</Text> : <Text>not found</Text>}
            {/* list of players  */}
            { players()}
        </View>
    </Modal>
  )
}

export default CaseModal