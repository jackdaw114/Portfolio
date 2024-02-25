import React, { useContext, useEffect, useRef, useState } from "react";
import { AnimationContext } from "../design_components/AnimationContext";
import { Box, Divider, Typography } from "@mui/material";
import './LandingContent.css'
import styled from "@emotion/styled";
import SideNav from "./SideNav";




const FiraCodeText = ({ children, color }) => {
    return <span className='fira-container' style={{ color: color, fontSize: '1.3em' }} >{children}</span>;
};


const TabDivider = ({ children }) => {
    return <span className="text-divider"  >{children}</span>;
}

const CommentSpan = ({ children }) => {
    return <span style={{ color: '#d62747' }} >{children}</span>
}
const ClassSpan = ({ children }) => {
    return <span className="editor-span" style={{ color: '#44ad93' }} >{children}</span>
}
const KeywordSpan = ({ children }) => {
    return <span className="editor-span" style={{ color: '#bd8c48', fontStyle: 'italic' }} >{children}</span>
}
const FunctionSpan = ({ children }) => {
    return <span className="editor-span" style={{ color: '#ccb878' }} >{children}</span>
}
const NBracketsSpan = ({ children }) => {
    return <span className="editor-span" style={{ color: '#ffd000' }} >{children}</span>
}
const DatatypeSpan = ({ children }) => {
    return <span className="editor-span" style={{ color: "#ae87e8" }} >{children}</span>
}
const VariableSpan = ({ children }) => {
    return <span className="editor-span" style={{ color: "#a6e3a3" }} >{children}</span>
}
const TextSpan = ({ children }) => {
    return <span className="editor-span" style={{ color: "#96C5F7" }} >{children}</span>
}


export default function LandingContent({ height, width }) {
    const { animationStep } = useContext(AnimationContext)
    const [count, setCount] = useState(1);
    const [fileContent, setFileContent] = useState('')

    const EditorLine = ({ children, lnumber }) => {

        return (
            <FiraCodeText color='#babbd1' >
                <span >
                    <span className="margin-numbers" style={{ paddingLeft: `${(4.0 * 1.3 - lnumber.toString().length / 1.3) / 1.3}em` }}>
                        {lnumber}
                    </span>

                    {children}
                </span>
                <br />

            </FiraCodeText>
        )
    }
    return (
        <>
            {animationStep === 1 ? <Box className='landing-content fade-component' sx={{ fontFamily: 'Fira Code', maxHeight: height, width: width, height: height }}>

                <Box >

                    <EditorLine lnumber={1}>
                        <CommentSpan >// Welcome to my corner of the internet!</CommentSpan>

                    </EditorLine>
                    <EditorLine lnumber={2} />
                    <EditorLine lnumber={3}>
                        <KeywordSpan>using </KeywordSpan>
                        <FunctionSpan>namespace </FunctionSpan>
                        <span>home;</span>
                    </EditorLine>

                    <EditorLine lnumber={4} />
                    <EditorLine lnumber={5}>
                        <KeywordSpan>int </KeywordSpan>
                        <FunctionSpan>Main</FunctionSpan>
                        <NBracketsSpan>(){'{'}</NBracketsSpan>
                    </EditorLine>

                    <EditorLine lnumber={6}>
                        <TabDivider />
                        <KeywordSpan>const </KeywordSpan>
                        <DatatypeSpan>char</DatatypeSpan>*
                        <VariableSpan> message</VariableSpan> =
                        <TextSpan>R"Greetings Visitor, Welcome to my homepage!  </TextSpan>
                    </EditorLine>
                    <EditorLine lnumber={7}><TabDivider />
                        <TextSpan>You can navigate through the content by simply reading the strings enclosed within quotes"</TextSpan>;
                    </EditorLine>
                </Box>


            </Box > : <></>

            }
        </>
    )
}



