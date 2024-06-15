import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import Check from '../assets/icons/checkwhite.png'
const GetStarted = () => {
    return (
        <Box mx='200px' bgColor='tblue' p='100px 200px' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} borderRadius='15px'>
            <Heading color='white' size='3xl'>Get started with Aspire today</Heading>
            <Text color={'white'} textAlign={'center'} px='120px' mt={5}>We are self-service data analytics software that lets you create visually appealing data visualisations and insightful dashboards in minutes.</Text>
            <Flex direction='column' align='center' gap={3}>
                <Flex padding={2} boxShadow='sm' borderRadius='50px' bgColor={'white'} mt={12}>
                    <Input placeholder="Enter your work email" variant='unstyled' pl='15px' mr='100px' fontSize='md' color='tfontsecond' _placeholder={{opacity: '0.5'}}/>
                    <Button colorScheme="tred" borderRadius='50px' size='lg' px='40px' _hover={{backgroundColor: 'tborderred'}}>Get Started</Button>
                </Flex>
                <Flex align={'center'} gap={2}>
                    <Image src={Check} w='18px' h='14px'/>
                    <Text color='white'  opacity='0.5'>No credit card required</Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default GetStarted;