let bar = document.createElement('div');
bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "999";
bar.style.transition = '0.2s';

document.body.append(bar);

function updateBar() {
    let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = window.scrollY;

    let barPercent = Math.floor((scroll * 100)/maxScroll);

    bar.style.width = `${barPercent}%`;
}

window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', updateBar);
});