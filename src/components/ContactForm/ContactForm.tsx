import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { Fragment, useState } from "react";
import AlertDialogSlide from "../AlertDialog/AlertDialog";
import DialogContentText from "@mui/material/DialogContentText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import emailjs from "@emailjs/browser";
import validationSchema from "./ContactForm.ValidationSchema";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

type FormValues = {
  firstName?: string;
  lastName?: string;
  emailAddress: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const onSubmit = (data: FormValues) => {
    setSubmitError(null);
    try {
      emailjs.send(serviceId!, templateId!, data, publicKey!).then(
        () => {
          setDialogOpen(true);
          setDisableSubmit(true);
        },
        (error) => {
          setSubmitError(error?.text ?? "Failed to send message. Please try again.");
        }
      );
    } catch (error: any) {
      setSubmitError(error?.message ?? "Failed to send message. Please try again.");
    }
  };

  return (
    <Fragment>
      <Fragment>
        <Typography variant="h6" gutterBottom>
          Send me an email
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              variant="filled"
              {...register("firstName")}
              error={errors.firstName ? true : false}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              variant="filled"
              {...register("lastName")}
              error={errors.lastName ? true : false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              label="Email Address"
              fullWidth
              autoComplete="email"
              variant="filled"
              {...register("emailAddress")}
              error={errors.emailAddress ? true : false}
              helperText={errors.emailAddress?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="subject"
              label="Subject"
              fullWidth
              variant="filled"
              {...register("subject")}
              error={errors.subject ? true : false}
              helperText={errors.subject?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="message"
              label="Message"
              fullWidth
              variant="filled"
              helperText={
                errors.message
                  ? errors.message?.message
                  : "Please enter your message here and I'll get back to you as soon as possible!"
              }
              multiline
              rows={6}
              {...register("message")}
              error={errors.message ? true : false}
            />
          </Grid>
        </Grid>
      </Fragment>
      {submitError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {submitError}
        </Alert>
      )}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          disabled={disableSubmit}
          onClick={handleSubmit(onSubmit)}
          sx={{ mt: 3, ml: 1 }}
        >
          Submit
        </Button>
      </Box>
      <AlertDialogSlide
        dialogOpen={dialogOpen}
        handleClose={handleDialogClose}
        dialogTitle="Message Sent!"
        dialogContent={
          <DialogContentText id="alert-dialog-slide-description">
            <CheckCircleIcon color="success" fontSize="large" />
            <br />
            I'll get back to you as soon as possible!
          </DialogContentText>
        }
      />
    </Fragment>
  );
};

export default ContactForm;
