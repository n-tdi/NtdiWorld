export const load = async({ params }) => {

    const getProject = async({ slug }) => {
        const res = await fetch("https://api.ntdi.world/v1/project/" + slug);
        const data = await res.json();
        return data;
    };

    return {
        project: getProject(params),
    };
}