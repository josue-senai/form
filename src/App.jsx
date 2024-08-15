import { Flex, Center, HStack, Button, Divider, Box, Heading } from "@chakra-ui/react"
import { useState } from "react"
import Step from "./components/step"
import FormPessoal from "./pages/formPessoal"
import FormEndereco from "./pages/formEndereco"
import FormProjeto from "./pages/formProjeto"

function App() {
  const [step, setStep] = useState(1)
  const Steps = [1, 2, 3]

  function getStep() {
    switch (step) {
      case 1:
        return <FormPessoal />
      case 2:
        return <FormEndereco />
      case 3:
        return <FormProjeto />
    }
  }

  function getTitle() {
    switch (step) {
      case 1:
        return "Pessoal"
      case 2:
        return "Endereco"
      case 3:
        return "Projeto"
    }
  }

  return (
    <Flex h={"100vh"} align={"center"} justify={"center"}>



      <Center maxW={"700px"} w={"100%"} py={10} px={4} flexDirection={"column"} border={"solid 2px black"} borderRadius={"8px"}>

        <Heading as='h2' size='xl' mb={4}>
          {getTitle()}
        </Heading>

        <HStack spacing={10}>
          {Steps.map(item =>
            <Step key={item} index={item} active={step === item} />
          )}
        </HStack>

        <Divider my={4} borderColor={"black.400"}></Divider>

        <Box w={"80%"}>{getStep()}</Box>

        <HStack mt={4} spacing={10}>

          <Button bg={"gray.200"} onClick={() =>
            step !== 1 && setStep(step - 1)
          }>
            Voltar
          </Button>

          <Button bg={"green"} onClick={() =>
            step !== 3 && setStep(step + 1)
          }>
            {step === 3 ? "Enviar" : "Próximo"}
          </Button>

        </HStack>

      </Center>

    </Flex>
  )
}

export default App
