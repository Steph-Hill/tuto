import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TextInput} from 'react-native'
import React, { useState } from 'react'

const initTask = [

    {
        id:1,
        tache : 'aller à grand riviere'
    },
    {
        id:2,
        tache : 'Faire un repas economique'
    },
]



const Todo = () => {

    

    const [tasks, setTasks]= useState(initTask)
    
    const [valText, setText] = useState()

    /* Création de composant header */
    const HeaderTodo = () => {
        return(

                <View>

                        <TextInput
                        style={styles.input}
                        onChange={setText}
                        value={valText}
                        
                        />

                        <Button
                        color={'#82660E'}
                        title="Valide"
                        onPress={ajouter}
                        />

                </View>
        )
     }

     /* Fonction qui créé l'action pour ajouter */
     const ajouter = () => { 
        
        console.log('first',tasks.length) //permet de connaitre le nombre avec length
        //ajout dynamiquement une tache
        setTasks ([
            ...tasks,
            {
                id: tasks.length+1, //ajoute un id avec le calcule suivant : nombre d'objets du tableau + 1
                tache:valText
            
            }
        ]),
        setText("")/* remise a zero */
        
        
      }

     

     
  return ( 
    <SafeAreaView>
     
     <FlatList
        data={tasks}
        renderItem={({item})=><Text>{item.tache}</Text>}
        ListHeaderComponent={<HeaderTodo/>} //ajout de mon header
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    
  )
}

export default Todo

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      bouton:{

        width:100,
        height:20
      }
})