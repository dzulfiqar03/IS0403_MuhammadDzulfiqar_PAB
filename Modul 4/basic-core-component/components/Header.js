import { NativeBaseProvider, Box, Pressable, Image } from "native-base";
// Functional Component with props
const Header = (props) => {
  return (
    <Box
      backgroundColor="#AA0002"
      flexDirection="row"
      justifyContent="space-between"
      padding={15}
    >
      <Pressable onPress={() => props.drawer.current.openDrawer()}>
        <Image
          alt="menu"
          source={require("../assets/menu.png")}
          width={18}
          height={18}
        />
      </Pressable>
      <Box>
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Image
            alt="fb"
            source={require("../assets/facebook.png")}
            resizeMode="contain"
            style={{
              width: 36,
              height: 16,
            }}
          />
          <Image
            alt="yt"
            source={require("../assets/youtube.png")}
            style={{
              width: 36,
              height: 16,
            }}
            resizeMode="contain"
          />
          <Image
            alt="twt"
            source={require("../assets/twitter.png")}
            style={{
              width: 36,
              height: 16,
            }}
            resizeMode="contain"
          />
          <Image
            alt="sc"
            source={require("../assets/search.png")}
            style={{
              width: 36,
              height: 16,
            }}
            resizeMode="contain"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
