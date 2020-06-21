import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROFILE} from '../../../graphql/tag';

export const CardInfo = () => {
  const {data, loading, error} = useQuery(GET_PROFILE);
  const {navigate} = useNavigation();
  const toUser = () => {
    if (!loading) return navigate('user', {role: data?.profile?.role});
  };
  const toTenant = () => navigate('tenant');
  return (
    <View style={styles.container}>
      <Card style={styles.card} onPress={toUser}>
        <Card.Content>
          <Title>{`${data?.profile?.allUsers || 0} Users`}</Title>
          <Paragraph>Active users office</Paragraph>
        </Card.Content>
        <Card.Actions />
      </Card>
      <Card
        style={[styles.card, {backgroundColor: '#2ecc71'}]}
        onPress={toTenant}>
        <Card.Content>
          <Title>{`${data?.profile?.myTenant || 0} Tenants`}</Title>
          <Paragraph>Total my tenants</Paragraph>
        </Card.Content>
        <Card.Actions />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  card: {
    flex: 1,
    margin: 5,
  },
});
