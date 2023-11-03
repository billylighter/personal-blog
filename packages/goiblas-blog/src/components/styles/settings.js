import { css } from "frontity";
import ApercuBold from "./../../assets/fonts/apercu/Apercu-Bold.woff2";
import PublicSans from "./../../assets/fonts/public-sans/Public-Sans-Roman-VF.woff2";
import KaushanScript from "./../../assets/fonts/Kaushan_Script/Kaushan_Script.woff2";

const HEADER_FONT_FAMILY = "Apercu Bold";
const BODY_FONT_FAMILY = "Public Sans";
const LOGO_FONT_FAMILY = "Kaushan Script";

const fontFaceBody = css`
  @font-face {
    font-family: ${BODY_FONT_FAMILY};
    font-weight: 100 900;
    font-display: swap;
    src: url(${PublicSans}) format("woff2-variations");
  }
`;

const fontFaceHeader = css`
  @font-face {
    font-family: ${HEADER_FONT_FAMILY};
    font-style: normal;
    font-weight: 700;
    font-display: optional;
    src: url(${ApercuBold}) format("woff2");
  }
`;

const fontFaceLogo = css`
  @font-face {
    font-family: ${LOGO_FONT_FAMILY};
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${KaushanScript}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    /* You can specify additional font formats (e.g., woff, woff2, eot) for better browser compatibility. */
  }
`;

const settings = css`
  :root {
    --base: 15px;
    --scale-factor: 0.24;
    --space: 24px;
    --system-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --header-family: ${HEADER_FONT_FAMILY}, var(--system-family);
    --body-family: ${BODY_FONT_FAMILY}, var(--system-family);
    --logo-family: ${LOGO_FONT_FAMILY}, var(--system-family);
    --code-family: monospace;

    --color-brand: #30d2f1;
    --color-brand-light: #b1eaf5;
    --color-text: rgba(0, 0, 3, 0.8);
    --color-text-light: rgba(0, 0, 3, 0.54);
    --color-border: #e1e5e8;

    --background-brand: #ffffff;
    --background-brand-dark: #f2f3f5;

    --container-percentage: 92%;
    --container-wide: 889px;
    --container-normal: 740px;
    --header-height: 60px;

    --shadow-color: rgba(17, 17, 17, 0.2);
    --shadow-sm: var(--shadow-color) 0 0 2px;

    --selection: #ffe7af;
  }

  @media (min-width: 880px) {
    :root {
      --base: 16px;
      --scale-factor: 0.6;
      --space: 28px;
    }
  }

  @media (min-width: 1280px) {
    :root {
      --base: 18px;
      --scale-factor: 0.6;
    }
  }
  * {
    font-size: calc(
      var(--base) + (var(--base) * var(--scale-factor) * var(--font-size, 0))
    );
    line-height: calc(var(--space) * var(--line-height, 1));
    margin-top: calc(var(--space) * var(--margin-top, 0));
    margin-bottom: calc(var(--space) * var(--margin-bottom, 0));
    margin-left: calc(var(--space) * var(--margin-left, 0));
    margin-right: calc(var(--space) * var(--margin-right, 0));
    padding-top: calc(var(--space) * var(--padding-top, 0));
    padding-bottom: calc(var(--space) * var(--padding-bottom, 0));
    padding-left: calc(var(--space) * var(--padding-left, 0));
    padding-right: calc(var(--space) * var(--padding-right, 0));
  }

  * * {
    --margin-top: initial;
    --margin-bottom: initial;
    --margin-left: initial;
    --margin-right: initial;
    --padding-top: initial;
    --padding-bottom: initial;
    --padding-left: initial;
    --padding-right: initial;
  }
`;
export default css([fontFaceHeader, fontFaceBody, fontFaceLogo, settings]);
