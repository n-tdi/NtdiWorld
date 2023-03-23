export const load = async({ params }) => {

    const getProject = async({ slug }) => {
        const res = await fetch("http://127.0.0.1:8080/v1/project/" + slug);
        const data = await res.json();
        return data;
    };

    return {
        project: getProject(params),
    };
}