import Typography from "@mui/material/Typography";
import { Fragment } from "react";

import profilePic from "../../assets/images/profilePic.jpg";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <Fragment>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        rowSpacing={1}
        columns={{ xs: 4, sm: 4, md: 8 }}
        sx={{ flexGrow: 1, paddingBottom: "10px", paddingTop: "10px" }}
      >
        <Grid item xs={4}>
          <Avatar
            alt="Uygur Tepe"
            src={profilePic}
            sx={{ width: 384, height: 384 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3">Uygur Tepe</Typography>
          <Typography variant="h5">A bit about me</Typography>
          <Typography variant="body1" sx={{ textAlign: "left" }}>
            I'm an engineer who loves to learn and build things. I'm currently
            heavily interested embedded systems, software development and
            bridging the gap between hardware and software. I have worked with a
            variety of tools and technologies and am always looking to learn
            more. My ultimate goal is to further improve the link between humans
            and computer systems to aid in the development of new technologies.
            To pursue this goal, I have worked in soft robotics, embedded systems and have aided in developing non-conventional Hardware-in-the-Loop
            environment for thermal systems. I have recieved my B.A.S.c in
            Electrical and Computer Engineering with a Minor in Computer Science
            and Mathematics from the University of Windsor.
            {/* I'm currently working as a Mechatronics Engineer at {"Daimler Truck"} for the Powertrain Hardware-in-the-Loop Team.  */}
          </Typography>
          <Button
            variant="text"
            size="large"
            startIcon={<LocationOnIcon />}
            href="https://maps.app.goo.gl/ejH4KheBRx56T2aC9"
            target="_blank"
          >
            Detroit, MI
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
