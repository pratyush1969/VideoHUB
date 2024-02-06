import React from 'react'
import Modal from 'react-modal';

import { useState } from 'react';
import { useEffect } from 'react';
import Youtube from 'react-youtube'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Trailer1({ location1 }) {
    const [trailer, settrailer] = useState([])
    const showTrailer = () => {
        fetch(`https://api.themoviedb.org/3/tv/${location1?.state?.tv?.id}/videos?api_key=6dd7cdd83d25b83581564423ff0c4225&language=en-US`)
            .then(res => res.json())
            .then(data => settrailer(data.results))
    }
    useEffect(() => {
        showTrailer();
    }, [])

    console.log(trailer[0])


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>

            <button onClick={openModal} className='trailer-btn' style={{backgroundColor:"dodgerblue",width:"200px",height:"5vh",color:"white",border:"none",transform:"scale(1.1)"}}>Play Trailer</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                <Youtube videoId={trailer[0]?.key} />

            </Modal>

        </div>
    )
}

export default Trailer1