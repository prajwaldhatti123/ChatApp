import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid
        item
        xs={10}
        sm={8}
        md={6}
        lg={4}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1718236800&v=beta&t=di_fyY1tJzLTsVx2AUpzFXilEhpHoT7iKNe9B-D3KXw"
          alt="404 Error"
          style={{
            maxWidth: "50%",
            height: "50%",
          }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4">Page Not Found</Typography>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Go Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
