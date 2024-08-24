import { Button, Grid, Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ marginBottom: "16px" }} variant="h6">
            Company{" "}
          </Typography>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            About{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Blog{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Press{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Jobs{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Partners{" "}
          </Button>{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ marginBottom: "16px" }} variant="h6">
            Solutions{" "}
          </Typography>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Marketing{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Analytics{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Commerce{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Insights{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Support{" "}
          </Button>{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ marginBottom: "16px" }} variant="h6">
            Documentation{" "}
          </Typography>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Guides{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            API Status{" "}
          </Button>{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ marginBottom: "16px" }} variant="h6">
            Legal{" "}
          </Typography>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Claim{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Privacy{" "}
          </Button>{" "}
          <Button sx={{ marginBottom: "16px" }} variant="text">
            Terms{" "}
          </Button>{" "}
        </Grid>{" "}
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            & copy; 23 My Company.All rights reserved.{" "}
          </Typography>{" "}
          <Typography variant="body2" component="p" align="center">
            Made with love by Me{" "}
          </Typography>{" "}
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              freepik{" "}
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com"
              color="inherit"
              underline="always"
            >
              www.flaticon.com{" "}
            </Link>{" "}
          </Typography>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </div>
  );
};

export default Footer;
