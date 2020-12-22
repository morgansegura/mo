/* [Theme Styling]
 * 1. Defaults
 * 2. Header & Footer
 * 3. Drawer & Navigation
 * 4. Hero
 * 5. Blocks & Cards
 * 6. Buttons
 * 7. Accent Colors
 * 8. Code Styling
 * */

export const lightTheme = {
    /**
     * [Defaults]
     */
    white: "var(--white)",
    black: "var(--black)",
    scrollBar: "var(--purple)",
    scrollBarHover: "rgba(128, 90, 213, 0.75)",
    scrollBarActive: "var(--purple)",
    logo: "#5c5c6f",
    logoHover: "var(--gray-700)",
    transHover: "var(--gray-100)",
    bgBody: "var(--gray-100)",
    bgLayout: "var(--gray-100)",
    textBody: "var(--gray-900)",

    accentColor: "var(--purple)",
    textBase: "black",
    textOffset: "var(--gray-100)",
    textNeutral: "#5c5c6f",

    /**
     * [Header & Footer]
     */
    bgHeader: "var(--gray-50)",
    borderHeader: "rgba(0,0,0,0.05)",
    borderContent: "var(--gray-300)",
    iconHeader: "#5c5c6f",
    iconHeaderBG: "transparent",
    iconHeaderHover: "var(--gray-700)",
    iconHeaderBGHover: "rgba(0,0,0,0.075)",
    bgFooter: "var(--gray-200)",
    borderFooter: "var(--gray-200)",
    textFooter: "#5c5c6f",
    iconFooter: "var(--gray-800)",
    iconFooterHover: "rgba(0,0,0,0.25)",

    /**
     * [Drawer & Navigation]
     */
    bgDrawer: "var(--gray-100)",
    borderDrawer: "var(--gray-300)",
    bgDrawerMenu: "var(--gray-50)",
    bgDrawerNavItem: "var(--gray-100)",
    bgDrawerNavItemHover: "rgba(0,0,0,0.05)",
    textDrawerNavItem: "var(--gray-800)",
    textDrawerNavItemHover: "var(--gray-900)",
    borderDrawerNavItem: "var(--gray-200)",
    borderDrawerNavItemHover: "",
    /**
     * [Hero]
     */
    bgHero: "var(--gray-50)",
    borderHero: "var(--gray-50)",
    textHero: "var(--gray-800)",
    textOffsetHero: "var(--purple)",
    textHeadlineHero: "var(--gray-900)",
    /**
     * [Blocks & Cards]
     */
    // Block 1
    bgBlock: "transparent",
    textBlock: "var(--gray-200)",
    bgOffsetBlock: "var(--gray-50)",
    textOffsetBlock: "var(--aqua-100)",
    bgHeadlineBlock: "transparent",
    textHeadlineBlock: "var(--purple)",
    borderHeadlineBlock: "var(--purple)",
    textHeadlineOffsetBlock: "var(--gray-800)",
    // Card 1
    bgCardBlock: "var(--gray-50)",
    borderCardBlock: "var(--gray-50)",
    textHeadlineCardBlock: "var(--gray-700)",
    textCardBlock: "#5c5c6f",

    /**
     * [Buttons]
     */
    bgButton: "var(--purple)",
    textButton: "var(--gray-100)",
    bgButtonHover: "#6b46c1",
    textButtonHover: "white",
    bgButtonDefault: "var(--gray-400)",
    textButtonDefault: "var(--gray-700)",
    bgButtonDefaultHover: "var(--gray-300)",
    textButtonDefaultHover: "white",
    bgButtonOffset: "var(--purple)",
    textButtonOffset: "var(--gray-100)",
    bgButtonOffsetHover: "#6b46c1",
    textButtonOffsetHover: "white",
    bgButtonDisabled: "var(--gray-400)",
    textButtonDisabled: "var(--gray-100)",
    bgButtonOffsetDisabled: "var(--purple)",
    textButtonOffsetDisabled: "var(--gray-100)",
    /**
     * [Accent Colors]
     */
    accent1: "var(--cyan)",
    accent2: "var(--purple)",
    accent1Hover: "",
    accent2Hover: "",
    /**
     * [Code Styling]
     */
    codeFontColor: "#d6deeb",
    codeFontFamily: "var(--serif-font)",
    codeBackground: "#011627",
    codeTokenCData: "rgb(255, 203, 139)",
    codeTokenPunctuation: "rgb(199, 146, 234)",
    codeTokenConstant: "rgb(130, 170, 255)",
    codeTokenBoolean: "rgb(255, 88, 116)",
    codeTokenLanguage: "rgb(178, 204, 214)",
    codeTokenAtRule: "rgb(173, 219, 103)",
    codeTokenKeyword: "rgb(127, 219, 202)",
    codeTokenRegex: "rgb(128, 203, 196)",

    /* Light */
    codeBrowserBackground: "#ccc",
    codeBrowserBorder: "rgba(255, 255, 255, 0.5)",
    /* Dark */
    // codeBrowserBackground: "#202124",
    // codeBrowserBorder: "rgba(0, 0, 0, 0.2)",
}

