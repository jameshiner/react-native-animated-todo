import React from 'react';
import { ScrollView, Box, Text, VStack, Image, useColorModeValue, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import AnimatedColorBox from '../components/animated-color-box';
import NavBar from '../components/navbar';
import Masthead from '../components/masthead';
import LinkButton from '../components/link-button';
import { borderRadius } from 'styled-system';

const AboutScreen = () => {
  return (
    <AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50', 'warmGray.900')}>
      <Masthead title="About this app" image={require('../assets/masthead.png')}>
        <NavBar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/portrait.jpeg')}
              borderRadius="full"
              alt="author"
              h={120}
              w={120}
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a react native app built in a tutorial.
          </Text>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.youtube.com/watch?v=k2h7usLLBhY"
            leftIcon={<Icon as={Feather} name="youtube" size="sm" opacity={0.5} />}
          >
            Tutorial Video
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
