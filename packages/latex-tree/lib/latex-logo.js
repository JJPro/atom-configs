'use babel';

export function latexLogo () {
    const autoScaleImg = document.createElement('div');
    autoScaleImg.style.width = '70%';
    autoScaleImg.style.marginLeft = 'auto';
    autoScaleImg.style.marginRight = 'auto';

    const latexLogoSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    latexLogoSvg.setAttribute('viewBox', '0 0 512 512');
    autoScaleImg.appendChild(latexLogoSvg);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.classList.add('logo');
    path.setAttribute('d', 'M507.712 311.74c-7.903 0-13.493-0.757-16.772-2.27s-6.599-4.456-9.962-8.827l-62.298-89.284 39.85-57.757c3.363-4.54 7.945-8.66 13.746-12.358s15.343-5.549 28.627-5.549v-8.828h-68.855v8.828c5.549 0 9.878 1.387 12.989 4.161s4.666 5.843 4.666 9.206c0 1.177-0.084 2.312-0.252 3.405s-0.841 2.228-2.018 3.405l-33.293 48.93-37.832-55.74-1.135-1.387c0 0-0.378-0.967-1.135-2.9 0-2.354 1.598-4.456 4.792-6.305s7.567-2.774 13.115-2.774v-8.828h-80.205v8.828h4.54c7.735 0 13.536 0.673 17.403 2.018s6.894 3.699 9.080 7.062l53.47 79.952-46.66 69.108c-2.186 3.363-6.18 7.188-11.981 11.476s-15.932 6.432-30.392 6.432v8.827h16.413c-3.319 17.739-7.947 31.114-13.892 40.103-6.894 10.425-22.531 15.637-46.913 15.637h-37.833c-6.726 0-10.635-0.757-11.728-2.27s-1.639-4.456-1.639-8.827v-75.917h24.465c13.284 0 21.774 2.522 25.474 7.567s5.549 13.704 5.549 25.978h6.81v-75.665h-6.81c0 12.274-1.555 20.892-4.666 25.852s-11.896 7.44-26.357 7.44h-24.465v-69.108c0-4.372 0.547-7.315 1.639-8.827s5.002-2.27 11.728-2.27h35.563c22.195 0 36.445 4.287 42.75 12.863s10.635 22.868 12.989 42.877h6.558l-8.827-64.567h-129.294l-4.381-62.298h-175.795l-4.54 64.567h6.558c2.354-23.372 6.222-38.505 11.602-45.399s18.664-10.341 39.85-10.341h15.386c3.363 0 5.338 1.009 5.927 3.026s0.883 4.708 0.883 8.071v149.313c0 4.372-1.219 7.692-3.657 9.962s-10.888 3.405-25.348 3.405h-13.367v8.827h106.94v-8.827h-9.080c-14.46 0-22.868-1.135-25.221-3.405s-3.531-5.591-3.531-9.962v-149.313c0-3.363 0.168-5.759 0.504-7.188s1.597-2.732 3.784-3.91h15.638c21.186 0 34.469 3.447 39.85 10.341 5.202 6.666 8.907 21.058 11.123 43.129h-21.968v8.827h6.558c11.266 0 17.823 0.841 19.673 2.522s2.774 5.297 2.774 10.845v149.313c0 5.549-0.925 9.164-2.774 10.846s-8.407 2.522-19.673 2.522h-6.558v8.827h164.697l9.763-64.567h48.247v-8.827c-6.726 0-11.392-1.682-13.998-5.045s-3.909-6.137-3.909-8.323c0-1.177 0.084-2.312 0.252-3.405s0.841-2.228 2.017-3.405l40.103-60.028 44.39 69.107c0 1.009 0.378 1.598 1.135 1.765l1.135 0.252c0 2.354-1.555 4.456-4.666 6.305s-7.44 2.774-12.989 2.774v8.827h79.952v-8.827h-4.288z');

    latexLogoSvg.appendChild(path);
    return autoScaleImg;
}
