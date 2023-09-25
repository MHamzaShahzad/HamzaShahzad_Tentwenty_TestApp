import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TextInput,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Switch} from 'react-native-paper';
import Constants from '../../utils/constants';
import {Box} from '../../components/seat.component';
import CustomButton from '../../components/button.component';
import {BusBG, female, male} from '../../utils/Images';
import Dialog, {ScaleAnimation, DialogContent} from 'react-native-popup-dialog';
import AppStyles from '../../styles/app.style';

const SeatBookingScreen = ({route, navigation}) => {
  const seats_mapping = [
    [
      [
        0, 0, 0, 21, 20, 0, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6,
        5, 4, 3, 0, 2, 1, 0, 0, 0,
      ],
      [
        0, 46, 45, 44, 43, 0, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31,
        30, 29, 28, 27, 26, 0, 25, 24, 23, 22, 0,
      ],
      [
        0, 71, 70, 69, 68, 0, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56,
        55, 54, 53, 52, 51, 0, 50, 49, 48, 47, 0,
      ],
      [
        0, 95, 94, 92, 92, 0, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
        79, 78, 77, 76, 75, 0, 74, 73, 72, 71, 0,
      ],
      [
        121, 121, 120, 119, 118, 0, 117, 116, 115, 114, 113, 112, 111, 110, 109,
        108, 107, 106, 105, 104, 103, 102, 101, 0, 100, 99, 98, 97, 96,
      ],
      [
        148, 147, 146, 145, 144, 0, 143, 142, 141, 140, 139, 138, 137, 136, 135,
        134, 133, 132, 131, 130, 129, 128, 127, 0, 126, 125, 124, 123, 122,
      ],
      [
        174, 173, 172, 171, 170, 0, 169, 168, 167, 166, 165, 164, 164, 163, 162,
        161, 160, 159, 158, 157, 156, 155, 154, 0, 153, 152, 151, 150, 149,
      ],
      [
        201, 200, 199, 198, 197, 0, 196, 195, 194, 193, 192, 191, 190, 189, 188,
        187, 186, 185, 184, 183, 182, 181, 180, 0, 179, 178, 177, 176, 175,
      ],
      [
        228, 227, 226, 225, 224, 0, 223, 222, 221, 220, 219, 218, 217, 216, 215,
        214, 213, 212, 211, 210, 209, 208, 207, 0, 206, 205, 204, 203, 202,
      ],
      [
        255, 254, 253, 252, 251, 0, 250, 249, 248, 247, 246, 245, 244, 243, 242,
        241, 240, 239, 238, 237, 236, 235, 234, 0, 233, 232, 231, 230, 229,
      ],
      // [
      //   229, 230, 231, 222, 233, 0, 234, 235, 236, 237, 238, 239, 240, 241, 242,
      //   243, 244, 245, 246, 247, 248, 249, 250, 0, 251, 252, 253, 254, 255,
      // ],
    ],
    [
      '1_1',
      '1_2',
      '1_3',
      '1_4',
      '1_5',
      '1_6',
      '1_7',
      '1_8',
      '1_9',
      '1_10',
      '1_11',
      '1_12',
      '1_13',
      '1_14',
      '1_15',
      '1_16',
      '1_17',
      '1_18',
      '1_19',
      '1_20',
      '1_21',
      '1_22',
      '1_23',
      '1_24',
      '2_6',
      '2_7',
      '2_8',
      '2_9',
      '2_10',
      '2_11',
      '2_12',
      '2_25',
      '2_26',
      '2_27',
      '2_28',
      '2_29',
      '3_1',
      '3_2',
      '3_3',
      '3_4',
      '3_5',
      '3_6',
      '3_18',
      '3_19',
      '3_20',
      '3_21',
      '3_27',
      '3_28',
      '3_29',
      '4_1',
      '4_2',
      '4_7',
      '4_8',
      '4_9',
      '4_10',
      '4_11',
      '4_12',
      '4_13',
      '4_14',
      '4_15',
      '4_16',
      '4_23',
      '4_24',
      '4_25',
      '4_26',
      '4_27',
      '4_28',
      '4_29',
      '5_1',
      '5_2',
      '5_3',
      '5_4',
      '5_5',
      '5_6',
      '5_7',
      '5_8',
      '5_9',
      '5_10',
      '5_11',
      '5_12',
      '5_16',
      '5_17',
      '5_18',
      '5_19',
      '5_20',
      '5_21',
      '5_22',
      '5_23',
      '5_24',
      '5_25',
      '6_6',
      '6_7',
      '6_8',
      '6_9',
      '6_10',
      '6_11',
      '6_12',
      '6_28',
      '6_29',
      '7_1',
      '7_2',
      '7_3',
      '7_4',
      '7_5',
      '7_6',
      '7_7',
      '7_13',
      '7_14',
      '7_15',
      '7_16',
      '7_17',
      '7_26',
      '7_27',
      '7_28',
      '7_29',
      '8_1',
      '8_2',
      '8_3',
      '8_4',
      '8_5',
      '8_6',
      '8_7',
      '8_8',
      '8_9',
      '8_10',
      '8_17',
      '8_18',
      '8_19',
      '8_20',
      '8_21',
      '8_22',
      '8_23',
      '8_24',
      '8_25',
      '8_26',
      '8_27',
      '8_28',
      '8_29',
      '9_1',
      '9_4',
      '9_5',
      '9_6',
      '9_7',
      '9_8',
      '9_9',
      '9_10',
      '9_11',
      '9_12',
      '9_13',
      '9_14',
      '9_15',
      '9_16',
      '9_17',
      '9_18',
      '9_23',
      '9_24',
      '9_25',
      '9_26',
      '9_27',
      '9_28',
      '9_29',
      '10_1',
      '10_2',
      '10_3',
      '10_4',
      '10_8',
      '10_9',
      '10_10',
      '10_11',
      '10_12',
      '10_13',
      '10_14',
      '10_15',
      '10_16',
      '10_17',
      '10_18',
      '10_19',
      '10_20',
      '10_26',
      '10_27',
      '10_28',
      '10_29',
    ],
    [
      '1_1',
      '1_2',
      '1_3',
      '1_4',
      '1_5',
      '1_6',
      '1_7',
      '1_8',
      '1_9',
      '1_10',
      '1_11',
      '1_12',
      '1_13',
      '1_14',
      '1_15',
      '1_16',
      '1_17',
      '1_18',
      '1_19',
      '1_20',
      '1_21',
      '1_22',
      '1_23',
      '1_24',
      '1_25',
      '1_26',
      '1_27',
      '1_28',
      '1_29',
      '8_1',
      '8_2',
      '8_3',
      '8_4',
      '8_5',
      '8_6',
      '8_7',
      '8_8',
      '8_9',
      '8_10',
      '8_11',
      '8_12',
      '8_13',
      '8_14',
      '8_15',
      '8_16',
      '8_17',
      '8_18',
      '8_19',
      '8_20',
      '8_21',
      '8_22',
      '8_23',
      '8_24',
      '8_25',
      '8_26',
      '8_27',
      '8_28',
      '8_29',
      '9_1',
      '9_2',
      '9_3',
      '9_4',
      '9_5',
      '9_6',
      '9_7',
      '9_8',
      '9_9',
      '9_10',
      '9_11',
      '9_12',
      '9_13',
      '9_14',
      '9_15',
      '9_16',
      '9_17',
      '9_18',
      '9_19',
      '9_20',
      '9_21',
      '9_22',
      '9_23',
      '9_24',
      '9_25',
      '9_26',
      '9_27',
      '9_28',
      '9_29',
      '10_1',
      '10_2',
      '10_3',
      '10_4',
      '10_5',
      '10_6',
      '10_7',
      '10_8',
      '10_9',
      '10_10',
      '10_11',
      '10_12',
      '10_13',
      '10_14',
      '10_15',
      '10_16',
      '10_17',
      '10_18',
      '10_19',
      '10_20',
      '10_21',
      '10_22',
      '10_23',
      '10_24',
      '10_25',
      '10_26',
      '10_27',
      '10_28',
      '10_29',
    ],
  ];

  const [params, setParams] = useState({
    booked_seats: [],
    seats_gender: [],
  });

  const seatSelected = value => {
    console.log(`seatSelected: ${value}`);
    setSelectedSeat(value);
    setVisibility(true);
  };

  const genderSelection = gender => {
    setVisibility(false);
    if (params.booked_seats.indexOf(selectedSeat) === -1)
      setParams({
        ...params,
        booked_seats: [...params.booked_seats, selectedSeat],
        seats_gender: [...params.seats_gender, `${selectedSeat}${gender}`],
      });
    else {
      if (gender) {
        params.seats_gender[
          params.booked_seats.indexOf(selectedSeat)
        ] = `${selectedSeat}${gender}`;
        setParams({...params, seats_gender: params.seats_gender});
      } else {
        params.seats_gender.splice(
          params.booked_seats.indexOf(selectedSeat),
          1,
        );
        params.booked_seats.splice(
          params.booked_seats.indexOf(selectedSeat),
          1,
        );

        setParams({
          ...params,
          seats_gender: params.seats_gender,
          booked_seats: params.booked_seats,
        });
      }
    }
    console.log(
      `Seat : ${selectedSeat}${gender} - ${params.booked_seats} - ${params.seats_gender}`,
    );
  };

  const [visibility, setVisibility] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(-1);

  return (
    <>
      <SafeAreaView style={[AppStyles.container, AppStyles.appBackgroundColor]}>
        <ScrollView style={{margin: 10}}>
          <Text
            style={[AppStyles.appFont, {
              color: Constants.Colors.PRIMARY,
              fontSize: 20,
              alignSelf: 'center',
              margin: 20,
            }]}>
            Screen
          </Text>
          <ScrollView horizontal>
            {/* <ImageBackground
              source={BusBG}
              style={{
                flex: 1,
                width: '100%',
                position: 'relative',
                alignSelf: 'center',
                alignItems: 'center',
              }}
              resizeMode={'contain'}
            > */}
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: 10,
                marginBottom: 10,
              }}>
              {seats_mapping[0].map((list, row_index) => (
                <View key={row_index} style={styles.boxLine}>
                  <Box
                    text={row_index + 1}
                    style={{
                      color: Constants.Colors.THIRD_BLACK_TXT_COLOR,
                      borderWidth: 0,
                    }}
                  />
                  {list.map(
                    (value, col_index) =>
                      value == 0 ? (
                        <Box key={col_index} style={{borderWidth: 0}} />
                      ) : seats_mapping[1].indexOf(
                          `${row_index + 1}_${col_index + 1}`,
                        ) === -1 ? (
                        <Box
                          key={col_index}
                          onPress={() => seatSelected(value)}
                          style={
                            params.booked_seats.indexOf(value) !== -1
                              ? {
                                  backgroundColor: Constants.Colors.SECONDARY,
                                  borderWidth: 0,
                                }
                              : seats_mapping[2].indexOf(
                                  `${row_index + 1}_${col_index + 1}`,
                                ) !== -1
                              ? {
                                  backgroundColor:
                                    Constants.Colors.BULLETS_SLECTED_COLOR,
                                }
                              : {
                                  color: Constants.Colors.THIRD_BLACK_TXT_COLOR,
                                }
                          }
                          text={
                            params.booked_seats.indexOf(value) !== -1
                              ? params.seats_gender[
                                  params.booked_seats.indexOf(value)
                                ]?.replace(/[^a-z]/gi, '')
                              : value
                          }
                        />
                      ) : (
                        <Box
                          key={col_index}
                          style={{
                            backgroundColor: Constants.Colors.GREY,
                            borderWidth: 0,
                          }}
                          text={value}
                        />
                      ),
                    // <Box style={{ borderWidth: 0 }} />
                    // <Box style={{ backgroundColor: Constants.Colors.BULLETS_SLECTED_COLOR, borderWidth: 0 }} text={'F'} />
                  )}
                </View>
              ))}
            </View>
            {/* </ImageBackground> */}
          </ScrollView>

          <View
            style={{
              flexDirection: 'column',
              padding: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <View style={styles.boxWithTextView}>
                <Box
                  style={{
                    backgroundColor: Constants.Colors.SECONDARY,
                    borderWidth: 0,
                  }}
                />
                <Text style={styles.boxTextStyle}>Selected</Text>
              </View>
              <View style={styles.boxWithTextView}>
                <Box
                  style={{
                    backgroundColor: Constants.Colors.GREY,
                    borderWidth: 0,
                  }}
                />
                <Text style={styles.boxTextStyle}>Not Available</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <View style={styles.boxWithTextView}>
                <Box
                  style={{
                    backgroundColor: Constants.Colors.BULLETS_SLECTED_COLOR,
                    borderWidth: 0,
                  }}
                />
                <Text style={styles.boxTextStyle}>VIP</Text>
              </View>
              <View style={styles.boxWithTextView}>
                <Box />
                <Text style={styles.boxTextStyle}>Regular</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={[{
                color: Constants.Colors.PRIMARY,
                fontSize: 12,
                opacity: 0.6,
                textAlign: 'center',
              }, AppStyles.appFontRegular]}>
              SEAT NO :{' '}
            </Text>
            <Text
              style={{
                color: Constants.Colors.SECONDARY_TEXT_COLOR,
                fontFamily: Constants.Fonts.UBUNTU,
                fontSize: 11,
                textAlign: 'center',
              }}>
              {params.booked_seats.toString()}
            </Text>
          </View>

          <Dialog
            visible={visibility}
            dialogAnimation={
              new ScaleAnimation({
                initialValue: 0, // optional
                useNativeDriver: true, // optional
              })
            }
            useNativeDriver={true}
            onHardwareBackPress={() => true}
            onTouchOutside={() => setVisibility(false)}
            dialogTitle={
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  backgroundColor: Constants.Colors.PRIMARY,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff', fontSize: 16}}>SELECT GENDER</Text>
                {params.booked_seats.indexOf(selectedSeat) !== -1 ? (
                  <Switch
                    style={{alignSelf: 'center'}}
                    value={true}
                    onValueChange={() => genderSelection(null)}
                    color={Constants.Colors.BORDER_COLOR}
                  />
                ) : null}
              </View>
            }
            width={0.8}
            height={200}>
            <DialogContent style={{flex: 1}}>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => genderSelection('M')}>
                    <View style={styles.circleView}>
                      <Image
                        source={male}
                        style={{
                          width: 40,
                          height: 40,
                          resizeMode: 'contain',
                          marginTop: -5,
                        }}></Image>
                    </View>
                    <Text style={styles.text}>Male</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => genderSelection('F')}>
                    <View style={{marginStart: 24}}>
                      <View style={styles.circleView}>
                        <Image
                          source={female}
                          style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain',
                            marginTop: -5,
                          }}></Image>
                      </View>
                      <Text style={styles.text}>Female</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </DialogContent>
          </Dialog>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <CustomButton
              style={{
                borderRadius: 10,
                width: '90%',
                backgroundColor: Constants.Colors.BUTTON,
              }}
              tColor={Constants.Colors.WHITE}
              tFF={Constants.Fonts.FAMILY}
              tfz={14}
              title="Proceed To Pay"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.BG_COLOR,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: '80%',
  },
  boxWithTextView: {
    flex: 1,
    flexDirection: 'row',
  },
  smallBoxSyle: {
    height: 18,
    width: 18,
    borderWidth: 0.4,
    borderRadius: 3,
    margin: 5,
  },
  boxTextStyle: {
    fontFamily: Constants.Fonts.UBUNTU,
    fontSize: 10,
    color: Constants.Colors.THIRD_BLACK_TXT_COLOR,
    alignSelf: 'center',
  },
  boxLine: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  notesBox: {
    alignSelf: 'center',
    flex: 1,
    width: '90%',
    padding: 10,
    backgroundColor: Constants.Colors.BG_COLOR,
    color: Constants.Colors.SECONDARY_TEXT_COLOR,
    fontFamily: Constants.Fonts.UBUNTU,
    fontSize: 10,
    margin: 15,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: Constants.Colors.LIGHT_GREY,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  sign_in_button: {
    width: '50%',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 40,
    height: 30,
    fontFamily: Constants.Fonts.MONTSERAA_BOLD,
    fontSize: 9,
  },
  text: {
    color: Constants.Colors.PRIMARY,
    fontFamily: Constants.Fonts.MONTSERAA_BOLD,
    fontSize: 16,
    marginTop: 8,
    alignSelf: 'center',
    opacity: 0.6,
  },
  circleView: {
    width: 80,
    height: 80,
    backgroundColor: '#F7FAFC',
    borderRadius: 80 / 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SeatBookingScreen;
