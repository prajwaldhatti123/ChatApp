import { Grid, Skeleton, Stack } from "@mui/material";

export const LayoutLoaders = () => {
  return (
    <Grid sx={{ height: "100vh", display: "flex" }}>
      {/* sidebar grid */}
      <Grid
        item
        container
        sx={{
          // display: "flex",
          // flex: "0 0 auto",
          display: { xs: "block" },
          flexDirection: "column",
          borderRight: "1px solid black",
          height: "100vh", // Set a fixed height
          overflowY: "auto",
        }}
        xl={3}
        lg={4}
        // md={4}
        // sm={4}
        // xs={12}
      >
        <Stack spacing={"1vh"}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              sx={{ height: "9vh" }}
            ></Skeleton>
          ))}
        </Stack>
      </Grid>
      {/* message grid */}
      <Grid
        item
        container
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
        }}
        xl={9}
        lg={8}
        md={8}
        sm={8}
        // xs={0}
      >
        <Skeleton variant="rectangular" sx={{ height: "100vh" }}></Skeleton>
      </Grid>
    </Grid>
  );
};

// export default Loaders;
