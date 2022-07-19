import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Affichestagiaire = ({nom,prenom}) => {
  return (
    <View>
      <Text>Bonjour, {nom} {prenom}</Text>
    </View>
  )
}

export default Affichestagiaire

const styles = StyleSheet.create({})