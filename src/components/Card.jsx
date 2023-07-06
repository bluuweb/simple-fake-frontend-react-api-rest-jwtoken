import { Box, Button, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const Card = () => {
  return (
    <Box
      component="main"
      sx={{ border: 2, boxShadow: 2, borderRadius: 2, p: 2 }}
    >
      <Typography
        variant="h2"
        component="h1"
        color="dark"
      >
        Test
      </Typography>
      <Button
        variant="contained"
        color="danger"
        sx={{ color: "#fff" }}
        startIcon={<AirplanemodeActiveIcon />}
      >
        Hello World
      </Button>
    </Box>
  );
};

export default Card;
