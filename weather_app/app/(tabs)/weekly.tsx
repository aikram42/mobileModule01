import { useSearch } from '@/context/SearchContext';
import { Text, View } from "react-native";

export default function Weekly() {
  const { searchText } = useSearch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=''>Weekly {searchText}</Text>
    </View>
  );
}