import { Fragment, useEffect, useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Button, Typography, Box, Chip, useMediaQuery, useTheme } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import experienceData from "../../constants/experience.html.json";
import educationData from "../../constants/education.json";
import ExperienceCard, {
  Experience,
  Item,
} from "../../components/Experience/Experience";
import TwoItemGridCard from "../../components/TwoItemGridCard/TwoItemGridCard";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import PageTransition from "../../components/PageTransition/PageTransition";

import TepeResume from "../../assets/pdfs/TepeResume.pdf";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "C#", "Java", "TypeScript/JavaScript", "C/C++", "VHDL"],
  },
  {
    label: "Engineering Tools",
    skills: [
      "MATLAB/Simulink",
      "dSPACE ControlDesk",
      "PROVEtech:TA",
      "ecu.test",
      "Unity",
      "RaspberryPi",
      "Arduino",
      "LabVIEW",
      "LTSpice",
      "FPGA",
      "ModelSim",
    ],
  },
  {
    label: "Frameworks",
    skills: [
      "React",
      "Express",
      "Mongoose",
      "ASP.NET",
      "SpringBoot",
      "AWS-SDK",
      "MaterialUI",
    ],
  },
  {
    label: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "AWS",
      "Jenkins",
      "Azure",
      "VS Code",
      "Visual Studio",
      "IntelliJ",
    ],
  },
  {
    label: "Libraries",
    skills: ["SciPy", "pandas", "NumPy", "Matplotlib", "MicroPython"],
  },
];

const Resume = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Experience[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setExperiences(experienceData);
    setEducations(educationData);
  }, []);

  return (
    <PageTransition>
      <Fragment>
        <TwoItemGridCard
          leftItem={<Typography variant="h3">Experiences</Typography>}
          rightItem={
            <Button
              variant="outlined"
              color="primary"
              endIcon={<PictureAsPdfIcon />}
              href={TepeResume}
              target="_blank"
            >
              View Full Resume
            </Button>
          }
        />

        <Timeline position={isMobile ? "right" : "alternate-reverse"}>
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id}>
              <TimelineOppositeContent
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                  pt: "6px",
                  pb: 2,
                  color: "text.secondary",
                }}
              >
                <Typography variant="body2">
                  {experience.startDate} – {experience.endDate}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ pb: 3, textAlign: "left" }}>
                <ScrollReveal delay={index * 0.1}>
                  <Box sx={{ display: { xs: "block", md: "none" }, mb: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      {experience.startDate} – {experience.endDate}
                    </Typography>
                  </Box>
                  <ExperienceCard experience={experience} />
                </ScrollReveal>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        <div>
          <Typography variant="h3" sx={{ mb: 0 }}>Education</Typography>
          <Timeline position={isMobile ? "right" : "alternate-reverse"}>
            {educations.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <TimelineOppositeContent
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                    pt: "6px",
                    pb: 2,
                    color: "text.secondary",
                  }}
                >
                  <Typography variant="body2">
                    {edu.startDate} – {edu.endDate}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < educations.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ pb: 3, textAlign: "left" }}>
                  <ScrollReveal delay={index * 0.1}>
                    <Box sx={{ display: { xs: "block", md: "none" }, mb: 0.5 }}>
                      <Typography variant="caption" color="text.secondary">
                        {edu.startDate} – {edu.endDate}
                      </Typography>
                    </Box>
                    <ExperienceCard experience={edu} />
                  </ScrollReveal>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Skills
          </Typography>
          <Item elevation={1}>
            {skillGroups.map((group) => (
              <Box key={group.label} sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, mb: 1, color: "text.secondary" }}
                >
                  {group.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Item>
        </div>
      </Fragment>
    </PageTransition>
  );
};

export default Resume;
