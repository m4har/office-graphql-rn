import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Subheading, Divider} from 'react-native-paper';
import {useResponsiveFontSize} from 'react-native-responsive-dimensions';

export const MyPhoto = memo(() => {
  return (
    <>
      <View style={styles.container}>
        <Avatar.Image
          size={useResponsiveFontSize(10)}
          source={{
            uri:
              'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg',
          }}
        />
        <View style={styles.name}>
          <Subheading>Mahardicka Nurachman</Subheading>
        </View>
      </View>
      <Divider />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  name: {
    justifyContent: 'center',
    marginLeft: 10,
  },
});
