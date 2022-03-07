import solaytic from "../assets/solaytic.png";
import kanba from "../assets/kanba.png";
import lighting from "../assets/lighting.png";
import ztos from "../assets/ztos.png";
import goldline from "../assets/goldline.png";

import noJobs from "../assets/noJobs.png";
import dropdown from "../assets/dropdown.png";
import cross2 from "../assets/cross2.png";

function importAll(r) {
    let imgObj = {}
    let a = r.keys().map(r);

    a.forEach(d => {
        const key = d.default?.split("/")[3]?.split(".")[0] || d?.split("/")[3]?.split(".")[0];
        imgObj[key] = d?.default || d;
    })
    return imgObj
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

export default images;


export const static_images = {
    solaytic,
    kanba,
    lighting,
    ztos,
    goldline,
    noJobs,
    dropdown,cross2
}
