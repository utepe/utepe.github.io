import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import profilePic from "../../assets/images/profilePic.jpg";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #000435 0%, #1a237e 60%, #283593 100%)",
          color: "white",
          px: { xs: 3, md: 8, xl: 12 },
          mx: { xs: -2, md: -4, xl: -8 },
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
          columnSpacing={6}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ width: "100%", py: 6 }}
        >
          <Grid item xs={4} sm={3} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Avatar
                alt="Uygur Tepe"
                src={profilePic}
                sx={{
                  width: { xs: 200, md: 240, lg: 280, xl: 360 },
                  height: { xs: 200, md: 240, lg: 280, xl: 360 },
                  border: "4px solid rgba(255,255,255,0.3)",
                  boxShadow: 8,
                }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={4} sm={5} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Typography variant="h3" sx={{ color: "white", mb: 0.5 }}>
                Uygur Tepe
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "rgba(255,255,255,0.7)", mb: 2, fontWeight: 500 }}
              >
                Electrical &amp; Computer Engineer
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.85)", textAlign: "left", mb: 2 }}
              >
                I'm a Mechatronics Engineer at Daimler Truck North America, where I architect
                automated testing infrastructure for embedded systems — designing the frameworks
                and CI/CD pipelines that validate next-generation vehicle software at scale. My
                work sits at the intersection of embedded systems, test automation, and
                hardware-software integration — an area I've pursued across roles in automotive,
                research, and enterprise software.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.85)", textAlign: "left", mb: 2 }}
              >
                I'm driven by a strong curiosity for learning and building, with a particular
                focus on bridging the gap between hardware and software. My experience spans
                embedded systems, software development, soft robotics, and the development of
                non-conventional HIL environments for thermal systems. I'm especially interested
                in advancing the connection between humans and computer systems to enable new
                technologies.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.85)", textAlign: "left", mb: 3 }}
              >
                I hold an M.S.E. in Computer Science and Engineering from the University of
                Michigan and a B.A.Sc. in Electrical and Computer Engineering, with a minor in
                Computer Science and Mathematics, from the University of Windsor.
              </Typography>

              <Fragment>
                <Button
                  variant="text"
                  size="large"
                  startIcon={<LocationOnIcon />}
                  href="https://maps.app.goo.gl/ejH4KheBRx56T2aC9"
                  target="_blank"
                  sx={{ color: "rgba(255,255,255,0.7)", mr: 1 }}
                >
                  Detroit, MI
                </Button>
              </Fragment>

              <Box sx={{ mt: 1 }}>
                <IconButton
                  aria-label="LinkedIn"
                  size="large"
                  href="https://www.linkedin.com/in/uygur-tepe/"
                  target="_blank"
                  sx={{ color: "rgba(255,255,255,0.8)", "&:hover": { color: "white" } }}
                >
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="GitHub"
                  size="large"
                  href="https://github.com/utepe"
                  target="_blank"
                  sx={{ color: "rgba(255,255,255,0.8)", "&:hover": { color: "white" } }}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="Email"
                  size="large"
                  href="mailto:uygurtepe@protonmail.com"
                  sx={{ color: "rgba(255,255,255,0.8)", "&:hover": { color: "white" } }}
                >
                  <EmailIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </PageTransition>
  );
};

export default Home;
