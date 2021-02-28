import React, {useState, useEffect} from "react";
import './ImagesGrid.css';
import {CountImages, Modal, CloseButton, DateToday} from "../StyledTags/StyledTags";
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Image3 from "../../assets/images/3.jpg";
import Image4 from "../../assets/images/4.jpg";
import Image5 from "../../assets/images/5.jpg";
import Image6 from "../../assets/images/6.jpg";
import Image7 from "../../assets/images/7.jpg";
import Image8 from "../../assets/images/8.jpg";
import Image9 from "../../assets/images/9.jpg";
import Image10 from "../../assets/images/10.jpg";
import Image11 from "../../assets/images/11.jpg";
import Image12 from "../../assets/images/12.jpg";

export default function ImagesGrid() {

    const [clickedImage, setClickedImage] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");

    const imagesArray = [{
        src: Image1,
        id: 1
    }, {
        src: Image2,
        id: 2
    }, {
        src: Image3,
        id: 3
    }, {
        src: Image4,
        id: 4
    }, {
        src: Image5,
        id: 5
    }, {
        src: Image6,
        id: 6
    }, {
        src: Image7,
        id: 7
    }, {
        src: Image8,
        id: 8
    }, {
        src: Image9,
        id: 9
    }, {
        src: Image10,
        id: 10
    }, {
        src: Image11,
        id: 11
    }, {
        src: Image12,
        id: 12
    },
    ]

    const handleClick = (src, id) => {
        if (clickedImage.length === 0) {
            setClickedImage({src: src, id: id});
            setOpenModal(true);
            setOpenModal("block-active");
        }
    };

    const closeModal = () => {
        setOpenModal(false);
        setClickedImage([]);
    };

    function count() {
        const date = new Date();
        setMonth(("00" + (date.getMonth() + 1)).slice(-2));
        setDay(("00" + date.getDate()).slice(-2));
        setYear(date.getFullYear());
        setHour(("00" + date.getHours()).slice(-2));
        setMinute(("00" + date.getMinutes()).slice(-2));
    }

    useEffect(() => {
        const timer = setInterval(count, 500);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="App">{imagesArray.map((image, index) => {
            return (
                <img src={image.src} key={image.id} onClick={() => handleClick(image.src, image.id)}
                     className="grid-image item" alt="grid-pic"/>
            )
        })}
            <DateToday>{day}/{month}/{year} {hour}:{minute}</DateToday>
            <CountImages>Number of photos: {imagesArray.length}</CountImages>
            <Modal style={{display: openModal ? 'block' : 'none'}}>
                <img className="popup-image" key={clickedImage.id}
                     src={clickedImage.src} alt="popup"/>
                <CloseButton onClick={() => closeModal()}>X</CloseButton>
            </Modal>
        </div>
    );
}

