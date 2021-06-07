let MyDate = new Date(); // declaração data
let MyDateString; // declaração data
let cidadesMenor = document.getElementById("localidadeMenor"); // declaração resposta tela menor
let cidadesMaior = document.getElementById("localidadeMaior"); // declaração resposta tela menor


MyDate.setDate(MyDate.getDate()); // setando a data
MyDateString = ('0' + MyDate.getDate()).slice(-2) + '/' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '/' + MyDate.getFullYear(); // atribuindo valor data
document.getElementById("data").innerHTML = MyDateString; // printando a data


if (screen.width <= 1366) { // condição tela pequena, mandara para o html:
    document.getElementById("cidades").innerHTML = ` 
    <svg id="mapa" class="monitorMenor" xmlns="http://www.w3.org/2000/svg" width="700" height="500"
    viewBox="0 0 533 487.062">
    <a href="jcr_escolha.html">
    <path id="Forma_1" data-name="Forma 1" class="cls-1" onmouseover="destaqueJacarei(this)" onmouseout="normalJacarei(this)" d="M30,217s2.481,3.95,2,7c2.467,0.471,6.953-.454,6,4,1.627,1.752,6.811,3.842,6,9s2.4,6.912,7,8c4.227,4.159,4.157,5.876,8,6,2.247,1.844,4.437,2.087,5,0,1.177-.736,2.208.559,2,2s3.678,7.839,8,9c0.145-1.787,6.554-6.16,9-6a3.18,3.18,0,0,1,3,2l1-4s3.008,2.788,3,1-2.782-5.441,1-3,9.2,8.245,6,0c1.59-.426,3.842-1.626,7,1s5-5,5-5h4l1-4s1.006,4,3,2,8.233-4.421,3-8-2-6.982,1-10c-3.274-.412-9.974.424-13,3-2.027.08-7.041-1.76-13-2-1.716-1.862-6.037-5.775-5-8-2.208-2.225-3.808-6.4-8-3a68.323,68.323,0,0,1-6-6s-1.677-2.413,2-2a4.477,4.477,0,0,0,4-4s-2.576-4.294-9-2c-0.808-2.2.787-8.538-7-1-1.3.424-1.221,1.314-7-3-3.532-2.317-5.357-2.666-9,3-1.771,2.795-3,5-3,5l-8,1Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="sjc_escolha.html">
    <path id="Forma_2" data-name="Forma 2" class="cls-2" onmouseover="destaqueSjc(this)" onmouseout="normalSjc(this)" d="M121,228s6.908-10.024,11-9c3.343-1.722,4.413-3.407,6-4a27.016,27.016,0,0,1,4-1s-3.215-4.669-4-6-1.347-4.3-3-4c-0.156-1.824-1-6-1-6a7.086,7.086,0,0,1-2-7c1.222-4.176,2-5,2-5l-3-1s-18.131-16.119-19-22c-1.743.984-2,0-2,0s-7.15-2.381-9-8c-1.975.746-9,5-9,5l-4-4,15-15-2-7s7.863-10.675,7-12c-1.612-.951-5.019.923-5-9-1.6-.438-3.4-1.578-3-6a29.227,29.227,0,0,1-3,0l-7,7s-6.432,1.952-9,5c-1.445-.447-4.062-0.667-5,3-2.56,1.171-9,2-9,2s-7.7.226-3,7c-0.794,2.78-3.084,3.625-3,13-2.287,1.762-7.226,4.744-9,5-0.276,2.753-.229,6.885-2,9s-0.491,11.529-5,13-5.734,2.416-3,6c-0.011,3.584,0,6,0,6a5.232,5.232,0,0,1,1,7c-0.263,3.065,0,3,0,3s3.267,2.949,3,6c2.978,0.68,4,1,4,1v3l4-4h4l1,1,4,2,1,1,1,1,1-1h1l1-1,1-2h4v2l1,1a0.7,0.7,0,0,1,1,0,2.834,2.834,0,0,0,2,0l3,1,1,1h1v3l-1,1-1,1H79l-2,1v2l1,1,3,2,1,2h1l1-1h3l1,2,1,1,1,1h0l1,1v2l1,1v1l1,1,1,1,1,1h2l4,1h1l1,1h6l1-1h3l1-2h7Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="tbt_escolha.html">
    <path id="Forma_3" data-name="Forma 3" class="cls-3"  onmouseover="destaqueTaubate(this)" onmouseout="normalTaubate(this)" d="M149,140l-5,4,3,7-1,5h3s-2.688,4.165,9,7,8,17,8,17-2.8,5.662,7,7c3.12,1.338.527,6.523-3,9a23.293,23.293,0,0,0,5,1s2.491,3.469,7,0,5.265-1.477,6,0,0.65,2.792,7,3c0.166,3.67-2,8.191,7,11s11.066,1.126,13-1a5.42,5.42,0,0,1,4-2l6-6,3-1,7-9s11.783-.017,7-10c5.854-2.07,6.047-3.189,13-3-0.715-4.015-5-7.308-1-9s4.209-4.4,2-7-8,1-8,1-4.412-1.427-5-4-5.334-.555-11,4c-4.43,1.588-9.676,5.757-12,8-2.571.759-5.513,0.842-8-6s-4.071-4.911-6-6-3-12-3-12-8.7,3.271-10,4-2.583,2.464-8-1c-3.191,0-20,0-20,0Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="pinda_escolha.html">
    <path id="Forma_4" data-name="Forma 4" class="cls-4" onmouseover="destaquePinda(this)" onmouseout="normalPinda(this)" d="M203,148v-7s-5.382-3.721-5-7a31.888,31.888,0,0,0-6,0s-0.982-5.28-2-7-6.388-4.571-11-5-15.805-.56-18,0c2.752-3.149,9-10,9-10l1-7a5.971,5.971,0,0,0,4-5,44.709,44.709,0,0,0,7,0l2-4s16.755-1.78,22-9c6.482-4.006,19-8,19-8l2,5s7.945,1.965,5,10c-1.709,3.832-.943,5.47,15,7-2.114,1.777-2,2-2,2s-4.543,3.772,2,4a42.866,42.866,0,0,0,2,6s-5.264,6.062,1,2c1.317,1.378-2.37,2.978-3,7s-0.585,8.559,1,10,0,4,0,4l2,6-2,3,2,5-1,3v7l5,2h-3l-1,1-1,1h-2l-1-1-1-1-2-3h-2l-3,1-18,11-1,1h-1l-2,1-4-7-2-4-1-2h-2l-2-1-1-2-1-4v-5Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="caragua_escolha.html">
    <path id="Forma_5" data-name="Forma 5" class="cls-5" onmouseover="destaqueCaragua(this)" onmouseout="normalCaragua(this)" d="M138,326s8.281-5.231,9-9,4.164-1.382,6-1,0.538-.654,2-1a5.107,5.107,0,0,1,4,1c1.224,0.789,1.76,2.669,2,3s13.394,2.749,18-7c2.573-1.717,4.174-1.978,5-2a47.7,47.7,0,0,0,5-1c1.52-.344-0.163-0.334,2-1s1.5,1.309,3-1,0.737-4.37,3-4a10.6,10.6,0,0,1,5,2c0.923,0.81.6,2.24,3,0s7.2-13.115,11-6a74.835,74.835,0,0,0,9,0s0.8-2.27,4-2c3.079-2.19,4.835-3.944,7,0,4.133-4.544,12.186-15.615,18-15s2.123,7.175,2,9,3.94,9.627,4,12-3.877,1.5-4,2,0,4,0,4-7.213-7.011-14,2-7,9-7,9a11.856,11.856,0,0,1-3,1c-0.846,0-2.881-2.824-5,0s-1.7.219-4-1-8.164,2.593-8,20c-2.543.308-8.355-.851-10,10-0.292,2.732-3.28-.459-4-2s-5.691-7.439-12,0c-2.25,2.272-5.878,1.541-8,0s-16.753-5.661-21-6-13,0-13,0-6.908-.895,0-4S150.177,328.583,138,326Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="cacapava_escolha.html">
    <path id="Forma_6" data-name="Forma 6" class="cls-6" onmouseover="destaqueCacapava(this)" onmouseout="normalCacapava(this)" d="M112,164s13.949,21.716,21,22c-0.084,2.661-1.916,7.165-1,9s3.3,5.02,3,9a5.5,5.5,0,0,1,2,2l4,8s24.708-9.955,26-12,2.032-5.051,3-6,4-4,4-4,3.573-2.717-3-6-5.468-8.194-5-13-5.226-10.764-11-11-7-7-7-7h-1v-6s-3.064-3.891-3-5c-2.314.972-6.551,3.084-8,5s-1.863-1.414-5,3-4.62,2.694-7,4C121.768,156.117,124.04,152.855,112,164Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="ilha_bela_escolha.html">
    <path id="Forma_7" data-name="Forma 7" class="cls-7" onmouseover="destaqueBela(this)" onmouseout="normalBela(this)" d="M247,348s-8.3-4.324-11,5-5.292,20.48-31,36c2,5.393.422,11.293,10,12s17.452-3.784,19-4,0.857,4.154,5,0,14.622-1.739,11,5a24.077,24.077,0,0,0,7,6s1.917,2.856,5-2,2.293-5.628,1-7-1-4-1-4,9.263-1.094-1-5a4.657,4.657,0,0,0-1,2l-6-2v-5h-4l3-9,12,1s-5.129-4.326-4-5,2.871-1.388,2-3,2.511-7.918,3-8S257.97,348.563,247,348Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="sao_sebastiao_escolha.html">
    <path id="Forma_8" data-name="Forma 8" class="cls-8" onmouseover="destaqueSebastiao(this)" onmouseout="normalSebastiao(this)" d="M138,326c1.162-.106,24.4,5.465,5,14,1.554,2.065,11.163,1.439,13.844.206,7.765-1.5,23.777,5.319,28.506,7.961C188.577,349.969,193,344,193,344s8.632-1.616,11,6c0.889,2.333,1.908-5.815,4-8s7-2,7-2-2.126,7.4,9,6a56.9,56.9,0,0,1-5,7s6.329,9.991,3,15c-2.485,1.07-4.14,1.132-5,3s-9.92,3.086-12,1c-2.08.305-9.324,6.226-14,2-4.113-.851-6.449-0.961-5-4a3.176,3.176,0,0,0-2-2l-3-1s4.415-10.431-17-2c-1.163-2.54-1.288-5.631-11-5-1.977-1.057-13.676-4.552-24-4-1.323-1-3.972-2.24-12,0-0.715-2.12-1-3-1-3l-10-1,13-12v-8h7S136.838,326.106,138,326Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="ubatuba_escolha.html">
    <path id="Forma_9" data-name="Forma 9" class="cls-9" onmouseover="destaqueUbatuba(this)" onmouseout="normalUbatuba(this)" d="M255,282s3.241,2.076,0,12c2.88,5.473,5.519,6.566,1,12-3.406,4.043,2.5,7.175,4,7s5.6-2.765,8-3,7.548-2.082,4-7-0.972-9.692,4-8,13.532,11.567,8-7c3.928-2.991,12.109,5.865,14,7s6.561-3.122,2-6c2.395-2.322,4.6-4.182,6-2s1,7,1,7,5.2-5.513,6-6-5.2-2.108,1-7c10.1,0.393,10-2,10-2s-4.2-1.439-4-3c-0.912-.17-6,1-6,1s-2.532-9.651,1-10,4,2,4,2l5-1,3,1s1.5-5.479,5-6,6.707,2.363,9-2,3.691-10.352,8-10,6.788-5.571,10-4,0,9,0,9,9.607-3.856,11-3a5.884,5.884,0,0,1,2,3s-1.739,6.581,3,5,10.079-5.028,12-4,16,0,16,0-8.808-7.293-12-8c-0.966-2.654-3-15.941-12-15a16.778,16.778,0,0,0-14-10c-1.675-3.245-1.941-9.576,0-11-1.119-.033-4.2.814-6-1s-7.894-.875-15,7c-2.1,1.477-9.938-2.537-12,1a20.443,20.443,0,0,1-6,6s2.581,10.1-3,13-10.959-1.332-13-2c0.185,4.061,2.65,10.151,1,11s-8.282.926-9,2c-2.944-.316-18.468.593-21,21C275.13,273.883,255,282,255,282Z" transform="translate(-29.563 -47.188)"/>
</a>
<a href="campos_do_jordao_escolha.html">
    <path id="Forma_10" data-name="Forma 10" class="cls-10" onmouseover="destaqueJordao(this)" onmouseout="normalJordao(this)" d="M175,101s-5.766-.317-7-2c-1.234.2-11.739,0.994-10-3s7-9,7-9V83l10-4-1-4,5-2V69s5.382-5.935,9-5,10.215,4.257,19-4c4.671-.376,6-1,6-1l3-11,10,7,1,3s5.39-1.166,6,1,2.246,10.526-2,12-6.726,6.131-6,8c-3.045.327-26.4,15.315-30,16a107.111,107.111,0,0,1-11,1l-2,4Z" transform="translate(-29.563 -47.188)"/>
</a>
        </svg>
    `
}
if (screen.width > 1366) { // condição tela maior, mandara para o html:
    document.getElementById("cidades").innerHTML = `
    <svg id="mapa" class="monitorMaior" xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 374.719 362.156">
    <a href="jcr_escolha.html">
        <path id="Forma_1" data-name="Forma 1" class="cls-1" onmouseover="destaqueJacarei(this)" onmouseout="normalJacarei(this)" d="M30,217s2.481,3.95,2,7c2.467,0.471,6.953-.454,6,4,1.627,1.752,6.811,3.842,6,9s2.4,6.912,7,8c4.227,4.159,4.157,5.876,8,6,2.247,1.844,4.437,2.087,5,0,1.177-.736,2.208.559,2,2s3.678,7.839,8,9c0.145-1.787,6.554-6.16,9-6a3.18,3.18,0,0,1,3,2l1-4s3.008,2.788,3,1-2.782-5.441,1-3,9.2,8.245,6,0c1.59-.426,3.842-1.626,7,1s5-5,5-5h4l1-4s1.006,4,3,2,8.233-4.421,3-8-2-6.982,1-10c-3.274-.412-9.974.424-13,3-2.027.08-7.041-1.76-13-2-1.716-1.862-6.037-5.775-5-8-2.208-2.225-3.808-6.4-8-3a68.323,68.323,0,0,1-6-6s-1.677-2.413,2-2a4.477,4.477,0,0,0,4-4s-2.576-4.294-9-2c-0.808-2.2.787-8.538-7-1-1.3.424-1.221,1.314-7-3-3.532-2.317-5.357-2.666-9,3-1.771,2.795-3,5-3,5l-8,1Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="sjc_escolha.html">
        <path id="Forma_2" data-name="Forma 2" class="cls-2" onmouseover="destaqueSjc(this)" onmouseout="normalSjc(this)" d="M121,228s6.908-10.024,11-9c3.343-1.722,4.413-3.407,6-4a27.016,27.016,0,0,1,4-1s-3.215-4.669-4-6-1.347-4.3-3-4c-0.156-1.824-1-6-1-6a7.086,7.086,0,0,1-2-7c1.222-4.176,2-5,2-5l-3-1s-18.131-16.119-19-22c-1.743.984-2,0-2,0s-7.15-2.381-9-8c-1.975.746-9,5-9,5l-4-4,15-15-2-7s7.863-10.675,7-12c-1.612-.951-5.019.923-5-9-1.6-.438-3.4-1.578-3-6a29.227,29.227,0,0,1-3,0l-7,7s-6.432,1.952-9,5c-1.445-.447-4.062-0.667-5,3-2.56,1.171-9,2-9,2s-7.7.226-3,7c-0.794,2.78-3.084,3.625-3,13-2.287,1.762-7.226,4.744-9,5-0.276,2.753-.229,6.885-2,9s-0.491,11.529-5,13-5.734,2.416-3,6c-0.011,3.584,0,6,0,6a5.232,5.232,0,0,1,1,7c-0.263,3.065,0,3,0,3s3.267,2.949,3,6c2.978,0.68,4,1,4,1v3l4-4h4l1,1,4,2,1,1,1,1,1-1h1l1-1,1-2h4v2l1,1a0.7,0.7,0,0,1,1,0,2.834,2.834,0,0,0,2,0l3,1,1,1h1v3l-1,1-1,1H79l-2,1v2l1,1,3,2,1,2h1l1-1h3l1,2,1,1,1,1h0l1,1v2l1,1v1l1,1,1,1,1,1h2l4,1h1l1,1h6l1-1h3l1-2h7Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="tbt_escolha.html">
        <path id="Forma_3" data-name="Forma 3" class="cls-3"  onmouseover="destaqueTaubate(this)" onmouseout="normalTaubate(this)" d="M149,140l-5,4,3,7-1,5h3s-2.688,4.165,9,7,8,17,8,17-2.8,5.662,7,7c3.12,1.338.527,6.523-3,9a23.293,23.293,0,0,0,5,1s2.491,3.469,7,0,5.265-1.477,6,0,0.65,2.792,7,3c0.166,3.67-2,8.191,7,11s11.066,1.126,13-1a5.42,5.42,0,0,1,4-2l6-6,3-1,7-9s11.783-.017,7-10c5.854-2.07,6.047-3.189,13-3-0.715-4.015-5-7.308-1-9s4.209-4.4,2-7-8,1-8,1-4.412-1.427-5-4-5.334-.555-11,4c-4.43,1.588-9.676,5.757-12,8-2.571.759-5.513,0.842-8-6s-4.071-4.911-6-6-3-12-3-12-8.7,3.271-10,4-2.583,2.464-8-1c-3.191,0-20,0-20,0Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="pinda_escolha.html">
        <path id="Forma_4" data-name="Forma 4" class="cls-4" onmouseover="destaquePinda(this)" onmouseout="normalPinda(this)" d="M203,148v-7s-5.382-3.721-5-7a31.888,31.888,0,0,0-6,0s-0.982-5.28-2-7-6.388-4.571-11-5-15.805-.56-18,0c2.752-3.149,9-10,9-10l1-7a5.971,5.971,0,0,0,4-5,44.709,44.709,0,0,0,7,0l2-4s16.755-1.78,22-9c6.482-4.006,19-8,19-8l2,5s7.945,1.965,5,10c-1.709,3.832-.943,5.47,15,7-2.114,1.777-2,2-2,2s-4.543,3.772,2,4a42.866,42.866,0,0,0,2,6s-5.264,6.062,1,2c1.317,1.378-2.37,2.978-3,7s-0.585,8.559,1,10,0,4,0,4l2,6-2,3,2,5-1,3v7l5,2h-3l-1,1-1,1h-2l-1-1-1-1-2-3h-2l-3,1-18,11-1,1h-1l-2,1-4-7-2-4-1-2h-2l-2-1-1-2-1-4v-5Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="caragua_escolha.html">
        <path id="Forma_5" data-name="Forma 5" class="cls-5" onmouseover="destaqueCaragua(this)" onmouseout="normalCaragua(this)" d="M138,326s8.281-5.231,9-9,4.164-1.382,6-1,0.538-.654,2-1a5.107,5.107,0,0,1,4,1c1.224,0.789,1.76,2.669,2,3s13.394,2.749,18-7c2.573-1.717,4.174-1.978,5-2a47.7,47.7,0,0,0,5-1c1.52-.344-0.163-0.334,2-1s1.5,1.309,3-1,0.737-4.37,3-4a10.6,10.6,0,0,1,5,2c0.923,0.81.6,2.24,3,0s7.2-13.115,11-6a74.835,74.835,0,0,0,9,0s0.8-2.27,4-2c3.079-2.19,4.835-3.944,7,0,4.133-4.544,12.186-15.615,18-15s2.123,7.175,2,9,3.94,9.627,4,12-3.877,1.5-4,2,0,4,0,4-7.213-7.011-14,2-7,9-7,9a11.856,11.856,0,0,1-3,1c-0.846,0-2.881-2.824-5,0s-1.7.219-4-1-8.164,2.593-8,20c-2.543.308-8.355-.851-10,10-0.292,2.732-3.28-.459-4-2s-5.691-7.439-12,0c-2.25,2.272-5.878,1.541-8,0s-16.753-5.661-21-6-13,0-13,0-6.908-.895,0-4S150.177,328.583,138,326Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="cacapava_escolha.html">
        <path id="Forma_6" data-name="Forma 6" class="cls-6" onmouseover="destaqueCacapava(this)" onmouseout="normalCacapava(this)" d="M112,164s13.949,21.716,21,22c-0.084,2.661-1.916,7.165-1,9s3.3,5.02,3,9a5.5,5.5,0,0,1,2,2l4,8s24.708-9.955,26-12,2.032-5.051,3-6,4-4,4-4,3.573-2.717-3-6-5.468-8.194-5-13-5.226-10.764-11-11-7-7-7-7h-1v-6s-3.064-3.891-3-5c-2.314.972-6.551,3.084-8,5s-1.863-1.414-5,3-4.62,2.694-7,4C121.768,156.117,124.04,152.855,112,164Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="ilha_bela_escolha.html">
        <path id="Forma_7" data-name="Forma 7" class="cls-7" onmouseover="destaqueBela(this)" onmouseout="normalBela(this)" d="M247,348s-8.3-4.324-11,5-5.292,20.48-31,36c2,5.393.422,11.293,10,12s17.452-3.784,19-4,0.857,4.154,5,0,14.622-1.739,11,5a24.077,24.077,0,0,0,7,6s1.917,2.856,5-2,2.293-5.628,1-7-1-4-1-4,9.263-1.094-1-5a4.657,4.657,0,0,0-1,2l-6-2v-5h-4l3-9,12,1s-5.129-4.326-4-5,2.871-1.388,2-3,2.511-7.918,3-8S257.97,348.563,247,348Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="sao_sebastiao_escolha.html">
        <path id="Forma_8" data-name="Forma 8" class="cls-8" onmouseover="destaqueSebastiao(this)" onmouseout="normalSebastiao(this)" d="M138,326c1.162-.106,24.4,5.465,5,14,1.554,2.065,11.163,1.439,13.844.206,7.765-1.5,23.777,5.319,28.506,7.961C188.577,349.969,193,344,193,344s8.632-1.616,11,6c0.889,2.333,1.908-5.815,4-8s7-2,7-2-2.126,7.4,9,6a56.9,56.9,0,0,1-5,7s6.329,9.991,3,15c-2.485,1.07-4.14,1.132-5,3s-9.92,3.086-12,1c-2.08.305-9.324,6.226-14,2-4.113-.851-6.449-0.961-5-4a3.176,3.176,0,0,0-2-2l-3-1s4.415-10.431-17-2c-1.163-2.54-1.288-5.631-11-5-1.977-1.057-13.676-4.552-24-4-1.323-1-3.972-2.24-12,0-0.715-2.12-1-3-1-3l-10-1,13-12v-8h7S136.838,326.106,138,326Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="ubatuba_escolha.html">
        <path id="Forma_9" data-name="Forma 9" class="cls-9" onmouseover="destaqueUbatuba(this)" onmouseout="normalUbatuba(this)" d="M255,282s3.241,2.076,0,12c2.88,5.473,5.519,6.566,1,12-3.406,4.043,2.5,7.175,4,7s5.6-2.765,8-3,7.548-2.082,4-7-0.972-9.692,4-8,13.532,11.567,8-7c3.928-2.991,12.109,5.865,14,7s6.561-3.122,2-6c2.395-2.322,4.6-4.182,6-2s1,7,1,7,5.2-5.513,6-6-5.2-2.108,1-7c10.1,0.393,10-2,10-2s-4.2-1.439-4-3c-0.912-.17-6,1-6,1s-2.532-9.651,1-10,4,2,4,2l5-1,3,1s1.5-5.479,5-6,6.707,2.363,9-2,3.691-10.352,8-10,6.788-5.571,10-4,0,9,0,9,9.607-3.856,11-3a5.884,5.884,0,0,1,2,3s-1.739,6.581,3,5,10.079-5.028,12-4,16,0,16,0-8.808-7.293-12-8c-0.966-2.654-3-15.941-12-15a16.778,16.778,0,0,0-14-10c-1.675-3.245-1.941-9.576,0-11-1.119-.033-4.2.814-6-1s-7.894-.875-15,7c-2.1,1.477-9.938-2.537-12,1a20.443,20.443,0,0,1-6,6s2.581,10.1-3,13-10.959-1.332-13-2c0.185,4.061,2.65,10.151,1,11s-8.282.926-9,2c-2.944-.316-18.468.593-21,21C275.13,273.883,255,282,255,282Z" transform="translate(-29.563 -47.188)"/>
    </a>
    <a href="campos_do_jordao_escolha.html">
        <path id="Forma_10" data-name="Forma 10" class="cls-10" onmouseover="destaqueJordao(this)" onmouseout="normalJordao(this)" d="M175,101s-5.766-.317-7-2c-1.234.2-11.739,0.994-10-3s7-9,7-9V83l10-4-1-4,5-2V69s5.382-5.935,9-5,10.215,4.257,19-4c4.671-.376,6-1,6-1l3-11,10,7,1,3s5.39-1.166,6,1,2.246,10.526-2,12-6.726,6.131-6,8c-3.045.327-26.4,15.315-30,16a107.111,107.111,0,0,1-11,1l-2,4Z" transform="translate(-29.563 -47.188)"/>
    </a>
    </svg>
    `
}
function destaqueSjc(sjc) { // função destaque:
    sjc.style.fill = "#4197c4";
    sjc.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< São José dos Campos >";
        console.log("menor");
    } else {
        cidadesMaior.innerHTML = "< São José dos Campos >";
        console.log("maior");
    }
}
function normalSjc(sjc) { // função normal:
    sjc.style.fill = "#b1b1b1";
    sjc.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaqueJacarei(jcr) {
    jcr.style.fill = "#4197c4";
    jcr.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< Jacareí >";
    } else {
        cidadesMaior.innerHTML = "< Jacareí >";
    }
}
function normalJacarei(jcr) {
    jcr.style.fill = "#b1b1b1";
    jcr.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaqueTaubate(tbt) {
    tbt.style.fill = "#4197c4";
    tbt.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< Taubaté >";
    } else {
        cidadesMaior.innerHTML = "< Taubaté >";
    }
}
function normalTaubate(tbt) {
    tbt.style.fill = "#b1b1b1";
    tbt.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaquePinda(pinda) {
    pinda.style.fill = "#4197c4";
    pinda.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< Pindamonhangaba >";
    } else {
        cidadesMaior.innerHTML = "< Pindamonhangaba >";
    }
}
function normalPinda(pinda) {
    pinda.style.fill = "#b1b1b1";
    pinda.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaqueCaragua(caragua) {
    caragua.style.fill = "#4197c4";
    caragua.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< Caraguatatuba >";
    } else {
        cidadesMaior.innerHTML = "< Caraguatatuba >";
    }
}
function normalCaragua(caragua) {
    caragua.style.fill = "#b1b1b1";
    caragua.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaqueCacapava(cacapava) {
    cacapava.style.fill = "#4197c4";
    cacapava.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< Caçapava >";
    } else {
        cidadesMaior.innerHTML = "< Caçapava >";
    }
}
function normalCacapava(cacapava) {
    cacapava.style.fill = "#b1b1b1";
    cacapava.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaqueBela(bela){
    bela.style.fill = "#4197c4";
    bela.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< Ilha Bela >";
    } else {
        cidadesMaior.innerHTML = "< Ilha Bela >";
    }
}
function normalBela(bela){
    bela.style.fill = "#b1b1b1";
    bela.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaqueSebastiao(sebastiao){
    sebastiao.style.fill = "#4197c4";
    sebastiao.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< São Sebastião >";
    } else {
        cidadesMaior.innerHTML = "< São Sebastião >";
    }
}
function normalSebastiao(sebastiao){
    sebastiao.style.fill = "#b1b1b1";
    sebastiao.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaqueUbatuba(ubatuba){
    ubatuba.style.fill = "#4197c4";
    ubatuba.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< Ubatuba >";
    } else {
        cidadesMaior.innerHTML = "< Ubatuba >";
    }
}
function normalUbatuba(ubatuba){
    ubatuba.style.fill = "#b1b1b1";
    ubatuba.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}
