import { Flex, Heading, Image } from "@chakra-ui/react";
import link1 from '../assets/images/link1.png'
import link2 from '../assets/images/link2.png'
import link3 from '../assets/images/link3.png'
import link4 from '../assets/images/link4.png'
import link5 from '../assets/images/link5.png'

const Links = () => {
    return ( 
        <Flex px='130px' align='center' direction='column' my='7rem' gap='3rem'>
            <Heading size='md' color='tfontmain'>Trusted by 1000K plus customers</Heading>
            <Flex w='100%' justify='space-between' align='center'>
                <Image src={link1} _hover={{cursor: 'pointer'}}/>
                <Image src={link2}  _hover={{cursor: 'pointer'}}/>
                <Image src={link3}  _hover={{cursor: 'pointer'}}/>
                <Image src={link4}  _hover={{cursor: 'pointer'}}/>
                <Image src={link5}  _hover={{cursor: 'pointer'}}/>
            </Flex>
        </Flex>
    );
}

export default Links;