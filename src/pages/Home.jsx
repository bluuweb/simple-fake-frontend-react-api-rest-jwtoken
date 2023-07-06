import { Grid } from "@mui/material";
import Card from "../components/Card";

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
    >
      {Array(8)
        .fill()
        .map((_, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
          >
            <Card key={i} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