function destaqueJordao(jordao){
    jordao.style.fill = "#4197c4";
    jordao.style.cursor = "pointer";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "< Campos do Jordão >";
    } else {
        cidadesMaior.innerHTML = "< Campos do Jordão >";
    }
}
function normalJordao(jordao){
    jordao.style.fill = "#b1b1b1";
    jordao.style.cursor = "normal";
    if (screen.width <= 1366) {
        cidadesMenor.innerHTML = "";
    } else {
        cidadesMaior.innerHTML = "";
    }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// // ABRIR GRAFICOS AO CLICAR NO NOME DA REGIAO

// function abrirGraficos(_regiao, _cidade) {
//     desabilitarGraficos(_regiao, _cidade); // CHAMA A FUNÇÃO PARA FECHAR OS GRAFICOS ABERTOS
//     document.getElementById(`grafico_${_regiao.toLowerCase()}_${_cidade.toLowerCase()}`).style.display = "flex"; // ABRE O GRAFICO SELECIONADO
// }

// // FECHAR GRAFICOS DA REGIAO

// function desabilitarGraficos(_regiao, _cidade) {
//     //SJC
//     if (_cidade.toLowerCase() == "sjc") {
//         document.getElementById(`grafico_geral_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_leste_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_norte_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_oeste_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_sudeste_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_sul_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_centro_${_cidade.toLowerCase()}`).style.display = "none";
//     }
//     //TBT
//     if (_cidade.toLowerCase() == "tbt") {
//         document.getElementById(`grafico_geral_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_rural_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_norte_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_sul_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_centro_${_cidade.toLowerCase()}`).style.display = "none";
//     }
//     //JCR
//     if (_cidade.toLowerCase() == "jcr") {
//         document.getElementById(`grafico_geral_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_rural_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_norte_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_sul_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_centro_${_cidade.toLowerCase()}`).style.display = "none";
//     }
//     //PINDA
//     if (_cidade.toLowerCase() == "pinda") {
//         document.getElementById(`grafico_geral_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_rural_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_norte_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_sul_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_centro_${_cidade.toLowerCase()}`).style.display = "none";
//     }
//     //CARAGUA
//     if (_cidade.toLowerCase() == "caragua") {
//         document.getElementById(`grafico_geral_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_rural_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_norte_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_sul_${_cidade.toLowerCase()}`).style.display = "none";
//         document.getElementById(`grafico_centro_${_cidade.toLowerCase()}`).style.display = "none";
//     }
// }