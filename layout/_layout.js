import { Stack } from 'expo-router';

export default function Layout() {
return (
<Stack screenOptions={{
headerTitle: "Nav Example",
headerStyle: { backgroundColor: 'red',},
headerTintColor: 'white',
headerBackVisible: false,
}}>
<Stack.Screen
name="index"
options={{
headerShown: true,
}}
/>
<Stack.Screen
name="easyGame"
options={{
headerShown: false,
presentation: 'modal',
}}
/>
</Stack>
);
}

