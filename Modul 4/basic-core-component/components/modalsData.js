import {
  NativeBaseProvider,
  Box,
  
  Alert,
  Image,
  BackHandler,
  Text,
} from "native-base";

import {Modal} from 'react-native';
import { useState } from "react";
import Button from "../components/Button";

const ModalsData = (props) => {
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isModalVisible !== false}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setIsModalVisible(false);
        }}
      >
        <Box
          justifyContent="center"
          alignItems="center"
          style={{ flex: 1, marginTop: 22 }}
        >
          <Box
            margin={20}
            backgroundColor="white"
            alignItems="center"
            shadowColor="#000"
            style={{
              borderRadius: 20,
              padding: 35,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text
              textAlign="center"
              style={{
                marginBottom: 15,
              }}
            >
              Are You Sure?
            </Text>
            <Box display="flex" flexDirection="row">
              <Button
                text="Close" width= "80%" backgroundColor= "blue"
                    alignItems= "center"
                style={[
                  {
                   
                    marginTop: 15,
                    paddingVertical: 15,
                    borderRadius: 25,
                   
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                  },
                  {
                    backgroundColor: "#2196F3",
                  },
                ]}
                onPress={() => props.setIsModalVisible(false)}
              ></Button>
              <Button
                text="Exit"
                style={[
                  {
                    backgroundColor: "blue",
                    marginTop: 15,
                    paddingVertical: 15,
                    borderRadius: 25,
                    width: "80%",
                    alignItems: "center",
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                  },
                  {
                    backgroundColor: "#2196F3",
                  },
                ]}
                onPress={() => BackHandler.exitApp()}
              ></Button>
            </Box>
          </Box>
        </Box>
      </Modal>
  );
};

export default ModalsData;
