export const load = async() => {
    const getPreviews = async() => {
        const res = await fetch("http://127.0.0.1:8080/v1/preview");
        const data = await res.json();
        return data;
    } ;

    return {
        previews: getPreviews(),
    };
}