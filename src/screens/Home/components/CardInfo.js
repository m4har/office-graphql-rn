import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

export const CardInfo = memo(() => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} onPress={() => {}}>
        <Card.Content>
          <Title>10 Users</Title>
          <Paragraph>Active users office</Paragraph>
        </Card.Content>
        <Card.Actions />
      </Card>
      <Card
        style={[styles.card, {backgroundColor: '#2ecc71'}]}
        onPress={() => {}}>
        <Card.Content>
          <Title>10 Tenants</Title>
          <Paragraph>Total my tenants</Paragraph>
        </Card.Content>
        <Card.Actions />
      </Card>
    </View>
  );
});

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
