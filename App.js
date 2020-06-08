import * as React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import Ionicon from 'react-native-vector-icons/Ionicons'
// import Movies from './src/Movies'
import Menu from './src/Help'
import {movies} from './src/Data'
import BookMenu from './src/Details'

function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <ScrollView>
        <FontistoIcon name="ticket-alt" style={styles.icon}/>
        <Text style={styles.title}>Tickets - Experience Cinema</Text>
        <View style={styles.contentContainer}>
          {/* <Movies /> */}
          <Text style={styles.desc}>Now Showing</Text>
          <View style={styles.dataContainer}>
            {movies.map((movie, index)=>(
              <View style={styles.movieContainer}>
                {/* {MovieCard(movie)} */}
                <TouchableOpacity onPress={()=>navigation.navigate("Details",{selected:movie})}>
                  <Image style={styles.imageContainer} source={{uri:movie.poster}}/>
                  <Text style={styles.dataTitle}>{movie.title}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>  
        <View style={styles.contentContainer}>
          <Text style={styles.desc}>Other Options</Text>
          <View style={styles.dataContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Help')} style={styles.button}>
              <Ionicon name="md-help" style={styles.smallIcon}/>
              <Text style={styles.btnText}>Help and Guide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

function HelpScreen(){
  return(
    <Menu/>
  )
}

function DetailsScreen({route}){
  const {selected} = route.params
  return(
    <BookMenu movie={selected}/>
  )
}

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Help" component={HelpScreen}
          options={{
            headerShown: false
        }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} 
          options={{
            title: "Movie Details and Showings",
            headerStyle: {
                backgroundColor: '#edf5e1',
                // elevation: 0
            },
            headerTitleStyle: {
                color: "#05386b",
            }}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles=StyleSheet.create({
  desc:{
    color: "#05386b",
    marginTop:30,
    marginLeft:30,
    marginBottom: 10,
    // fontWeight:'bold',
    fontSize:20
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
  dataContainer:{
    backgroundColor: "#edf5e1",
    paddingVertical:30,
    borderRadius: 30,
    display:"flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  icon:{
    fontSize:100,
    color: '#05386b',
    alignSelf:"center",
    marginTop: 80
  },
  smallIcon:{
    fontSize:20,
    marginRight:20,
    color: '#05386b',
  },
  title:{
      marginTop: 10,
      marginBottom: 30,
      fontSize: 28,
      // color: '#edf5e1',
      color: '#05386b',
      alignSelf: "center",
      // textShadowColor: '#edf5e1',
      // textShadowOffset: {width: -1, height: 1},
      // textShadowRadius: 10
      fontWeight: 'bold'
  },
  container:{
    flex:1,
    height:"auto",
    backgroundColor:"#5cdb95",
  },
  contentContainer:{
    backgroundColor: '#8ee4af',
    borderRadius: 30,
    height: 'auto',
    marginBottom:50,
    paddingBottom:30
},
  navbutton:{
    marginTop: 20,
  },
  button: {
    backgroundColor: "transparent",
    marginLeft: 30,
    display:"flex",
    flexDirection:"row"
  },
  btnText:{
      color: "#05386b",
      fontSize: 17
  }
})