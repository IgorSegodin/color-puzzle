import {createApp} from 'vue'
import App from 'App.vue'

createApp(App).mount('#app');

// TODO move to a propper place

function toDegrees(rads) {
    return rads * (180 / Math.PI);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function ctg(x) {
    return 1 / Math.tan(x);
}

const glassHeight = 40;
const glassBottomDiff = 5; // glass bottom width differs from top width in 5 points each side
const glassSideLength = Math.sqrt(glassHeight * glassHeight + glassBottomDiff * glassBottomDiff); // length of one of the longest sides, hypothenuse
const baseAngle = toDegrees(
    Math.asin(glassHeight * Math.sin(toRadians(90)) / glassSideLength)
);
console.log('Angle');
console.log(baseAngle);

console.log('Bottom width');
console.log(
    calcGlassBottomWidth({
        height: glassHeight,
        topWidth: 30,
        angle: baseAngle
    })
);

for (let i = 0; i <= 7; i++) {
    const h = 40 - i * 5
    console.log(h);
    console.log("Width");
    console.log(
        calcGlassBottomWidth({
            height: h,
            topWidth: 30,
            angle: baseAngle
        })
    );
}





function calcGlassBottomWidth({height, topWidth, angle}) {
    // b = a - h · (ctg α + ctg β)
    return topWidth - height * (
        ctg(toRadians(angle)) * 2
    )
}