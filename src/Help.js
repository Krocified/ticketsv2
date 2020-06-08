import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Items({navigation}){
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.desc}>General</Text>
                <View style={styles.contentContainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Faq')} style={styles.helpItem}>
                        <MCIcons style={styles.helpDetail} name="comment-question-outline"/>
                        <Text style={styles.helpDetail}>Frequently Asked Questions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Tour')} style={styles.helpItem}>
                        <MCIcons style={styles.helpDetail} name="airplane"/>
                        <Text style={styles.helpDetail}>Application Tour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('About')} style={styles.helpItem}>
                        <MCIcons style={styles.helpDetail} name="information-outline"/>
                        <Text style={styles.helpDetail}>About Application</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.backBtnContainer}>
                    <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack()}>
                        <Text style={styles.backBtnText}>
                            Got it!
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

function Faq(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <TouchableOpacity  style={styles.helpItem}>
                        <MCIcons style={styles.helpDetail} name="comment-question-outline"/>
                        <Text style={styles.helpDetail}>I've lost the booking code! What should I do?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.helpItem}>
                        <MCIcons style={styles.helpDetail} name="comment-question-outline"/>
                        <Text style={styles.helpDetail}>Why can't I book a ticket for some showings?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.helpItem}>
                        <MCIcons style={styles.helpDetail} name="comment-question-outline"/>
                        <Text style={styles.helpDetail}>What do I do with the booking code?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.helpItem}>
                        <MCIcons style={styles.helpDetail} name="comment-question-outline"/>
                        <Text style={styles.helpDetail}>My booking code is not showing up! What do I do now?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
function Tour(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                <Text style={styles.helpDetail}>Home Page -> Pick a movie -> Pick day and time -> Confirm</Text>
                </View>
            </ScrollView>
        </View>
    )
}
function About(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                <Text style={styles.helpDetail}>This application is made for educational purposes.</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const Stack = createStackNavigator()

function Menu(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Help" 
                component={Items}
                options={{
                    title: "Help and Guides",
                    headerStyle: {
                        backgroundColor: '#edf5e1',
                        // elevation: 0
                    },
                    headerTitleStyle: {
                        color: "#05386b",
                    }
                }}
            />
            <Stack.Screen 
                name="Faq" 
                component={Faq} 
                options={{
                    title: "Frequently Asked Questions",
                    headerStyle: {
                        backgroundColor: '#edf5e1',
                        // elevation: 0
                    },
                    headerTitleStyle: {
                        color: "#05386b",
                    }
                }}
            />
            <Stack.Screen 
                name="Tour" 
                component={Tour}
                options={{
                    title: "Application Tour",
                    headerStyle: {
                        backgroundColor: '#edf5e1',
                        // elevation: 0
                    },
                    headerTitleStyle: {
                        color: "#05386b",
                    }
                }}
            />
            <Stack.Screen 
                name="About" 
                component={About}
                options={{
                    title: "About Application",
                    headerStyle: {
                        backgroundColor: '#edf5e1',
                        // elevation: 0
                    },
                    headerTitleStyle: {
                        color: "#05386b",
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default Menu

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#5cdb95",
        height: 1000
    },
    desc:{
        color: "#05386b",
        marginTop:30,
        marginLeft:30,
        marginBottom: 10,
        // fontWeight:'bold',
        fontSize:20
    }, 
    contentContainer:{
        padding:30,
        backgroundColor: '#8ee4af',
        borderRadius: 30,
        height: 'auto'
    },
    helpItem:{
        paddingVertical:15,
        display:"flex",
        flexDirection:"row"
    },
    helpDetail:{
        fontSize:18,
        marginRight:20,
        color: '#05386b',
    },
    navbutton:{
        marginTop: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "transparent",
        padding: 20,
    },
    btnText:{
        color: "#05386b",
        fontSize: 20
    },
    backBtnContainer:{
        justifyContent:"center",
        alignItems:"center",
    },
    backBtn:{
        backgroundColor:"#8ee4af",
        borderRadius:20,
        paddingHorizontal:80,
        paddingVertical:20,
        marginHorizontal:10,
        marginVertical:30,
        // width:100,
    },
    backBtnText:{
        color:"#05386b",
        fontSize:20,
        fontWeight:"bold", 
    },
    backBtnLogo:{
        color:"#05386b",
        fontSize:20,
        fontWeight:"normal", 
        marginRight: 10
    }
})