import { Heading, Text, Box, Image, ScrollView } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"News"} withBack="true" />
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <Box>
          <Image
            source={{ uri: params.image }}
            w="full"
            h="48"
            alt="Facebook Icon"
          />
        </Box>
        <Box p={"4"}>
          <Text>{params.date}</Text>
          <Text fontWeight={"bold"} fontSize={21}>
            {params.title}
          </Text>
          <Box
            paddingBottom={4}
            borderBottomColor={"coolGray.300"}
            borderBottomWidth={1}
            flexDirection="row"
            flex={1}
          />
          <Text paddingTop={4}>{params.content}</Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
