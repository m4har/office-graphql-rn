import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, Avatar, List, FAB, ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/react-hooks';
import {MY_TENANT} from '../../graphql/tag';

const Tenants = () => {
  const {data, loading} = useQuery(MY_TENANT);
  const {navigate} = useNavigation();
  const keyExtractor = (_, index) => index.toLocaleString();
  const RenderItem = ({item}) => (
    <Card style={styles.card}>
      <List.Item
        title={item.name}
        description={item.email}
        left={props => <Avatar.Icon icon="office-building" />}
      />
    </Card>
  );
  if (loading) return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data.tenant}
        extraData={data.tenant}
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
