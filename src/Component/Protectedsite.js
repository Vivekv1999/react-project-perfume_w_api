import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protectedsite(props) {
    const navigate = useNavigate()
    const { Component } = props

    useEffect(() => {
        const loginn = localStorage.getItem('user')
        if (!loginn) {
            navigate('/login ')
        }
    })
    return (
        <>
            <Component />
        </>
    )
}
