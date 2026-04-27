import { Fragment, useEffect, useState } from "react";

import projectData from "../../constants/projects.json";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "../../components/ActionAreaCard/ActionAreaCard";
import { Project } from "../Project/Project";
import Typography from "@mui/material/Typography";
import PageTransition from "../../components/PageTransition/PageTransition";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <PageTransition>
      <Fragment>
        <Typography variant="h3">Projects</Typography>
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          columns={{ xs: 6, sm: 8, md: 12, lg: 12, xl: 12 }}
          sx={{ paddingTop: "10px" }}
        >
          {projects.map((project, index) => {
            return (
              <Grid item xs={6} sm={4} md={4} lg={4} xl={3} key={project.id}>
                <ScrollReveal delay={index * 0.08}>
                  <ActionAreaCard project={project} />
                </ScrollReveal>
              </Grid>
            );
          })}
        </Grid>
      </Fragment>
    </PageTransition>
  );
};

export default Projects;