export const darkTheme = {
    /**
     * [Defaults]
     */
    white: "var(--white)",
    black: "var(--black)",
    scrollBar: "var(--aqua-300)",
    scrollBarHover: "var(--aqua-100)",
    scrollBarActive: "var(--aqua-400)",
    logo: "var(--gray-100)",
    logoHover: "white",
    transHover: "var(--gray-800)",
    bgBody: "var(--gray-900)",
    bgLayout: "var(--gray-800)",
    textBody: "var(--gray-900)",

    accentColor: "var(--aqua-400)",
    textBase: "var(--gray-100)",
    textOffset: "var(--gray-900)",
    textNeutral: "var(--gray-400)",

    /**
     * [Header & Footer]
     */
    bgHeader: "var(--gray-700)",
    borderHeader: "var(--gray-600)",
    borderContent: "var(--gray-700)",
    iconHeader: "var(--gray-200)",
    iconHeaderBG: "transparent",
    iconHeaderHover: "white",
    iconHeaderBGHover: "var(--gray-800)",
    bgFooter: "var(--gray-700)",
    borderFooter: "var(--gray-700)",
    textFooter: "var(--gray-400)",
    iconFooter: "var(--gray-400)",
    iconFooterHover: "var(--gray-200)",

    /**
     * [Drawer & Navigation]
     */
    bgDrawer: "var(--gray-700)",
    borderDrawer: "var(--gray-700)",
    bgDrawerMenu: "var(--gray-600)",
    bgDrawerNavItem: "var(--gray-600)",
    bgDrawerNavItemHover: "var(--gray-500)",
    textDrawerNavItem: "var(--gray-200)",
    textDrawerNavItemHover: "var(--gray-100)",
    borderDrawerNavItem: "var(--gray-800)",
    borderDrawerNavItemHover: "",
    /**
     * [Hero]
     */
    bgHero: "var(--gray-700)",
    borderHero: "var(--gray-700)",
    textHero: "var(--gray-300)",
    textOffsetHero: "var(--aqua-100)",
    textHeadlineHero: "var(--gray-100)",
    /**
     * [Blocks & Cards]
     */
    // Block 1
    bgBlock: "var(--gray-800)",
    textBlock: "var(--gray-800)",
    bgOffsetBlock: "var(--gray-50)",
    textOffsetBlock: "var(--aqua-200)",
    bgHeadlineBlock: "transparent",
    textHeadlineBlock: "var(--aqua-200)",
    borderHeadlineBlock: "var(--aqua-200)",
    textHeadlineOffsetBlock: "var(--gray-400)",
    // Card 1
    bgCardBlock: "var(--gray-700)",
    borderCardBlock: "var(--gray-700)",
    textHeadlineCardBlock: "var(--gray-100)",
    textCardBlock: "var(--gray-300)",

    /**
     * [Buttons]
     */
    bgButton: "var(--aqua-300)",
    textButton: "var(--gray-100)",
    bgButtonHover: "var(--aqua-200)",
    textButtonHover: "white",
    bgButtonDefault: "#6b46c1",
    textButtonDefault: "var(--gray-100)",
    bgButtonDefaultHover: "#6b46c1",
    textButtonDefaultHover: "white",
    bgButtonOffset: "var(--purple)",
    textButtonOffset: "var(--gray-100)",
    bgButtonOffsetHover: "#6b46c1",
    textButtonOffsetHover: "white",
    bgButtonDisabled: "var(--gray-500)",
    textButtonDisabled: "var(--gray-100)",
    bgButtonOffsetDisabled: "var(--purple)",
    textButtonOffsetDisabled: "var(--gray-100)",
    /**
     * [Accent Colors]
     */
    accent1: "var(--cyan)",
    accent2: "var(--purple)",
    accent1Hover: "",
    accent2Hover: "",
    /**
     * [Code Styling]
     */
    codeFontColor: "#d6deeb",
    codeFontFamily: "var(--serif-font)",
    codeBackground: "#011627",
    codeTokenCData: "rgb(255, 203, 139)",
    codeTokenPunctuation: "rgb(199, 146, 234)",
    codeTokenConstant: "rgb(130, 170, 255)",
    codeTokenBoolean: "rgb(255, 88, 116)",
    codeTokenLanguage: "rgb(178, 204, 214)",
    codeTokenAtRule: "rgb(173, 219, 103)",
    codeTokenKeyword: "rgb(127, 219, 202)",
    codeTokenRegex: "rgb(128, 203, 196)",

    codeBrowserBackground: "#ccc",
    codeBrowserBorder: "rgba(255, 255, 255, 0.5)",
    /* Dark */
    // codeBrowserBackground: "#202124",
    // codeBrowserBorder: "rgba(0, 0, 0, 0.2)",
}

