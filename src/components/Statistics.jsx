import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import stat1 from '../assets/icons/stat1.png'
import stat2 from '../assets/icons/stat2.png'
import stat3 from '../assets/icons/stat3.png'
import stat4 from '../assets/icons/stat4.png'
const Statistics = () => {
    return (
        <Box m='120px 220px' display={'flex'} justifyContent={'center'} flexDirection='column' gap='5rem'>
            <Heading size='3xl' textAlign={'center'} color='tfontmain'>
                Our 12 years of together have given us much to be proud of
            </Heading>
            <SimpleGrid columns={4} gap={5}>
                <Box bgColor='tgray' borderRadius='15px' aspectRatio={1 / 1} p='12%' display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Box bgColor='#93E7FE' aspectRatio={1 / 1} w='35%' borderRadius='15px' display='flex'
                    alignItems={'center'} justifyContent={'center'}>
                        <Image src={stat1} width='40%' />
                    </Box>
                    <Heading color='tfontmain' size='2xl'>50M+</Heading>
                    <Text color='tfontmain' size='xl' opacity='0.5'>Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur</Text>
                </Box>
                <Box bgColor='tgray' borderRadius='15px' aspectRatio={1 / 1} p='12%' display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Box bgColor='#FFD978' aspectRatio={1 / 1} w='35%' borderRadius='15px' display='flex'
                    alignItems={'center'} justifyContent={'center'}>
                        <Image src={stat2} width='40%' />
                    </Box>
                    <Heading color='tfontmain' size='2xl'>$100M</Heading>
                    <Text color='tfontmain' size='xl' opacity='0.5'>Eis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam</Text>
                </Box>
                <Box bgColor='tgray' borderRadius='15px' aspectRatio={1 / 1} p='12%' display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Box bgColor='#FAA9E4' aspectRatio={1 / 1} w='35%' borderRadius='15px' display='flex'
                    alignItems={'center'} justifyContent={'center'}>
                        <Image src={stat3} width='40%' />
                    </Box>
                    <Heading color='tfontmain' size='2xl'>30%</Heading>
                    <Text color='tfontmain' size='xl' opacity='0.5'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</Text>
                </Box>
                <Box bgColor='tgray' borderRadius='15px' aspectRatio={1 / 1} p='12%' display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <Box bgColor='#FFA666' aspectRatio={1 / 1} w='35%' borderRadius='15px' display='flex'
                    alignItems={'center'} justifyContent={'center'}>
                        <Image src={stat4} width='40%' />
                    </Box>
                    <Heading color='tfontmain' size='2xl'>60+</Heading>
                    <Text color='tfontmain' size='xl' opacity='0.5'>Magni dolores eos qui ratione voluptatem sequi nesciunt</Text>
                </Box>
            </SimpleGrid>
        </Box>
    );
}

export default Statistics;