export const load = async() => {
    const getLives = async() => {
        const res = await fetch("https://api.ntdi.world/v1/lives");
        const data = await res.json();
        return data;
    };

    return {
        lives: getLives(),
    };
}