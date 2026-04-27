import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { Button, CardActionArea } from "@mui/material";
import { Project } from "../../routes/Project/Project";
import { Fragment, useState } from "react";
import UnorderedList from "../UnorderedList/UnorderedList";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Transition } from "../AlertDialog/AlertDialog";
import TwoItemGridCard from "../TwoItemGridCard/TwoItemGridCard";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { motion } from "framer-motion";

type ActionAreaCardProps = {
  project: Project;
};

const ActionAreaCard = ({ project }: ActionAreaCardProps) => {
  const { title, overview, image, githubLink, keyPoints, youtubeEmbedId, poster } =
    project;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (youtubeEmbedId) {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        // eslint-disable-next-line no-self-assign
        iframe.src = iframe.src; // forces YouTube to stop playing on dialog close
      }
    }
  };

  return (
    <Fragment>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          sx={{
            maxWidth: 600,
            position: "relative",
            "&:hover .hover-overlay": { opacity: 1 },
          }}
        >
          <Box
            className="hover-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 4, 53, 0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.25s ease",
              zIndex: 1,
              pointerEvents: "none",
              borderRadius: "inherit",
            }}
          >
            <Typography variant="subtitle1" color="white" fontWeight={600}>
              View Details
            </Typography>
          </Box>
          <CardActionArea onClick={handleClickOpen}>
            <CardMedia
              component="img"
              image={require(`../../assets/projectImages/${image}`)}
              alt={`${title} image`}
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>

      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-slide-description">
            {overview}
          </DialogContentText>
          {keyPoints && (
            <Fragment>
              <DialogContentText
                id="dialog-slide-description"
                variant="subtitle1"
              >
                <br />
                <b>Key Points from the Project</b>
              </DialogContentText>
              <UnorderedList
                elements={keyPoints}
                renderElement={(element) => (
                  <DialogContentText id="dialog-slide-key-points">
                    {element}
                  </DialogContentText>
                )}
              />
            </Fragment>
          )}
          <TwoItemGridCard
            leftItem={
              <Button
                variant="outlined"
                href={githubLink}
                endIcon={<GitHubIcon />}
                target="_blank"
              >
                View Github Repository
              </Button>
            }
            rightItem={
              poster ? (
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<PictureAsPdfIcon />}
                  href={require(`../../assets/pdfs/${poster}`)}
                  target="_blank"
                >
                  View Poster
                </Button>
              ) : null
            }
          />
          {youtubeEmbedId && <YoutubeEmbed embedId={youtubeEmbedId} />}
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default ActionAreaCard;
