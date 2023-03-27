export const load = async() => {
    const getPreviews = async() => {
        const res = await fetch("https://api.ntdi.world/v1/preview");
        const data = await res.json();
        return data;
    };

    return {
        previews: getPreviews(),
    };
}