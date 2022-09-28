import React from 'react'
import { ImageBackground, Modal, StyleSheet, Text, View } from 'react-native'
import Theme from '../Theme'
import Styles from "../Styles"

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
      <View style={{flex: 1, alignItems: "center",justifyContent:'center',backgroundColor: Theme.BLUR_EFFECT_COLOR }}>
        {/* Modal Content */}
        <View style={style.caseModal}>
            {/* Rule's icon */}
            <View style={[Styles.roundedFull,style.roundIcon]}>
              {/* Icon */}
              {props.case !== undefined ?
              <ImageBackground
                source={props.case.image}
                resizeMode="cover"
                style={{flex: 1, justifyContent: "center", margin: '15%'}}
                tintColor='white'
              />
              
              : <Text>not found</Text>}

            </View>
            {/* Rule's text */}
            {props.case !== undefined ? <Text style={{fontSize:20,color:Theme.TEXT_MAIN_COLOR, width: '80%'}}>{props.case.rule}</Text> : <Text>not found</Text>}
            {/* list of players  */}
            { players() }
        </View>
      </View>
    </Modal>
  )
}

const style = StyleSheet.create ({
  caseModal:{
    width: '90%',
    height: '40%',

    backgroundColor: Theme.PRIMARY_BACKGROUND_COLOR, 
    borderRadius: 20,
    borderWidth: 5,
    borderColor: Theme.INPUT_MAIN_BORDER_COLOR,
    opacity: 1,

    position: 'relative', 
    display: 'flex',
    alignItems: "center",
    justifyContent:'center',

  },
  roundIcon:{
    position: 'absolute',
    top: '-10%',
    borderWidth: 3,
    borderColor: Theme.INPUT_MAIN_BORDER_COLOR,
    padding: '3%',
    margin: '0.8%',
    width: '20%',
    height: undefined,
    aspectRatio: 1 / 1,
    backgroundColor: Theme.INPUT_MAIN_BACKGROUND_COLOR,
  }
})

export default CaseModal