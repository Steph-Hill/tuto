import { StyleSheet, Text, View, Button } from 'react-native'
import React,{useState} from 'react'

const Compteur = () => {
    const [nombre,setNombre]=useState(0)
    
    /* Incrémentation de nombre*/
     const plus = () => {

        setNombre(nombre + 1)
     }

     /* Décrementer un nombre */
     const moins = () => { 

        setNombre(nombre -1)
     
    }

    /* Initialisation du nombre */
    const reset = () => { 
        
        setNombre(0)
    
    }
     
  return (
    <View>

      <Text > MON Compte Bancaire est à {nombre} €</Text>
      
            <Button
                title="Ajouter"
                onPress={plus}
            />
            <Button
                title="Soustraire"
                onPress={moins}
            />
            <Button
                title="Reset"
                onPress={reset}
            />
      <Text>bY Hillions</Text>
      
    </View>
  )
}

export default Compteur

const styles = StyleSheet.create({})