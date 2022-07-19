import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lundi from './Lundi'

const Jourdelasemaine = ({jour}) => {
  return (
    <View>
      <Text>{jour}</Text>
    </View>
  )
}

export default Jourdelasemaine

const styles = StyleSheet.create({})