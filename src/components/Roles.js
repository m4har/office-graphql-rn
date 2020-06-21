import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Paragraph, Text, Divider} from 'react-native-paper';
import {useQuery} from '@apollo/react-hooks';
import {ALL_ROLE} from '../graphql/tag';
export const Roles = ({onSelect, value}) => {
  const [select, setSelect] = useState('');
  const {loading, data} = useQuery(ALL_ROLE);
  const actionSelect = role => () => {
    setSelect(role);
    onSelect(role);
  };
  if (loading) return <View />;
  return (
    <View>
      <Paragraph>Role</Paragraph>
      {data.role.map((item, index) => {
        if (item.role === 'super admin') return <View key={index} />;
        return (
          <View key={index}>
            <TouchableOpacity
              disabled={item.role === 'super admin'}
              style={styles.radio}
              onPress={actionSelect(item.role)}>
              <View
                color="#000"
                style={[
                  styles.radioCirle,
                  {
                    backgroundColor:
                      item.role === value ? '#102f4a' : 'transparent',
                  },
                ]}
              />
              <Text>{item.role}</Text>
            </TouchableOpacity>
            <Divider />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
    height: 25,
    marginTop: 5,
  },
  radioCirle: {
    borderRadius: 50,
    height: 20,
    width: 20,
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
});
