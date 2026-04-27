import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Fragment } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTransition from "../../components/PageTransition/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <Fragment>
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <Typography variant="h3">Contact Me</Typography>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 1, md: 2 }, p: { xs: 2, md: 3 } }}
          >
            <ContactForm />
          </Paper>
        </Container>
      </Fragment>
    </PageTransition>
  );
};

export default Contact;
