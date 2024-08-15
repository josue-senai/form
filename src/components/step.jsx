import React from "react";
import { Center, Box } from "@chakra-ui/react";

function Step({ index, active }) {
    return (
        <Center>
            <Box py={4} px={4} borderRadius={2} bg={active ? "green.500" : "gray.300"} color={active ? "white" : "black"} style={{scale: active ? "1.2" : "none"}}>
                {index}
            </Box>
        </Center>
    )
}

export default Step