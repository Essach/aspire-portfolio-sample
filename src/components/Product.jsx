import { Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import Check from '../assets/icons/check.png'
import productImage from '../assets/images/productScreenshot.png';
const Product = () => {
    return (
        <Flex direction='column' justify='center' align='center' gap={10} mt='7rem' borderBottom='1px solid' borderColor='tgray' mx='200px' flexGrow={1}>
            <Flex direction='column' gap={5}>
                <Flex direction='column' justify='center' align='center' gap={1}>
                    <Heading color='tfontmain' size='3xl' textAlign='center'>Multipurpose Website Templates</Heading>
                    <Heading color='tfontmain' size='3xl' textAlign='center'>That boost your sales</Heading>
                </Flex>
            <Text color='tfontsecond'  opacity='0.5' fontSize='sm' textAlign='center'>Empowering Your Financial Journey through Customized Asset Management Services</Text>
            </Flex>
            <Flex direction='column' align='center' gap={3}>
                <Flex padding={2} boxShadow='md' borderRadius='50px'>
                    <Input placeholder="Enter your work email" variant='unstyled' pl='15px' mr='100px' fontSize='md' color='tfontsecond' _placeholder={{opacity: '0.5'}}/>
                    <Button colorScheme="tred" borderRadius='50px' size='lg' px='40px' _hover={{backgroundColor: 'tborderred'}}>Get Started</Button>
                </Flex>
                <Flex align={'center'} gap={2}>
                    <Image src={Check} w='18px' h='14px'/>
                    <Text color='tfontsecond'  opacity='0.5'>No credit card required</Text>
                </Flex>
            </Flex>
            <Image src={productImage} mt='2rem' flexGrow={1}/>
        </Flex>
    );
}

export default Product;