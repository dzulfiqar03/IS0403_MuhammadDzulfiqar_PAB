import { useRef, useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  ScrollView,
  StatusBar,
} from "native-base";
import { DrawerLayoutAndroid } from "react-native";
import { Header, Button, Separator } from "./components";
import {
  LotsOfStyles,
  FixedDimensionsBasics,
  FlexDimensionsBasics,
  PercentageDimensionsBasics,
  FlexBasic,
  FlexDirectionBasics,
  JustifyContentBasics,
  AlignItemsLayout,
  WidthHeightBasics,
  PositionLayout,
  DisplayAnImageWithStyle,
  NativeBaseBasic,
  ListScreen,
  MainMenuScreen,

} from "./screens";

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("Lots Of Styles");
  // Ref Declaration
  const drawer = useRef(null);
  // Array of Object Declaration
  const pageArr = [
    { name: "Lots Of Styles", comp: <LotsOfStyles /> },
    { name: "Fixed Dimensions Basics", comp: <FixedDimensionsBasics /> },
    { name: "Flex Dimensions Basics", comp: <FlexDimensionsBasics /> },
    {
      name: "Percentage Dimensions Basics",
      comp: <PercentageDimensionsBasics />,
    },

    { name: "Flex Basic", comp: <FlexBasic /> },
    { name: "Flex Direction Basics", comp: <FlexDirectionBasics /> },
    { name: "Justify Content Basics", comp: <JustifyContentBasics /> },
    { name: "Align Items Layout", comp: <AlignItemsLayout /> },
    { name: "Width Height Basics", comp: <WidthHeightBasics /> },
    { name: "Position Layout", comp: <PositionLayout /> },
    { name: "Display An Image With Style", comp: <DisplayAnImageWithStyle /> },
    { name: "Native Base Basic", comp: <NativeBaseBasic /> },
    { name: "List Screen", comp: <ListScreen /> },
    { name: "Main Menu Screen", comp: <MainMenuScreen /> },

  ];
  // Ref Declaration
  const content = useRef(pageArr[0]);

  // Find in Array of Object
  content.current = pageArr.find((item) => item.name == page);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value
    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = () => (
    <NativeBaseProvider>
      <ScrollView padding={2} backgroundColor="#222222" flex={1}>
        <Text color="white" fontSize={12} marginBottom={2} fontWeight="900">
          MENUS:
        </Text>
        {/* Looping with map() */}
        {pageArr.map((item, index) => {
          return (
            <Box key={index}>
              <Button
                text={item.name}
                onPress={() => changePage(drawer, item.name)}
              />
              <Separator height={10} />
            </Box>
          );
        })}

        
        <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
        <Separator height={30} />
      </ScrollView>
    </NativeBaseProvider>
  );

  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        <StatusBar style="light" backgroundColor="#AA0002" />
        <Box flex={1}>
          <Header drawer={drawer} />
          {content.current.comp}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};

export default App;
