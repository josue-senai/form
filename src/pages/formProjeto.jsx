import React from "react";
import { VStack, Input, CheckboxGroup, Checkbox, HStack } from "@chakra-ui/react";

function formProjeto() {
    return (
        <VStack>
            <Input type="text" placeholder="Projeto" />
            <Input type="text" placeholder="Area" />
            <Input type="text" placeholder="Coordenador/Professor" />
            <CheckboxGroup>
                <HStack spacing={4}>
                    <Checkbox value="CETCC">CETCC</Checkbox>
                    <Checkbox value="CETAFAJU">CETAFAJU</Checkbox>
                    <Checkbox value="CETICC">CETICC</Checkbox>
                    <Checkbox value="CETAFEST">CETAFEST</Checkbox>
                </HStack>
            </CheckboxGroup>
        </VStack>
    )
}

export default formProjeto