export const alt1Theme = {
    /**
     * [Defaults]
     */
    white: "var(--white)",
    black: "var(--black)",
    scrollBar: "var(--orange-500)",
    scrollBarHover: "var(--orange-400)",
    scrollBarActive: "rgba(128, 90, 213, 0.75)",
    logo: "var(--orange-200)",
    logoHover: "var(--purple)",
    transHover: "var(--gray-100)",
    bgBody: "var(--orange-800)",
    textBody: "var(--orange-100)",
    accentColor: "var(--aqua-400)",
    textBase: "var(--gray-900)",
    textOffset: "var(--gray-900)",
    textNeutral: "var(--gray-900)",

    /**
     * [Header & Footer]
     */
    bgHeader: "var(--orange-800)",
    borderHeader: "transparent",
    borderContent: "var(--orange-700)",
    iconHeader: "var(--orange-200)",
    iconHeaderBG: "transparent",
    iconHeaderHover: "var(--orange-100)",
    iconHeaderBGHover: "rgba(0,0,0,0.075)",
    bgFooter: "var(--orange-800)",
    borderFooter: "var(--orange-800)",
    textFooter: "var(--orange-400)",
    iconFooter: "var(--orange-200)",
    iconFooterHover: "rgba(0,0,0,0.25)",

    /**
     * [Drawer & Navigation]
     */
    bgDrawer: "var(--orange-800)",
    borderDrawer: "var(--orange-700)",
    bgDrawerMenu: "var(--gray-100)",
    bgDrawerNavItem: "var(--orange-700)",
    bgDrawerNavItemHover: "var(--orange-600)",
    textDrawerNavItem: "var(--orange-200)",
    textDrawerNavItemHover: "var(--orange-100)",
    borderDrawerNavItem: "var(--orange-800)",
    borderDrawerNavItemHover: "",
    /**
     * [Hero]
     */
    bgHero: "var(--orange-700)",
    borderHero: "var(--gray-700)",
    textHero: "var(--orange-200)",
    textOffsetHero: "var(--orange-300)",
    textHeadlineHero: "var(--orange-100)",
    /**
     * [Blocks & Cards]
     */
    // Block 1
    bgBlock: "var(--orange-300)",
    textBlock: "var(--gray-200)",
    bgOffsetBlock: "var(--gray-50)",
    textOffsetBlock: "var(--gray-200)",
    bgHeadlineBlock: "transparent",
    textHeadlineBlock: "var(--orange-800)",
    borderHeadlineBlock: "var(--orange-800)",
    textHeadlineOffsetBlock: "var(--gray-800)",
    // Card 1
    bgCardBlock: "var(--orange-200)",
    borderCardBlock: "var(--orange-100)",
    textHeadlineCardBlock: "var(--orange-900)",
    textCardBlock: "var(--orange-800)",

    /**
     * [Buttons]
     */
    bgButton: "var(--yellow)",
    textButton: "var(--orange-800)",
    bgButtonHover: "var(--orange-400)",
    textButtonHover: "var(--orange-900)",
    bgButtonDefault: "var(--purple)",
    textButtonDefault: "var(--gray-100)",
    bgButtonDefaultHover: "#6b46c1",
    textButtonDefaultHover: "white",
    bgButtonOffset: "var(--purple)",
    textButtonOffset: "var(--gray-100)",
    bgButtonOffsetHover: "#6b46c1",
    textButtonOffsetHover: "white",
    bgButtonDisabled: "rgba(0,0,0,0.25)",
    textButtonDisabled: "var(--gray-100)",
    bgButtonOffsetDisabled: "var(--purple)",
    textButtonOffsetDisabled: "var(--gray-100)",
    /**
     * [Accent Colors]
     */
    accent1: "var(--cyan)",
    accent2: "var(--purple)",
    accent1Hover: "",
    accent2Hover: "",
    /**
     * [Code Styling]
     */
    codeFontColor: "#d6deeb",
    codeFontFamily: "var(--serif-font)",
    codeBackground: "#011627",
    codeTokenCData: "rgb(255, 203, 139)",
    codeTokenPunctuation: "rgb(199, 146, 234)",
    codeTokenConstant: "rgb(130, 170, 255)",
    codeTokenBoolean: "rgb(255, 88, 116)",
    codeTokenLanguage: "rgb(178, 204, 214)",
    codeTokenAtRule: "rgb(173, 219, 103)",
    codeTokenKeyword: "rgb(127, 219, 202)",
    codeTokenRegex: "rgb(128, 203, 196)",

    codeBrowserBackground: "#ccc",
    codeBrowserBorder: "rgba(255, 255, 255, 0.5)",
    /* Dark */
    // codeBrowserBackground: "#202124",
    // codeBrowserBorder: "rgba(0, 0, 0, 0.2)",
}

