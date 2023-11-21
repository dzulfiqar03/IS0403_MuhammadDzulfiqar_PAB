import { NativeBaseProvider, Pressable, Text } from "native-base";
// Functional Component with props
const Button = (props) => {
  return (
    
       <Pressable
      backgroundColor="#dddddd"
      padding={15}
      alignItems="center"
      onPress={props.onPress}
    >
      <Text fontSize={12} textTransform="uppercase" fontWeight="bold">
        {props.text}
      </Text>
    </Pressable>
   
   
  );
};

export default Button;
