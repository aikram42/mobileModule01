import { useSearch } from '@/context/SearchContext';
import { ScrollView, Text, View } from "react-native";
import React from 'react';

export default function Weekly() {
  const { searchText } = useSearch();

  return (
    <ScrollView className='flex'>
      <View className='flex min-h-full justify-center items-center'>
        <Text>Weekly {searchText}</Text>
      </View>
    </ScrollView>
  );
}
