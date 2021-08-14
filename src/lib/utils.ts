/*
 * YouTube videoId mangling. YouTube URLs may appear as:
 *
 * (1) https://youtu.be/Gvlkrm873JE
 * (2) https://www.youtube.com/watch?v=Gvlkrm873JE
 * (3) https://www.youtube.com/watch?v=OBnD5Q0xOLw&ab_channel=CrossFitGames
 */
export const getVideoIdFromYouTubeURL = (url: string) => {
    let out: string = '';

    out = url
        .replace(/^.*\//, '')           // strip scheme, domain name, path
        .replace(/^.*\?/, '');          // strip rest of url

    const tokens: string[] = out.split('&');      // get tokens

    const re = /v=(.+)/;
    return tokens.some((token) => {     // iterate tokens
        const found: string[] | null = token.match(re);

        if (found !== null) {
            out = found[1];             // (1), (2), (3)
            return true;
        }
        return false;
    }) ? out : tokens[0];
};
