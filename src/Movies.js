import React from 'react'
import { View, ScrollView, Text, StyleSheet, Button, Image } from 'react-native'
import {movies} from './Data'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation, StackActions } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function MovieCard(movie){
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Details',{selected: movie})}>
            <Image style={styles.imageContainer} source={{uri:movie.poster}}/>
            <Text style={styles.dataTitle}>{movie.title}</Text>
        </TouchableOpacity>
    )
}


function Movies(){
    return(
        <View>
            <Text style={styles.desc}>Now Showing</Text>
                <View style={styles.dataContainer}>
                    {movies.map((movie, index)=>(
                        <View style={styles.movieContainer}>
                            {MovieCard(movie)}
                        </View>
                ))}
            </View>
        </View>  
    )
}

export default Movies

const styles = StyleSheet.create({
    desc:{
        color: "#05386b",
        marginTop:30,
        marginLeft:30,
        marginBottom: 10,
        // fontWeight:'bold',
        fontSize:20
    },
    dataContainer:{
        // backgroundColor: "#05386b",
        backgroundColor: "#edf5e1",
        paddingVertical:30,
        borderRadius: 30,
        display:"flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    movieContainer:{
        // marginTop:40,
        display:"flex",
        flexDirection: "column",
        flexBasis: "33.33%"
    },
    imageContainer:{
        height:148,
        width: 100,
        alignSelf: "center"
    },
    dataTitle:{ 
        paddingHorizontal: 10,
        fontSize:15,
        marginBottom:30,
        alignSelf: "center",
        textAlign:"center",
        color:"#05386b",
        // color:"#edf5e1",
    }, 
    
})
