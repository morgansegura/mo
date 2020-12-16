import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ContactFormContainer } from "../containers/contact-form"
import {
    Menu,
    Modal,
    AuthorCard,
    CircularProgress,
    LineProgress,
} from "../components"
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
                <AuthorCard className="author-block self-center items-center">
                    <AuthorCard.Image
                        className="mt-3 block rounded-full w-24 h-24"
                        fluid={avatar}
                        alt="Morgan Segura"
                    />
                    <div className="text-center pt-2 pb-8">
                        <div className="t-base text-base">Morgan Segura</div>
                        <div className="t-neutral text-sm -mb-1 font-light">
                            Front-end Web Developer
                        </div>
                        <div className="t-neutral text-sm font-light">
                            Ui/UX Designer
                        </div>
                    </div>
                </AuthorCard>
                <div className="sub-author-block">
                    <div className="skills-block w-full">
                        <div className="location flex w-full justify-between">
                            <div className="t-base text-sm font-light flex-1">
                                Residence:
                            </div>
                            <div className="t-neutral text-sm font-light">
                                United States
                            </div>
                        </div>
                        <div className="location flex w-full justify-between">
                            <div className="t-base text-sm font-light">
                                Location:
                            </div>
                            <div className="t-neutral text-sm font-light">
                                San Diego, CA.
                            </div>
                        </div>
                        <div className="location flex w-full justify-between">
                            <div className="t-base text-sm font-light">
                                Years of Exp.
                            </div>
                            <div className="t-neutral text-sm font-light">
                                9
                            </div>
                        </div>
                        <div className="hr" />
                    </div>
                    <div className="circle-progress">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="circle-progress-inner">
                                <CircularProgress
                                    progress={70}
                                    size={50}
                                    strokeWidth={4}
                                    circleOneStroke="#111"
                                    circleTwoStroke="#7ea9e1"
                                />
                                <div className="label">Design</div>
                            </div>
                            <div className="circle-progress-inner">
                                <CircularProgress
                                    progress={100}
                                    size={50}
                                    strokeWidth={4}
                                    circleOneStroke="#111"
                                    circleTwoStroke="#7ea9e1"
                                />
                                <div className="label">Dev</div>
                            </div>
                            <div className="circle-progress-inner">
                                <CircularProgress
                                    progress={80}
                                    size={50}
                                    strokeWidth={4}
                                    circleOneStroke="#111"
                                    circleTwoStroke="#7ea9e1"
                                />
                                <div className="label">Other</div>
                            </div>
                        </div>
                        <div className="hr" />
                    </div>
                    <div className="skills-block">
                        <div className="line-progress">
                            <div className="line-progress-inner">
                                <LineProgress
                                    label="Label1"
                                    progress={90}
                                    size={230}
                                    strokeWidth={10}
                                    lineOneStroke=""
                                    lineTwoStroke=""
                                />
                            </div>
                            <div className="line-progress-inner">
                                <LineProgress
                                    label="Label1"
                                    progress={95}
                                    size={230}
                                    strokeWidth={10}
                                    lineOneStroke=""
                                    lineTwoStroke=""
                                />
                            </div>
                            <div className="line-progress-inner">
                                <LineProgress
                                    label="Label1"
                                    progress={75}
                                    size={230}
                                    strokeWidth={10}
                                    lineOneStroke=""
                                    lineTwoStroke=""
                                />
                            </div>
                            <div className="line-progress-inner">
                                <LineProgress
                                    label="Label1"
                                    progress={65}
                                    size={230}
                                    strokeWidth={10}
                                    lineOneStroke=""
                                    lineTwoStroke=""
                                />
                            </div>
                            <div className="line-progress-inner">
                                <LineProgress
                                    label="Label1"
                                    progress={85}
                                    size={230}
                                    strokeWidth={10}
                                    lineOneStroke=""
                                    lineTwoStroke=""
                                />
                            </div>
                        </div>
                        <div className="hr" />
                    </div>
                    <div className="social-block"></div>
                </div>
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
