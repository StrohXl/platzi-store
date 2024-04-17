import { Box, Button } from "@mui/material";

export default function ButtonsLoged() {
  return (
    <Box display={'flex'} gap={1} >
      <Button variant="contained" >Login</Button>
      <Button variant="outlined" >Sign up</Button>
    </Box>
  );
}
