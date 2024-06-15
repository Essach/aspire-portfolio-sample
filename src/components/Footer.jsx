import { Flex, Grid, GridItem, Heading, Link, SimpleGrid } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Grid gridTemplateColumns='4fr 2fr' bg='tdarkblue' p='100px 300px' gridTemplateRows='3fr 1fr' columnGap={10} rowGap='7rem'>
            <SimpleGrid columns={3}>
                <Flex direction={'column'} gap={3}>
                    <Heading color='white' size='sm'>Company</Heading>
                    <Link color='white' opacity={0.5}>About</Link>
                    <Link color='white' opacity={0.5}>Pricing</Link>
                    <Link color='white' opacity={0.5}>Jobs</Link>
                    <Link color='white' opacity={0.5}>Blog</Link>
                    <Link color='white' opacity={0.5}>Careers</Link>
                </Flex>
                <Flex direction={'column'} gap={3}>
                    <Heading color='white' size='sm'>Product</Heading>
                    <Link color='white' opacity={0.5}>Sales software</Link>
                    <Link color='white' opacity={0.5}>Features</Link>
                    <Link color='white' opacity={0.5}>Privacy and security</Link>
                    <Link color='white' opacity={0.5}>Marketplace</Link>
                    <Link color='white' opacity={0.5}>API</Link>
                </Flex>
                <Flex direction={'column'} gap={3}>
                    <Heading color='white' size='sm'>Help Center</Heading>
                    <Link color='white' opacity={0.5}>Community</Link>
                    <Link color='white' opacity={0.5}>Knowledge Base</Link>
                    <Link color='white' opacity={0.5}>Academy</Link>
                    <Link color='white' opacity={0.5}>Support</Link>
                </Flex>
            </SimpleGrid>
            <Flex direction={'column'} gap={3} >
                <Heading size='sm' color='white'>
                    Download
                </Heading>
                <Link color='white' opacity={0.5}>Join millions of people who build a fully integrated sales and maketing solution.</Link>
            </Flex>
            <GridItem colSpan={2}>
                <Flex width={'100%'} pt='3rem' borderTop='2px solid rgba(255,255,255,0.1)' gridArea='6fr' justifyContent={'space-between'}>
                    <Heading color='white' size='sm'>Copyright @2023 Aspire. All Rights Reserved.</Heading>
                    <Heading color='white' size='sm'>Terms & Conditions ~ Privacy Policy</Heading>
                </Flex>
            </GridItem>
        </Grid>
    );
}

export default Footer;