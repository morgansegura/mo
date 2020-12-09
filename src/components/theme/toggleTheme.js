import React, { useState } from "react"

import { func, string } from "prop-types"

import { WiMoonAltFirstQuarter } from "react-icons/wi"
import * as S from "./styled"

const themeOptions = [
    {
        title: "light",
        niceName: "Light Theme",
    },
    {
        title: "dark",
        niceName: "Dark Theme",
    },
    {
        title: "alt1",
        niceName: "Copper Theme",
    },
    {
        title: "alt2",
        niceName: "Aqua Theme",
    },
]

const ToggleTheme = ({ theme, toggleTheme }) => {
    const [toggleColors, setToggleColors] = useState(false)
    return (
        <S.ToggleContainer
            className={`toggle-theme ${
                toggleColors ? `color-drawer--open` : ``
            }`}
        >
            <WiMoonAltFirstQuarter
                onClick={() => setToggleColors(!toggleColors)}
            />
            <S.ThemeSelector>
                <S.Options
                    className={`fixed top-20 transform transition-translate ease-out duration-300`}
                >
                    <div className="options-item theme-color font-sans">
                        {themeOptions.map((item, i) => (
                            <div
                                className="relative z-10"
                                key={i}
                                theme={theme}
                                role="none"
                                onClick={() => toggleTheme(item.title)}
                            >
                                <span className={`${item.title}-theme`}></span>
                                {item.niceName}
                            </div>
                        ))}
                    </div>
                </S.Options>
            </S.ThemeSelector>
        </S.ToggleContainer>
    )
}

ToggleTheme.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default ToggleTheme
