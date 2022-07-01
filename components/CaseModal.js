import React from 'react'
import { Modal, Text, View } from 'react-native'

const CaseModal = ({...props}) => {
  const players = () => { 
    if (players.length > 0) {
      console.log(players)
    props.players.map((player)=> {<Text>{player.pseudo}</Text>}) 
    }
    return (<Text> Il n'y a pas de joeueur sur cette case</Text>)
  }
  return (
    <Modal
        transparent={true}
        visible={props.isOpen}
    >
        {/* Modal Content */}
        <View style={{width: '100%',height: '40%',backgroundColor: 'white',marginTop: '50%'}}>
            {props.case !== undefined ? <Text>{props.case.rule}</Text> : <Text>not found</Text>}
            { players()}
        </View>
    </Modal>
  )
}

export default CaseModal