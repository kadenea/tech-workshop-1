type Params = {
    projectId: string;
}

export async function generateStaticParams(): Promise<Params[]> {
    return ["project1", "project2", "project3"].map(p => ({ projectId: p }));
}

const ProjectNamePage = ({ params }: { params: Params }) => {
    return (
        <p>This page features project {params.projectId}</p>
    );
};

export default ProjectNamePage;