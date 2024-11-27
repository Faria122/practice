import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View style={styles.iconContainer}>
           <Image  
              source={icon}
              resizeMode="contain"
              style={[styles.icon, { tintColor: color }]}
      
           /> 
           <Text style={[
          styles.text,
          { color: color, fontWeight: focused ? "600" : "400" },
        ]}>
            {name}
           </Text>
        </View>
    )
}


const Tabslayout = () => {
  return (

    <>

    <Tabs

screenOptions={ {
    tabBarShowLabel : true  
 }}
    
    >
    <Tabs.Screen
    name = 'home'
    options={{
        title: 'Home',
        headerShown:false,
        tabBarIcon: ({color, focused}) =>(
            <TabIcon
              icon = {{uri:'https://cdn-icons-png.flaticon.com/128/263/263115.png'}}
              color = {color}
              name = "Home"
              focused = { focused }
            />
        )
    }}
    />

<Tabs.Screen
    name = 'scanner'
    options={{
        title: 'Scanner',
        headerShown:false,
        tabBarIcon: ({color, focused}) =>(
            <TabIcon
              icon = {{uri:'https://cdn-icons-png.flaticon.com/128/263/263115.png'}}
              color = {color}
              name = "Scanner"
              focused = { focused }
            />
        )
    }}
    /> 
    <Tabs.Screen
    name = 'details'
    options={{
        title: 'Details',
        headerShown:false,
        tabBarIcon: ({color, focused}) =>(
            <TabIcon
              icon = {{uri:'https://cdn-icons-png.flaticon.com/128/263/263115.png'}}
              color = {color}
              name = "Details"
              focused = { focused }
            />
        )
    }}
    />
    </Tabs>
    </>
   
  )
}


const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 10,
  },
});




export default Tabslayout

