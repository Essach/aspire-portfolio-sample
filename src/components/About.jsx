import { Box, Grid, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import linkIcon from '../assets/icons/link.png'
import aboutImage from '../assets/images/about.png';

const About = () => {
    return (
        <Box bgColor='tblue' p='90px 220px'>
            <Grid templateColumns='3fr 5fr'>
                <Box>
                    <Heading color='white' size='2xl'>About our company</Heading>
                    <Link color='white' display='flex' alignItems='center' gap={1} mt='25%'>
                        Learn More
                        <Image src={linkIcon}/>
                    </Link>
                </Box>
                <VStack gap={4}>
                    <Text color='white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </Text>
                    <Text color='white'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text color='white' >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                    </Text>
                </VStack>
            </Grid>
            <Image src={aboutImage} w='100%' mt='5rem' />
        </Box>
    );
}

export default About; 