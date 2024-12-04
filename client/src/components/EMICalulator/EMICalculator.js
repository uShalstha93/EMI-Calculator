import React, { useState } from 'react'
import { Container, Modal, Col, Form } from 'react-bootstrap'
import './style.css'
import { Formik } from 'formik'
import * as Yup from 'yup'

const EMICalculator = () => {

    const [showModal, setShowModal] = useState(false)
    const [MonthlyEMI, setMonthlyEMI] = useState('')

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => { setShowModal(false); setMonthlyEMI('') }

    const validateFormSchema = Yup.object().shape({
        principle: Yup.number()
            .required("Amount is Required!")
            .moreThan(0, 'Amount Shouldnot be 0 or Less Than 0'),
        rate: Yup.number()
            .required('Interest Rate is Required!')
            .moreThan(0, 'Rate Shouldnot be 0 or Less Than 0'),
        period: Yup.number()
            .required('Months is Required!')
            .moreThan(0, 'Term Shouldnot be 0 or Less Than 0'),
    })

    const calculateEMI = (data) => {
        let p = data.principle
        let r = (data.rate / 100) / 12;
        let power = data.period
        let toPower = Math.pow(1 + r, power)
        const result = p * r * (toPower / (toPower - 1))
        setMonthlyEMI(Math.round(result))
    }

    return (
        <>
            <div className="open-button">
                <button className="open" onClick={handleShowModal}>Click Me !</button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} size='md' centered>
                <Modal.Header className='gamemodalheader' closeButton>
                    <Modal.Title>
                        <h1>EMI Calculator</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='gamemodalbody'>
                    <Formik
                        initialValues={{ principle: '', rate: '', period: '' }}
                        validationSchema={validateFormSchema}
                        onSubmit={
                            (values, { resetForm }) => {
                                calculateEMI(values);
                                resetForm();
                            }
                        }
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form className='main' onSubmit={handleSubmit}>
                                <Container>
                                    <div className='Row'>
                                        <label>Loan Amount :</label>
                                        <div className='input-field'>
                                            <input type='number' name='principle'
                                                placeholder='Enter Amount'
                                                onChange={handleChange} value={values.principle}
                                                style={{ borderColor: touched.principle && errors.principle ? 'red' : null }}
                                            />
                                            {touched.principle && errors.principle ? (
                                                <Col className="error-message">{errors.principle}</Col>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='Row'>
                                        <label>Interest Rate (%) :</label>
                                        <div className='input-field'>
                                            <input type='number' name='rate'
                                                placeholder='Enter Rate'
                                                onChange={handleChange} value={values.rate}
                                                style={{ borderColor: touched.rate && errors.rate ? 'red' : null }}
                                            />
                                            {touched.rate && errors.rate ? (
                                                <Col className="error-message">{errors.rate}</Col>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='Row'>
                                        <label>Term (Months) :</label>
                                        <div className='input-field'>
                                            <input type='number' name='period'
                                                placeholder='Enter Periods'
                                                onChange={handleChange} value={values.period}
                                                style={{ borderColor: touched.period && errors.period ? 'red' : null }}
                                            />
                                            {touched.period && errors.period ? (
                                                <Col className="error-message">{errors.period}</Col>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='calculate'>
                                        <button type='submit'>CALCULATE</button>
                                    </div>
                                    <div className='result'>
                                        <label>Monthly Payment (EMI) :</label>
                                        <span>Rs. </span>
                                        <input type='number' name='emi'
                                            disabled={true}
                                            defaultValue={MonthlyEMI}
                                        />
                                    </div>
                                </Container>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EMICalculator