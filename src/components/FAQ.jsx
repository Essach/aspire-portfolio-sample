import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const FAQ = () => {
    return (
        <Box bg={'tgray'} padding='120px 300px' display={'flex'} flexDirection={'column'} alignItems={'center'} gap='4rem'>
            <Flex direction={'column'} alignItems={'center'} gap={3}>
                <Heading size='3xl' color='tfontmain'>Frequently asked questions</Heading>
                <Text color='tfontmain' opacity={0.5}>We have put together some commonly asked questions</Text>
            </Flex>
            <SimpleGrid columns={2} w='100%' gap={10}>
                <Accordion allowMultiple allowToggle gap={10} display={'flex'} flexDirection={'column'}>
                    <AccordionItem bg='white' borderRadius={'15px'} border='none'>
                        <h2>
                            <AccordionButton p='20px'>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading size='sm' color='tfontmain' pr='5px'>
                                        Smod tempor incididunt ut labore et dolore
                                    </Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem bg='white' borderRadius={'15px'} border='none'>
                        <h2>
                            <AccordionButton p='20px'>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading size='sm' color='tfontmain' pr='5px'>
                                        Quis nostrud exercitation ullamco laboris
                                    </Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem bg='white' borderRadius={'15px'} border='none'>
                        <h2>
                            <AccordionButton p='20px'>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading size='sm' color='tfontmain' pr='5px'>
                                        Woluptate velit esse cillum dolore eu fugiat nulla
                                    </Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem bg='white' borderRadius={'15px'} border='none'>
                        <h2>
                            <AccordionButton p='20px'>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading size='sm' color='tfontmain' pr='5px'>
                                        Excepteur sint occaecat cupidatat non proiden
                                    </Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultiple allowToggle gap={10} display={'flex'} flexDirection={'column'}>
                    <AccordionItem bg='white' borderRadius={'15px'} border='none'>
                        <h2>
                            <AccordionButton p='20px'>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading size='sm' color='tfontmain' pr='5px'>
                                        Ut enim ad minim veniam
                                    </Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem bg='white' borderRadius={'15px'} border='none'>
                        <h2>
                            <AccordionButton p='20px'>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading size='sm' color='tfontmain' pr='5px'>
                                        Wisi ut aliquip ex ea commodo consequat
                                    </Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem bg='white' borderRadius={'15px'} border='none'>
                        <h2>
                            <AccordionButton p='20px'>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading size='sm' color='tfontmain' pr='5px'>
                                        Duis aute irure dolor in reprehenderi
                                    </Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem bg='white' borderRadius={'15px'} border='none'>
                        <h2>
                            <AccordionButton p='20px'>
                                <Box as='span' flex='1' textAlign='left'>
                                    <Heading size='sm' color='tfontmain' pr='5px'>
                                        Excepteur sint occaecat cupidatat non proident
                                    </Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </SimpleGrid>
        </Box>
    );
}

export default FAQ;