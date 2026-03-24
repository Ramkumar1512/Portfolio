type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_url: string;
};

export default function ProjectCard({ project }: { project: Project }) {

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

      <h3 className="text-xl font-bold mb-2">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4">
        {project.description}
      </p>

      <p className="text-sm mb-4">
        Tech: {project.tech_stack}
      </p>

      <a
        href={project.github_url}
        target="_blank"
        className="text-blue-400"
      >
        GitHub →
      </a>

    </div>
  );
}