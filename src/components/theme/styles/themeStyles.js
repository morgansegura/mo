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
    scrollBar: "var(--gray-500)",
    scrollBarHover: "rgba(128, 90, 213, 0.75)",
    scrollBarActive: "var(--purple)",
    logo: "var(--gray-900)",
    logoHover: "var(--gray-700)",
    transHover: "var(--gray-100)",
    bgBody: "var(--gray-50)",
    textBody: "var(--gray-900)",
    /**
     * [Header & Footer]
     */
    bgHeader: "white",
    borderHeader: "var(--gray-100)",
    borderContent: "var(--gray-300)",
    iconHeader: "var(--gray-800)",
    iconHeaderBG: "transparent",
    iconHeaderHover: "var(--gray-700)",
    iconHeaderBGHover: "rgba(0,0,0,0.075)",
    bgFooter: "var(--gray-800)",
    textFooter: "var(--gray-400)",
    iconFooter: "var(--gray-800)",
    iconFooterHover: "rgba(0,0,0,0.25)",

    /**
     * [Drawer & Navigation]
     */
    bgDrawer: "var(--gray-50)",
    borderDrawer: "var(--gray-300)",
    bgDrawerMenu: "var(--gray-100)",
    bgDrawerNavItem: "var(--gray-50)",
    bgDrawerNavItemHover: "rgba(0,0,0,0.05)",
    textDrawerNavItem: "var(--gray-800)",
    textDrawerNavItemHover: "var(--gray-900)",
    borderDrawerNavItem: "var(--gray-200)",
    borderDrawerNavItemHover: "",
    /**
     * [Hero]
     */
    bgHero: "var(--gray-50)",
    textHero: "var(--gray-800)",
    textOffsetHero: "var(--gray-600)",
    textHeadlineHero: "var(--gray-900)",
    /**
     * [Blocks & Cards]
     */
    // Block 1
    bgBlock1: "var(--gray-50)",
    textBlock1: "var(--gray-200)",
    bgOffsetBlock1: "var(--gray-50)",
    textOffsetBlock1: "var(--aqua-100)",
    bgHeadlineBlock1: "transparent",
    textHeadlineBlock1: "var(--purple)",
    borderHeadlineBlock1: "var(--purple)",
    textHeadlineOffsetBlock1: "var(--gray-800)",
    // Card 1
    bgCardBlock1: "white",
    borderCardBlock1: "var(--gray-200)",
    textHeadlineCardBlock1: "var(--gray-700)",
    textCardBlock1: "var(--gray-600)",

    // Block 2
    bgBlock2: "var(--gray-100)",
    textBlock2: "var(--gray-500)",
    bgOffsetBlock2: "var(--gray-50)",
    textOffsetBlock2: "var(--gray-200)",
    bgHeadlineBlock2: "transparent",
    textHeadlineBlock2: "var(--purple)",
    borderHeadlineBlock2: "var(--purple)",
    textHeadlineOffsetBlock2: "var(--gray-200)",
    // Card 2
    bgCardBlock2: "white",
    borderCardBlock2: "var(--gray-200)",
    textHeadlineCardBlock2: "var(--gray-800)",
    textCardBlock2: "var(--gray-600)",

    // Block 3
    bgBlock3: "var(--gray-200)",
    textBlock3: "var(--gray-200)",
    bgOffsetBlock3: "var(--gray-50)",
    textOffsetBlock3: "var(--gray-200)",
    bgHeadlineBlock3: "transparent",
    textHeadlineBlock3: "var(--purple)",
    borderHeadlineBlock3: "var(--purple)",
    textHeadlineOffsetBlock3: "var(--gray-200)",
    // Card 3
    bgCardBlock3: "var(--gray-100)",
    borderCardBlock3: "var(--gray-300)",
    textHeadlineCardBlock3: "var(--gray-900)",
    textCardBlock3: "var(--gray-800)",

    // Block 4
    bgBlock4: "var(--gray-300)",
    textBlock4: "var(--gray-200)",
    bgOffsetBlock4: "white",
    textOffsetBlock4: "var(--gray-600)",
    bgHeadlineBlock4: "transparent",
    textHeadlineBlock4: "var(--purple)",
    borderHeadlineBlock4: "var(--purple)",
    textHeadlineOffsetBlock4: "var(--gray-200)",
    // Card 4
    bgCardBlock4: "var(--gray-200)",
    borderCardBlock4: "var(--gray-100)",
    textHeadlineCardBlock4: "var(--gray-300)",
    textCardBlock4: "var(--gray-700)",

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
    scrollBar: "var(--aqua-200)",
    scrollBarHover: "var(--aqua-100)",
    scrollBarActive: "var(--aqua-100)",
    logo: "var(--gray-100)",
    logoHover: "white",
    transHover: "var(--gray-800)",
    bgBody: "var(--gray-800)",
    textBody: "var(--gray-900)",
    /**
     * [Header & Footer]
     */
    bgHeader: "var(--gray-700)",
    borderHeader: "transparent",
    borderContent: "var(--gray-700)",
    iconHeader: "var(--gray-200)",
    iconHeaderBG: "transparent",
    iconHeaderHover: "white",
    iconHeaderBGHover: "rgba(255,255,255,0.125)",
    bgFooter: "var(--gray-700)",
    textFooter: "var(--gray-400)",
    iconFooter: "var(--gray-400)",
    iconFooterHover: "var(--gray-200)",
    /**
     * [Drawer & Navigation]
     */
    bgDrawer: "var(--gray-800)",
    borderDrawer: "var(--gray-700)",
    bgDrawerMenu: "var(--gray-700)",
    bgDrawerNavItem: "var(--gray-700)",
    bgDrawerNavItemHover: "var(--gray-600)",
    textDrawerNavItem: "var(--gray-200)",
    textDrawerNavItemHover: "var(--gray-100)",
    borderDrawerNavItem: "var(--gray-800)",
    borderDrawerNavItemHover: "",
    /**
     * [Hero]
     */
    bgHero: "var(--gray-700)",
    textHero: "var(--gray-300)",
    textOffsetHero: "var(--aqua-100)",
    textHeadlineHero: "var(--gray-100)",
    /**
     * [Blocks & Cards]
     */
    // Block 1
    bgBlock1: "var(--gray-500)",
    textBlock1: "var(--gray-800)",
    bgOffsetBlock1: "var(--gray-50)",
    textOffsetBlock1: "var(--aqua-200)",
    bgHeadlineBlock1: "transparent",
    textHeadlineBlock1: "var(--aqua-700)",
    borderHeadlineBlock1: "var(--aqua-700)",
    textHeadlineOffsetBlock1: "var(--gray-400)",
    // Card 1
    bgCardBlock1: "var(--gray-400)",
    borderCardBlock1: "var(--gray-300)",
    textHeadlineCardBlock1: "var(--gray-900)",
    textCardBlock1: "var(--gray-800)",

    // Block 2
    bgBlock2: "var(--gray-600)",
    textBlock2: "var(--gray-200)",
    bgOffsetBlock2: "var(--gray-50)",
    textOffsetBlock2: "var(--gray-200)",
    bgHeadlineBlock2: "transparent",
    textHeadlineBlock2: "var(--aqua-200)",
    borderHeadlineBlock2: "var(--aqua-200)",
    textHeadlineOffsetBlock2: "var(--gray-200)",
    // Card 2
    bgCardBlock2: "var(--gray-500)",
    borderCardBlock2: "var(--gray-400)",
    textHeadlineCardBlock2: "var(--gray-900)",
    textCardBlock2: "var(--gray-900)",

    // Block 3
    bgBlock3: "var(--gray-700)",
    textBlock3: "var(--gray-200)",
    bgOffsetBlock3: "var(--gray-50)",
    textOffsetBlock3: "var(--gray-200)",
    bgHeadlineBlock3: "transparent",
    textHeadlineBlock3: "var(--aqua-200)",
    borderHeadlineBlock3: "var(--aqua-200)",
    textHeadlineOffsetBlock3: "var(--gray-500)",
    // Card 3
    bgCardBlock3: "rgba(255, 255, 255, 0.25)",
    borderCardBlock3: "rgba(255, 255, 255, 0.3)",
    textHeadlineCardBlock3: "var(--gray-50)",
    textCardBlock3: "var(--gray-100)",

    // Block 4
    bgBlock4: "var(--gray-800)",
    textBlock4: "var(--gray-200)",
    bgOffsetBlock4: "var(--gray-50)",
    textOffsetBlock4: "var(--gray-200)",
    bgHeadlineBlock4: "transparent",
    textHeadlineBlock4: "var(--aqua-200)",
    borderHeadlineBlock4: "var(--aqua-200)",
    textHeadlineOffsetBlock4: "var(--gray-200)",
    // Card 4
    bgCardBlock4: "var(--gray-700)",
    borderCardBlock4: "var(--gray-600)",
    textCardBlock4: "var(--gray-700)",
    textHeadlineCardBlock4: "var(--gray-300)",

    /**
     * [Buttons]
     */
    bgButton: "var(--aqua-300)",
    textButton: "var(--gray-100)",
    bgButtonHover: "var(--aqua-200)",
    textButtonHover: "white",
    bgButtonDefault: "var(--gray-300)",
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
    textHero: "var(--orange-200)",
    textOffsetHero: "var(--orange-300)",
    textHeadlineHero: "var(--orange-100)",
    /**
     * [Blocks & Cards]
     */
    // Block 1
    bgBlock1: "var(--orange-300)",
    textBlock1: "var(--gray-200)",
    bgOffsetBlock1: "var(--gray-50)",
    textOffsetBlock1: "var(--gray-200)",
    bgHeadlineBlock1: "transparent",
    textHeadlineBlock1: "var(--orange-800)",
    borderHeadlineBlock1: "var(--orange-800)",
    textHeadlineOffsetBlock1: "var(--gray-800)",
    // Card 1
    bgCardBlock1: "var(--orange-200)",
    borderCardBlock1: "var(--orange-100)",
    textHeadlineCardBlock1: "var(--orange-900)",
    textCardBlock1: "var(--orange-800)",

    // Block 2
    bgBlock2: "var(--orange-400)",
    textBlock2: "var(--gray-200)",
    bgOffsetBlock2: "var(--gray-200)",
    textOffsetBlock2: "var(--gray-200)",
    bgHeadlineBlock2: "transparent",
    textHeadlineBlock2: "var(--orange-900)",
    borderHeadlineBlock2: "var(--orange-900)",
    textHeadlineOffsetBlock2: "var(--gray-200)",
    // Card 2
    bgCardBlock2: "var(--orange-300)",
    borderCardBlock2: "var(--orange-200)",
    textHeadlineCardBlock2: "var(--orange-900)",
    textCardBlock2: "var(--orange-800)",

    // Block 3
    bgBlock3: "var(--orange-500)",
    textBlock3: "var(--orange-200)",
    bgOffsetBlock3: "var(--gray-200)",
    textOffsetBlock3: "var(--orange-200)",
    bgHeadlineBlock3: "transparent",
    textHeadlineBlock3: "var(--orange-200)",
    borderHeadlineBlock3: "var(--orange-200)",
    textHeadlineOffsetBlock3: "var(--gray-300)",
    // Card 3
    bgCardBlock3: "var(--orange-400)",
    borderCardBlock3: "var(--orange-300)",
    textHeadlineCardBlock3: "var(--orange-900)",
    textCardBlock3: "var(--orange-900)",

    // Block 4
    bgBlock4: "var(--orange-600)",
    textBlock4: "var(--gray-200)",
    bgOffsetBlock4: "var(--gray-200)",
    textOffsetBlock4: "var(--gray-200)",
    bgHeadlineBlock4: "transparent",
    textHeadlineBlock4: "var(--yellow)",
    borderHeadlineBlock4: "var(--yellow)",
    textHeadlineOffsetBlock4: "var(--gray-200)",
    // Card 4
    bgCardBlock4: "var(--orange-400)",
    borderCardBlock4: "var(--orange-300)",
    textHeadlineCardBlock4: "var(--orange-800)",
    textCardBlock4: "var(--gray-700)",
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
    scrollBar: "var(--gray-500)",
    scrollBarHover: "rgba(128, 90, 213, 0.75)",
    scrollBarActive: "rgba(128, 90, 213, 0.75)",
    logo: "var(--aqua-100)",
    logoHover: "var(--gray-100)",
    transHover: "var(--gray-100)",
    bgBody: "var(--aqua-800)",
    textBody: "var(--aqua-100)",
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
    bgFooter: "var(--gray-800)",
    textFooter: "var(--gray-400)",
    iconFooter: "var(--gray-800)",
    iconFooterHover: "rgba(0,0,0,0.25)",
    /**
     * [Drawer & Navigation]
     */
    bgDrawer: "var(--aqua-700)",
    borderDrawer: "var(--aqua-600)",
    bgDrawerMenu: "var(--aqua-700)",
    bgDrawerNavItem: "var(--aqua-600)",
    bgDrawerNavItemHover: "var(--aqua-700)",
    textDrawerNavItem: "var(--aqua-100)",
    textDrawerNavItemHover: "var(--gray-100)",
    borderDrawerNavItem: "var(--aqua-800)",
    borderDrawerNavItemHover: "",
    /**
     * [Hero]
     */
    bgHero: "var(--aqua-700)",
    textHero: "var(--aqua-100)",
    textOffsetHero: "var(--gray-600)",
    textHeadlineHero: "var(--gray-100)",
    /**
     * [Blocks & Cards]
     */
    // Block 1
    bgBlock1: "var(--aqua-400)",
    textBlock1: "var(--gray-200)",
    bgOffsetBlock1: "var(--gray-50)",
    textOffsetBlock1: "var(--gray-200)",
    bgHeadlineBlock1: "transparent",
    textHeadlineBlock1: "var(--cyan)",
    borderHeadlineBlock1: "var(--cyan)",
    textHeadlineOffsetBlock1: "var(--gray-300)",
    // Card 1
    bgCardBlock1: "var(--aqua-200)",
    borderCardBlock1: "var(--aqua-100)",
    textHeadlineCardBlock1: "var(--aqua-900)",
    textCardBlock1: "var(--aqua-900)",

    // Block 2
    bgBlock2: "var(--aqua-500)",
    textBlock2: "var(--gray-200)",
    bgOffsetBlock2: "var(--gray-50)",
    textOffsetBlock2: "var(--gray-200)",
    bgHeadlineBlock2: "transparent",
    textHeadlineBlock2: "var(--cyan)",
    borderHeadlineBlock2: "var(--cyan)",
    textHeadlineOffsetBlock2: "var(--gray-200)",
    // Block 2
    bgCardBlock2: "var(--aqua-300)",
    borderCardBlock2: "var(--aqua-200)",
    textHeadlineCardBlock2: "var(--aqua-900)",
    textCardBlock2: "var(--aqua-900)",

    // Block 3
    bgBlock3: "var(--aqua-700)",
    textBlock3: "var(--gray-200)",
    bgOffsetBlock3: "var(--gray-50)",
    textOffsetBlock3: "var(--gray-200)",
    bgHeadlineBlock3: "transparent",
    textHeadlineBlock3: "var(--cyan)",
    borderHeadlineBlock3: "var(--cyan)",
    textHeadlineOffsetBlock3: "var(--gray-200)",
    // Block 3
    bgCardBlock3: "var(--aqua-500)",
    borderCardBlock3: "var(--aqua-400)",
    textHeadlineCardBlock3: "rgba(255,255,255,0.85)",
    textCardBlock3: "rgba(255,255,255,0.65)",

    // Block 4
    bgBlock4: "var(--aqua-800)",
    textBlock4: "var(--aqua-600)",
    bgOffsetBlock4: "rgba(255,255,255,0.85)",
    textOffsetBlock4: "var(--aqua-700)",
    bgHeadlineBlock4: "transparent",
    textHeadlineBlock4: "var(--cyan)",
    borderHeadlineBlock4: "var(--cyan)",
    textHeadlineOffsetBlock4: "var(--gray-200)",
    // Block 4
    bgCardBlock4: "var(--aqua-600)",
    borderCardBlock4: "var(--aqua-500)",
    textHeadlineCardBlock4: "rgba(255,255,255,0.85)",
    textCardBlock4: "rgba(255,255,255,0.65)",

    /**
     * [Buttons]
     */
    bgButton: "var(--cyan)",
    textButton: "var(--gray-600)",
    bgButtonHover: "#6b46c1",
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
