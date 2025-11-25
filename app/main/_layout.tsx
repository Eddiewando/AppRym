import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const activeColor = '#4A90A4';
const inactiveColor = '#B0B0B0';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: { 
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E8F4F8',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
      initialRouteName="index"
    >
      {/* 1. TELA HOME (Dashboard) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              color={color} 
              size={24} 
            />
          ),
        }}
      />

      {/* 2. TELA REGISTRO DE HUMOR */}
      <Tabs.Screen
        name="register"
        options={{
          title: 'Humor',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'happy' : 'happy-outline'} 
              color={color} 
              size={24} 
            />
          ),
        }}
      />

      {/* 3. TELA DIÁRIO - BOTÃO CENTRAL DESTACADO */}
      <Tabs.Screen
        name="diario"
        options={{
          title: 'Diário',
          tabBarIcon: ({ focused }) => (
            <View style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: focused ? '#66BB6A' : '#6BCF7F',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
              shadowColor: '#66BB6A',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.4,
              shadowRadius: 8,
              elevation: 8,
              borderWidth: 4,
              borderColor: '#FFFFFF',
            }}>
              <Ionicons 
                name={focused ? 'heart' : 'heart'} 
                color="#FFFFFF" 
                size={30} 
              />
            </View>
          ),
          tabBarLabel: () => null, 
        }}
      />

      {/* 4. TELA MINDFULNESS (RESPIRAÇÃO) */}
      <Tabs.Screen
        name="mindfull"
        options={{
          title: 'Relaxe',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'leaf' : 'leaf-outline'} 
              color={color} 
              size={24} 
            />
          ),
        }}
      />

      {/* 5. TELA ATIVIDADES */}
      <Tabs.Screen
        name="activities"
        options={{
          title: 'Seu Dia',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'list' : 'list-outline'} 
              color={color} 
              size={24} 
            />
          ),
        }}
      />

      {/* OCULTAR AS PÁGINAS QUE NÃO DEVEM APARECER NAS TABS */}
      <Tabs.Screen
        name="setting"
        options={{
          href: null, 
        }}
      />
      <Tabs.Screen
        name="respiracao"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="meditacao"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}