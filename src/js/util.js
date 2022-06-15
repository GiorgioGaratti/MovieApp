export const formattaruntime = (film) => {
    const modruntint = (film.Runtime).substr(0, 3);
    const modruntstr = (film.Runtime).replace(film.Runtime, modruntint);
    return modruntstr;
}

export const formattaruntimeseries = (series) => {
    const modruntint = (series.Runtime).substr(0, 2);
    const modruntstr = (series.Runtime).replace(series.Runtime, modruntint);
    return modruntstr;
}