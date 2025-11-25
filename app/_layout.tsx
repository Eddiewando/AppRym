import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="main"
        options={{
          drawerLabel: 'Menu Principal',
          title: 'Rescue Your Mind',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="_setting"
        options={{
          drawerLabel: 'Ajustes',
          title: 'Ajustes',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="sobre"
        options={{
          drawerLabel: 'Sobre o Aplicativo',
          title: 'Sobre',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="index"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />

       <Drawer.Screen
        name="teste"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
       <Drawer.Screen
        name="RegistroUser"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />


    </Drawer>

    
  );
}