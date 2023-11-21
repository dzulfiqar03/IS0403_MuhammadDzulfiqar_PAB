import { Heading, Text, Box, Image, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <Box>
          <Image
            source={{ uri: params.image }}
            w="$full"
            h="$48"
            alt="Facebook Icon"
          />
        </Box>
        <Box p={"$4"}>
          <Text>{params.date}</Text>
          <Heading fontSize={"$xl"}>{params.title}</Heading>
          <Box
            paddingBottom={"$4"}
            borderBottomColor={"$coolGray.300"}
            borderBottomWidth={1}
            flexDirection="row"
            flex={1}
          />
          <Text paddingTop={"$4"}>{params.content}</Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
