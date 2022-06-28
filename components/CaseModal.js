import React from 'react'
import { Modal, Text, View } from 'react-native'

const CaseModal = ({...props}) => {
  return (
    <Modal
        transparent={true}
        visible={props.isOpen}
    >
        {/* Modal Content */}
        <View style={{width: '100%',height: '40%',backgroundColor: 'white',marginTop: '50%'}}>
            {props.case !== undefined ? <Text>{props.case.rule}</Text> : <Text>not found</Text>}
        </View>
    </Modal>
  )
}

export default CaseModal