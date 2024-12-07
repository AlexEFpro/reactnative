import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#346dee",
    }} >

    <Tabs.Screen name="index" options={{
      title: 'XAFitness', 
      tabBarIcon: ({focused,color})=> (
      <Ionicons 
        name={focused ? "home-sharp" : "home-outline"}

         size={20}/>)
      }}/>
    <Tabs.Screen name="dashboard" options={{
      title: 'Dashboard',
      tabBarIcon: (focused)=>(<Ionicons 
        name={focused ?  "clipboard-sharp":"clipboard-outline"} 
        size={20}
        />
      )
      }}/>
    <Tabs.Screen name="formview" options={{
      title: 'Form View',
      tabBarIcon: (focused)=>(<Ionicons 
        name={focused ?  "list-outline":"list-sharp" } 
        size={20}/>)

      }}/>
    <Tabs.Screen name="workoutview" options={{
      title: 'Workout View',
      tabBarIcon: (focused)=>(<Ionicons 
        name={focused ?  "barbell-outline": "barbell-sharp"} 
        size={20}/>)
      }}/>
    </Tabs>
  );
}
