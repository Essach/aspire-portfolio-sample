import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import logo from '../assets/images/Logo.png';

const Header = () => {
    return (
        <Flex justify='space-between' mx='130px' mt='30px' pb='30px' align='center' borderBottom='2px solid' borderColor='tgray'>
            <Image src={logo} h='30px' /> 
            <Flex gap={8}>
                <Heading size='md' _hover={{cursor:'pointer'}}>Product</Heading>
                <Heading size='md' _hover={{cursor:'pointer'}}>Pricing</Heading>
                <Heading size='md' _hover={{cursor:'pointer'}}>Company</Heading>
                <Heading size='md' _hover={{cursor:'pointer'}}>Resources</Heading>
                <Heading size='md' _hover={{cursor:'pointer'}}>Contact</Heading>
            </Flex>
            <Flex gap={5} align='center'>
                <Heading size='md' _hover={{cursor:'pointer'}}>Login </Heading>
                <Button size='md' colorScheme="tred" _hover={{bgColor:'tborderred'}} rounded={15 }>Get Started</Button>
            </Flex>
        </Flex>
    );
}

export default Header;