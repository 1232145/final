import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ShortenLink() {
    const [input, setInput] = useState('')
    const [link, setLink] = useState('')
    const [shortenLink, setShortenLink] = useState('')
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        setLink(input)
    }

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${link}`)
            setShortenLink(res.data.result.full_short_link)
        } catch(err) {
            setErr(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (link.length > 5) {fetchData()}
    }, [link])

    if(loading) {
        return (
            <div className='container'>Loading</div>
        )
    }

    if(err) {
        return (
            <div>Something went wrong :(</div>
        )
    }

  return (
    <div className='container'>
        <h1>Shorten your link</h1>
        <input placeholder='Link' onChange={(e) => handleChange(e)} value={input}/>
        <button onClick={handleClick}>Shorten</button>
        {shortenLink}
    </div>
  )
}

export default ShortenLink