export const alt2Theme = {
    /**
     * [Defaults]
     */
    white: "var(--white)",
    black: "var(--black)",
    scrollBar: "var(--cyan)",
    scrollBarHover: "rgba(0, 255, 255, 0.75)",
    scrollBarActive: "rgba(0, 255, 255, 0.85)",
    logo: "var(--aqua-100)",
    logoHover: "var(--cyan)",
    transHover: "var(--gray-100)",
    bgBody: "var(--aqua-900)",
    textBody: "var(--aqua-100)",
    accentColor: "var(--aqua-400)",
    textBase: "var(--gray-900)",
    textOffset: "var(--gray-900)",
    textNeutral: "var(--gray-900)",

    /**
     * [Header & Footer]
     */
    bgHeader: "var(--aqua-800)",
    borderHeader: "transparent",
    borderContent: "var(--aqua-700)",
    iconHeader: "var(--cyan)",
    iconHeaderBG: "transparent",
    iconHeaderHover: "var(--aqua-100)",
    iconHeaderBGHover: "rgba(0,0,0,0.125)",
    bgFooter: "var(--aqua-800)",
    borderFooter: "var(--aqua-800)",
    textFooter: "var(--aqua-400)",
    iconFooter: "var(--aqua-800)",
    iconFooterHover: "rgba(0,0,0,0.25)",

    /**
     * [Drawer & Navigation]
     */
    bgDrawer: "var(--aqua-700)",
    borderDrawer: "var(--aqua-600)",
    bgDrawerMenu: "var(--aqua-700)",
    bgDrawerNavItem: "var(--aqua-600)",
    bgDrawerNavItemHover: "var(--aqua-800)",
    textDrawerNavItem: "var(--cyan)",
    textDrawerNavItemHover: "var(--cyan)",
    borderDrawerNavItem: "var(--aqua-800)",
    borderDrawerNavItemHover: "",

    /**
     * [Hero]
     */
    bgHero: "var(--aqua-700)",
    textHero: "var(--aqua-100)",
    borderHero: "var(--gray-700)",
    textOffsetHero: "var(--cyan)",
    textHeadlineHero: "rgba(255, 255, 255, .75)",

    /**
     * [Blocks & Cards]
     */
    // Block 1
    bgBlock: "var(--aqua-400)",
    textBlock: "var(--gray-200)",
    bgOffsetBlock: "var(--gray-50)",
    textOffsetBlock: "var(--gray-200)",
    bgHeadlineBlock: "transparent",
    textHeadlineBlock: "var(--cyan)",
    borderHeadlineBlock: "var(--cyan)",
    textHeadlineOffsetBlock: "var(--gray-300)",
    // Card 1
    bgCardBlock: "var(--aqua-200)",
    borderCardBlock: "var(--aqua-100)",
    textHeadlineCardBlock: "var(--aqua-900)",
    textCardBlock: "var(--aqua-900)",

    /**
     * [Buttons]
     */
    bgButton: "var(--cyan)",
    textButton: "var(--gray-600)",
    bgButtonHover: "rgba(0, 255, 255, 0.65)",
    textButtonHover: "white",
    bgButtonDefault: "var(--gray-400)",
    textButtonDefault: "var(--gray-100)",
    bgButtonDefaultHover: "#6b46c1",
    textButtonDefaultHover: "white",
    bgButtonOffset: "var(--purple)",
    textButtonOffset: "var(--gray-100)",
    bgButtonOffsetHover: "#6b46c1",
    textButtonOffsetHover: "white",
    bgButtonDisabled: "var(--gray-900)",
    textButtonDisabled: "var(--gray-100)",
    bgButtonOffsetDisabled: "var(--purple)",
    textButtonOffsetDisabled: "var(--gray-100)",
    /**
     * [Accent Colors]
     */
    accent1: "var(--cyan)",
    accent2: "var(--purple)",
    accent1Hover: "",
    accent2Hover: "",
    /**
     * [Code Styling]
     */
    codeFontColor: "#d6deeb",
    codeFontFamily: "var(--serif-font)",
    codeBackground: "#011627",
    codeTokenCData: "rgb(255, 203, 139)",
    codeTokenPunctuation: "rgb(199, 146, 234)",
    codeTokenConstant: "rgb(130, 170, 255)",
    codeTokenBoolean: "rgb(255, 88, 116)",
    codeTokenLanguage: "rgb(178, 204, 214)",
    codeTokenAtRule: "rgb(173, 219, 103)",
    codeTokenKeyword: "rgb(127, 219, 202)",
    codeTokenRegex: "rgb(128, 203, 196)",

    codeBrowserBackground: "#ccc",
    codeBrowserBorder: "rgba(255, 255, 255, 0.5)",
    /* Dark */
    // codeBrowserBackground: "#202124",
    // codeBrowserBorder: "rgba(0, 0, 0, 0.2)",
}

export const fontSizeNormal = {
    text6XL: "4rem",
    text5XL: "3rem",
    text4XL: "2.25rem",
    text3XL: "1.875rem",
    text2XL: "1.5rem",
    textXL: "1.25rem",
    textLG: "1.125rem",
    textBase: "1rem",
    textSM: "0.875rem",
    textXS: "0.75rem",
}
export const fontSizeMedium = {
    text6XL: "4.5rem",
    text5XL: "4rem",
    text4XL: "3rem",
    text3XL: "2.25rem",
    text2XL: "1.875rem",
    textXL: "1.5rem",
    textLG: "1.25rem",
    textBase: "1.125rem",
    textSM: "1rem",
    textXS: "0.875rem",
}
export const fontSizeLarge = {
    text6XL: "5rem",
    text5XL: "4.5rem",
    text4XL: "4rem",
    text3XL: "3rem",
    text2XL: "2.25rem",
    textXL: "1.8755rem",
    textLG: "1.5rem",
    textBase: "1.25rem",
    textSM: "1.125rem",
    textXS: "1rem",
}
