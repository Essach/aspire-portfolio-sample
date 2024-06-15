import { Box, Flex, Grid, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';
import person4 from '../assets/images/person4.png';
import person5 from '../assets/images/person5.png';
import person6 from '../assets/images/person6.png';
import person7 from '../assets/images/person7.png';
import person8 from '../assets/images/person8.png';
import arrow from '../assets/icons/arrowred.png';

const Team = () => {
    return (
        <Box m='200px' display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={10}>
            <Flex direction={'column'} alignItems={'center'} w='604px' gap={3}>
                <Text color='tred.500' bg='rgba(246, 58, 97, 0.1)' p='5px 15px' borderRadius='15px'>OUR TEAM</Text>
                <Heading size={'3xl'} color='tfontmain' textAlign={'center'}>Meet our dream team</Heading>
                <Text color='tfontmain' opacity={0.5} textAlign={'center'}>{`We're dedicated group of Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`}</Text>
            </Flex>
            <SimpleGrid columns={4} width={'100%'} rowGap={5}>
                <Flex direction={'column'} alignItems={'center'}>
                    <Image src={person1} />
                    <Flex direction={'column'} alignItems={'center'} gap={1} my={8}>
                        <Heading size='md'>Kristopher A. Davis</Heading>
                        <Text opacity={0.5}>Designation Goes here</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} alignItems={'center'}>
                    <Image src={person2} />
                    <Flex direction={'column'} alignItems={'center'} gap={1} my={8}>
                        <Heading size='md'>Maggie W. Roth</Heading>
                        <Text opacity={0.5}>Designation Goes here</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} alignItems={'center'}>
                    <Image src={person3} />
                    <Flex direction={'column'} alignItems={'center'} gap={1} my={8}>
                        <Heading size='md'>Anthony N</Heading>
                        <Text opacity={0.5}>Designation Goes here</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} alignItems={'center'}>
                    <Image src={person4} />
                    <Flex direction={'column'} alignItems={'center'} gap={1} my={8}>
                        <Heading size='md'>Tony J. Wilcoxen</Heading>
                        <Text opacity={0.5}>Designation Goes here</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} alignItems={'center'}>
                    <Image src={person5} />
                    <Flex direction={'column'} alignItems={'center'} gap={1} my={8}>
                        <Heading size='md'>Kristopher A. Davis</Heading>
                        <Text opacity={0.5}>Designation Goes here</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} alignItems={'center'}>
                    <Image src={person6} />
                    <Flex direction={'column'} alignItems={'center'} gap={1} my={8}>
                        <Heading size='md'>Maggie W. Roth</Heading>
                        <Text opacity={0.5}>Designation Goes here</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} alignItems={'center'}>
                    <Image src={person7} />
                    <Flex direction={'column'} alignItems={'center'} gap={1} my={8}>
                        <Heading size='md'>Anthony N</Heading>
                        <Text opacity={0.5}>Designation Goes here</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} alignItems={'center'}>
                    <Image src={person8} />
                    <Flex direction={'column'} alignItems={'center'} gap={1} my={8}>
                        <Heading size='md'>Tony J. Wilcoxen</Heading>
                        <Text opacity={0.5}>Designation Goes here</Text>
                    </Flex>
                </Flex>
            </SimpleGrid>
            <Grid templateColumns='3fr 6fr' padding='50px 100px' bg='tgray' borderRadius={'15px'}>
                <Heading color='tfontmain' size='lg'>Join our team</Heading>
                <Flex direction={'column'} gap={5}>
                    <Text color='tfontmain' opacity={0.5}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
                    <Link display={'flex'} alignItems={'center'} color='tred.500' gap={2}>
                        View Current Openings
                        <Image src={arrow} />
                    </Link>
                </Flex>
            </Grid>
        </Box>
    );
}

export default Team;