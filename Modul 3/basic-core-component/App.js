import { useRef, useState } from "react";
import {
  View,
  DrawerLayoutAndroid,
  StatusBar,
  BackHandler,
  Text,
  Modal,
  StyleSheet,
} from "react-native";
import Header from "./components/header";
import Button from "./components/button";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";
import ModalsExit from "./components/modalsExit";
import ModalsData from "./components/modalsData";
// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Ref Declaration
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value

    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = () => (
    <View style={{ flex: 1 }}>
      <ModalsExit
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
        <Button text="List" onPress={() => changePage(drawer, "list")} />
        <Separator height={30} />
        <Button text="Article" onPress={() => changePage(drawer, "article")} />
        <Separator height={30} />
        <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
        <Separator height={30} />
        <Button
          text="Exit"
          onPress={() => [
            setIsModalVisible(!isModalVisible),
            drawer.current.closeDrawer(),
          ]}
        />
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar style="light" backgroundColor="#AA0002" />
      <View>
        <Header drawer={drawer} />
        {page == "list" ? <List /> : page == "article" ? <Article /> : null}
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalButton: {
    display: "flex",
    flexDirection: "row",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  bodyModalContainer: {
    display: "flex",
  },
  button: {
    backgroundColor: "blue",
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
export default App;
