import React, { useState } from "react"
import { ContactFormContainer } from "../containers/contact-form"
import { Menu, Modal } from "../components"
import LogoImage from "../assets/images/segura-icon.svg"
import { menuList } from "../fixtures"
import { AiOutlineApi } from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"

export function MenuContainer({ ...restProps }) {
    const [toggleModal, setToggleModal] = useState(false)
    return (
        <>
            <Menu {...restProps}>
                <Menu.LogoWrapper className="flex flex-col justify-center text-center">
                    <Menu.LogoContainer
                        className="mx-auto flex flex-col items-center justify-center"
                        to="/"
                        title="Home"
                        aria-label="Home"
                    >
                        <LogoImage className="logo lg:mx-auto" />
                    </Menu.LogoContainer>
                </Menu.LogoWrapper>
                <Menu.ItemContainer className="w-full grid grid-cols-1 text-center">
                    {menuList.map(({ id, title, label, path, icon }) => (
                        <Menu.Item
                            key={id}
                            title={title}
                            to={path}
                            className="main-nav-item"
                        >
                            <div className="icon">{icon}</div>
                            <div className="label">{label}</div>
                        </Menu.Item>
                    ))}
                    <Menu.Item
                        onClick={() => setToggleModal(!toggleModal)}
                        title="Connect"
                        to="/"
                        className="main-nav-item"
                    >
                        <div className="icon">
                            <AiOutlineApi />
                        </div>
                        <div className="label">Connect</div>
                    </Menu.Item>
                </Menu.ItemContainer>
            </Menu>
            {toggleModal && (
                <Modal>
                    <Modal.CloseButton
                        className="w-8 h-8 flex items-center justify-center mt-4 mr-4 ml-auto font-semibold rounded-full p-1 text-2xl shadow-lg"
                        onClick={() => setToggleModal(!toggleModal)}
                    >
                        <GrFormClose className="fill-current" />
                    </Modal.CloseButton>
                    <ContactFormContainer />
                </Modal>
            )}
        </>
    )
}
