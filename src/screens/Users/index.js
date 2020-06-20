import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, List, Avatar, FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Users = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  const {navigate} = useNavigation();
  const keyExtractor = (_, index) => index.toLocaleString();
  const RenderItem = () => {
    return (
      <>
        <Card
          style={styles.card}
          onPress={() => navigate('detailuser', {id: '123'})}>
          <List.Item
            title="Mahardicka"
            description="Operator"
            left={props => (
              <Avatar.Image
                source={{
                  uri:
                    'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg',
                }}
              />
            )}
          />
        </Card>
      </>
    );
  };
  if (!render) return <View />;
  return (
    <View style={styles.container}>
      <FlatList
        data={arr}
        keyExtractor={keyExtractor}
        renderItem={RenderItem}
      />
      <FAB style={styles.fab} icon="plus" onPress={() => navigate('addUser')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Users;
