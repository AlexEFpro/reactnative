import { View } from "react-native"
import { Link, Stack } from "expo-router"

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title:"Ooops something was wrong"}}/>
    <View>

       <Link href={"/"}>Back to home!</Link>
    </View>
    </>
    
  )
}
