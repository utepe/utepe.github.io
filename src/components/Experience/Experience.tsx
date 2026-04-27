import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import UnorderedList from "../UnorderedList/UnorderedList";
import DOMPurify from "dompurify";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(2.5),
  color: theme.palette.text.primary,
}));

export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const sanatizeData = (data: string) => ({
    __html: DOMPurify.sanitize(data),
  });

  return (
    <Item elevation={1} sx={{ textAlign: "left" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        rowSpacing={0.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ flexGrow: 1 }}
      >
        <Grid item xs={7}>
          <Typography variant="h5">{experience.jobTitle}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6" sx={{ textAlign: "end" }}>
            {experience.company}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" color="text.secondary">
            {experience.location}
          </Typography>
        </Grid>
      </Grid>
      <UnorderedList
        elements={experience.description}
        renderElement={(element) => (
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={sanatizeData(element)}
          />
        )}
      />
    </Item>
  );
};

export default ExperienceCard;
