import React, { useState, Fragment } from 'react'
import { hot } from 'react-hot-loader/root'
import { Container, AppBar, Typography, Toolbar } from '@material-ui/core'
import SafeAgreementPreview from 'Components/SafeAgreementPreview'
import SafeAgreement from '../SafeAgreement'
import Documents from '../Documents'
import './style.css'

const Layout = () => {
    const [isShowHeader, setShowShowHeader] = useState(true)
    const [isShowSafeAgreement, setShowSafeAgreement] = useState(false)
    const [isShowSafeAgreementPreview, setShowSafeAgreementPreview] = useState(false)
    const [optionsSafeAgreement, setSafeAgreementAnswers] = useState({})

    function handleSafeAgreement(value) {
        setSafeAgreementAnswers(value)
        setShowSafeAgreement(false)
        setShowSafeAgreementPreview(true)
    }

    function handleDocumentSelect() {
        setShowSafeAgreement(true)
        setShowShowHeader(false)
    }

    return (
        <Fragment>
            <AppBar position="static" className="Layout__appbar">
                <Toolbar>
                    <Typography variant="h6">DocuSign Hackhaton</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {isShowHeader && (
                    <Fragment>
                        <Typography variant="h2" color="primary" align="center" gutterBottom>
                            Free legal documents for startups
                        </Typography>
                        <Typography variant="h4" align="center" gutterBottom>
                            Choose a document to draft
                        </Typography>

                        <Documents onSelectDocument={() => handleDocumentSelect()} />
                    </Fragment>
                )}

                {isShowSafeAgreement && (
                    <SafeAgreement onAnswerSelected={v => handleSafeAgreement(v)} />
                )}

                {isShowSafeAgreementPreview && (
                    <SafeAgreementPreview options={optionsSafeAgreement} />
                )}
            </Container>
        </Fragment>
    )
}

export default hot(Layout)
