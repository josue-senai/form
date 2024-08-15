import React from "react";
import { Input, VStack, RadioGroup, HStack, Radio } from "@chakra-ui/react";

function formPessoal() {
    return (
        <VStack>
            <Input type="text" placeholder="inserir nome" />
            <Input type="text" placeholder="inserir cpf" />
            <Input type="email" placeholder="inserir email" />
            <RadioGroup>
                <HStack spacing={5}>
                    <Radio value="masculino">Masculino</Radio>
                    <Radio value="feminino">Feminino</Radio>
                </HStack>
            </RadioGroup>
        </VStack>
    )
}

export default formPessoal