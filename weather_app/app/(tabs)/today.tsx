import { useSearch } from '@/context/SearchContext';
import { Text, View } from "react-native";

export default function Today() {
  const { searchText } = useSearch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='bg-slate-600 font-extrabold'>Today {searchText}</Text>
    </View>
  );
}