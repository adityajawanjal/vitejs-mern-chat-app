import { Box, Button, Heading, Input, Stack } from "@chakra-ui/react"

const Home = () =>{
  return (
    <>
      <Box>
        <Heading textAlign={"center"} mt={"8"} mb={"10"} >Get Started to Chat !</Heading> 
        <Stack p={"5"} pt={"16"} pb={"16"} gap={2} justifyContent={"center"} alignItems={"center"} border={"1px solid red"} borderRadius={"3xl"} >
          <Input type={"text"} w={"80%"} placeholder={"Enter Your Name"} border={"1px solid blue"} />
          <Input type={"email"} w={"80%"} placeholder={"Enter Your Email"}  border={"1px solid blue"} />
          <Input type={"password"} w={"80%"} placeholder={"Enter Your Password"}  border={"1px solid blue"} />
          <Button size={"lg"} bgColor={"linkedin.200"} w={"80%"} >Start Chat</Button>
        </Stack>
      </Box>
    </>
  )
}
export default Home;