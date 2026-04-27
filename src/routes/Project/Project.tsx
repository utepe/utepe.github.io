import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import projectData from "../../constants/projects.json";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import UnorderedList from "../../components/UnorderedList/UnorderedList";

export interface Project {
  id: number;
  titleId: string;
  title: string;
  overview: string;
  githubLink: string;
  poster?: string;
  image: string;
  youtubeEmbedId?: string;
  keyPoints?: string[];
}

// TODO: Replace the modal in ActionAreaCard with navigation to this route.
// Each project should have its own dedicated page at /projects/:titleId with
// a full layout (hero image, overview, key points, YouTube embed, poster PDF, GitHub link).
const ProjectPage = () => {
  const params = useParams();

  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const data = projectData.find(
      (project) => project.titleId === params.titleId
    );
    setProject(data);
  }, [params.titleId]);

  return project ? (
    <div>
      <h1>{project.title}</h1>
      <p>{project.overview}</p>
      {project.keyPoints && (
        <UnorderedList elements={project.keyPoints} renderElement={element => element}/>
      )}
      {project.youtubeEmbedId && (
        <YoutubeEmbed embedId={project.youtubeEmbedId} />
      )}
    </div>
  ) : (
    <h1>404</h1>
  );
};

export default ProjectPage;
