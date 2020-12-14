import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ContactFormContainer } from "../containers/contact-form"
import { Menu, Modal, AuthorCard } from "../components"
import LogoImage from "../assets/images/segura-icon.svg"
import { menuList } from "../fixtures"
import { AiOutlineApi } from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"

export function MenuContainer({ ...restProps }) {
    const [toggleModal, setToggleModal] = useState(false)

    const data = useStaticQuery(
        graphql`
            query {
                avatar: file(relativePath: { eq: "morgansegura-400x400.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    const avatar = data.avatar.childImageSharp.fluid

    return (
        <>
            <Menu {...restProps}>
                <AuthorCard className="self-center items-center">
                    <AuthorCard.Image
                        className="block rounded-full w-24 h-24"
                        fluid={avatar}
                        alt="Morgan Segura"
                    />
                    <div className="text-center py-2">
                        <AuthorCard.Title className="relative">
                            Morgan Segura
                        </AuthorCard.Title>
                        <AuthorCard.Subtitle className="text-sm font-normal">
                            Front-end Web Developer
                        </AuthorCard.Subtitle>
                        <AuthorCard.Subtitle className="text-sm font-normal">
                            UI/UX Designer
                        </AuthorCard.Subtitle>
                    </div>
                </AuthorCard>

                <div className="flex flex-col">
                    <div className="flex space-between">
                        <div className="">Residence:</div>
                        <div className="">United States</div>
                    </div>
                    <div className="flex space-between">
                        <div className="">City:</div>
                        <div className="">San Diego</div>
                    </div>
                    <div className="flex space-between">
                        <div className="">Age:</div>
                        <div className="">40</div>
                    </div>
                </div>
                <hr />
                <div className="">
                    <div className="art-lang-skills-item">
                        <div
                            id="circleprog1-1"
                            data-type="circles"
                            data-value="100"
                            className="art-cirkle-progress art-skills-progress relative w-12 h-12"
                        >
                            <svg viewBox="0 0 100 100" className="block w-full">
                                <path
                                    d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                                    stroke="#eee"
                                    stroke-width="7"
                                    fill-opacity="0"
                                ></path>
                                <path
                                    d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                                    stroke="#555"
                                    stroke-width="7"
                                    fill-opacity="0"
                                    stroke-dasharray="292.273, 292.273"
                                    stroke-dashoffset="0"
                                ></path>
                            </svg>
                            <div className="progressbar-text absolute left-0 ml-1/2 p-0 m-0 transform -translate-x-1/2 -translate-y-1/2">
                                100
                            </div>
                        </div>
                        <h6>French</h6>
                    </div>
                </div>

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
