import { useSearch } from '@/context/SearchContext';
import { Text, ScrollView, View } from "react-native";
import React from 'react';

export default function Index() {
  const { searchText } = useSearch();

  return (
    <ScrollView className='flex'>
      <View className='flex min-h-full justify-center items-center'>
        <Text>Currently {searchText}</Text>
      </View>
    </ScrollView>
  );
}
