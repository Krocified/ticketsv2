import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Modal, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'

function GenerateCode(){
    let result =""
    const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for(var i=0;i<6;i++){
        result+=alph.charAt(Math.floor(Math.random()*alph.length))
    }
    return(
        <Text style={styles.dataConfirm}>Confirmation Code: {result}</Text>
    )
}


function Details({route, navigation}){
    const [selectedDay, setDay] = useState("")
    const [selectedTime, setTime] = useState("")

    const movie = route.params.selected

    return(
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.imageContainer} source={{uri:movie.poster}}/>
                <Text style={styles.dataTitle}>{movie.title}</Text>
                <Text style={styles.dataGenre}>{movie.genre}</Text>
                <View style={styles.daysContainer}>
                    {movie.days.map((day)=>(
                        <TouchableOpacity 
                            style={selectedDay===day ?  styles.activeDataDays : styles.dataDays}
                            onPress={()=>setDay(day)}
                        >
                            <Text 
                                style={selectedDay===day ?  styles.activeTextDays : styles.textDays}
                            >
                                {day}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.dataDesc}>Available Showtimes</Text>
                <View style={styles.timesContainer}>
                    {movie.times.map((time)=>(
                        <TouchableOpacity 
                            style={selectedTime===time ? styles.activeDataTimes: styles.dataTimes}
                            onPress={()=>setTime(time)}
                        >
                            <Text 
                                style={selectedTime===time ?  styles.activeTextTimes : styles.textTimes}
                            >{time}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.submitBtnContainer}>
                    {/* <Text style={styles.dataGenre}>{selectedDay}</Text>
                    <Text style={styles.dataGenre}>{selectedTime}</Text> */}
                    <TouchableOpacity 
                        style={styles.submitBtn}
                        onPress={()=>navigation.navigate("Confirm", {
                            title: movie.title,
                            day: selectedDay,
                            time: selectedTime
                        })}
                    >
                        <Text style={styles.btnText}>
                            Book Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

function confirmBook({route, navigation}){

    const [showCode, setShowCode] = useState(false)

    const title = route.params.title
    const day = route.params.day
    const time = route.params.time

    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.dataConfirm}>Your ticket for a showing of {title} will be valid for {day} at {time}.</Text>
                <Text style={styles.dataConfirm}>Do you wish to proceed?</Text>
                <View style={styles.submitBtnContainer}>
                    <TouchableOpacity 
                        style={styles.submitBtn}
                        onPress={()=>{
                            Alert.alert("Confirmation","Your ticket(s) were confirmed. Please SCREENSHOT and/or TAKE NOTE OF the confirmation code to redeem the tickets at the cinema. Enjoy!")
                            setShowCode(true)
                        }}
                    >
                        <Text style={styles.btnText}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.submitBtnContainer}>
                    <TouchableOpacity 
                        onPress={()=>navigation.goBack()}
                    >
                        <Text style={styles.backBtnText}>
                            Go Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    {showCode? GenerateCode():()=>{}}
                </View>
            </ScrollView>
        </View>
    )

}

const Stack = createStackNavigator()

function BookMenu(props){
    const movie = props.movie

    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen 
                name="Details" 
                component={Details} 
                initialParams={{selected:movie}}
                options={{
                    title: "Details",
                    headerStyle: {
                        backgroundColor: '#edf5e1',
                        elevation: 0
                    },
                    headerTitleStyle: {
                        color: "#05386b",
                    }
                }}
            />
            <Stack.Screen name="Confirm" component={confirmBook} />
        </Stack.Navigator>
    )
}

export default BookMenu

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:"auto",
        backgroundColor:"#edf5e1",
      },
    imageContainer:{
        marginTop:50,
        height:444,
        width: 300,
        alignSelf: "center"
    },
    dataTitle:{ 
        paddingHorizontal: 10,
        fontSize:30,
        fontWeight: "bold",
        marginTop:20,
        alignSelf: "center",
        textAlign:"center",
        color:"#05386b",
        // color:"#edf5e1",
    }, 
    dataConfirm:{
        paddingHorizontal: 10,
        fontSize:20,
        fontWeight: "bold",
        marginTop:20,
        alignSelf: "center",
        textAlign:"center",
        color:"#05386b",
        // color:"#edf5e1",
    },
    dataGenre:{
        paddingHorizontal: 10,
        fontSize:15,
        marginTop:5,
        alignSelf: "center",
        textAlign:"center",
        color:"#05386b",
    },
    backBtnText:{
        paddingHorizontal: 10,
        fontSize:20,
        marginTop:-5,
        alignSelf: "center",
        textAlign:"center",
        color:"#05386b",
    },
    dataDesc:{
        paddingHorizontal: 10,
        fontSize:20,
        marginTop:30,
        alignSelf: "center",
        textAlign:"center",
        color:"#05386b",
        fontWeight:"bold",
    },
    daysContainer:{
        paddingTop:30,
        display:"flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center",
    },
    dataDays:{
        backgroundColor:"#edf5e1",
        borderRadius:20,
        borderWidth:1.5,
        borderColor:"#05386b",
        paddingVertical:10,
        paddingHorizontal:55,
        marginHorizontal:20,
        flexBasis:"50%",
    },
    activeDataDays:{
        backgroundColor:"#05386b",
        borderRadius:20,
        borderWidth:1.5,
        borderColor:"#05386b",
        paddingVertical:10,
        paddingHorizontal:55,
        marginHorizontal:20,
        flexBasis:"50%",
    },
    textDays:{
        color:"#05386b",
        fontWeight:"bold"
    },
    activeTextDays:{
        color:"#edf5e1",
        fontWeight:"bold"
    },
    timesContainer:{
        paddingTop:20,
        display:"flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center",
    },
    dataTimes:{
        alignItems:"center",
        width:82,
        borderWidth:1,
        borderColor:"#05386b",
        borderRadius:20,
        padding:10,
        marginHorizontal:10,
        marginVertical:5,
        flexBasis:"25%"
    },
    activeDataTimes:{
        backgroundColor:"#05386b",
        alignItems:"center",
        width:82,
        borderWidth:1,
        borderColor:"#05386b",
        borderRadius:20,
        padding:10,
        marginHorizontal:10,
        marginVertical:5,
        flexBasis:"25%"
    },
    textTimes:{
        color:"#05386b",
        fontWeight:"bold"
    },
    activeTextTimes:{
        color:"#edf5e1",
        fontWeight:"bold"
    },
    submitBtnContainer:{
        justifyContent:"center",
        alignItems:"center",
    },
    submitBtn:{
        backgroundColor:"#05386b",
        borderRadius:20,
        paddingHorizontal:80,
        paddingVertical:20,
        marginHorizontal:10,
        marginVertical:30,
        // width:100,
    },
    btnText:{
        color:"#edf5e1",
        fontSize:20,
        fontWeight:"bold"
    }
})