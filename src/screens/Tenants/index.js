import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, Avatar, List, FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1];
const Tenants = () => {
  const {navigate} = useNavigation();
  const keyExtractor = (_, index) => index.toLocaleString();
  const RenderItem = () => (
    <Card style={styles.card}>
      <List.Item
        title="Mahardicka"
        description="mahardicka404@gmail.com"
        left={props => <Avatar.Icon icon="office-building" />}
      />
    </Card>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={arr}
        keyExtractor={keyExtractor}
        renderItem={RenderItem}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigate('addTenant')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Tenants;
