import React, {useEffect, useState} from 'react';
import './ColorPickerStyle.css';

const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return [red, green, blue];
};

const generateRGBColorsArray = (length) => {
    const colors = [];
    for (let i = 0; i < length; i++) {
        const color = generateRandomColor();
        colors.push(color);
    }
    return colors;
};

const rgbColorsArray = generateRGBColorsArray(100);


const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState({a: 0, b: 0, c: 0});
    const [saveColor, setSaveColor] = useState(false);
    const [listColors, setListColors] = useState(JSON.parse(localStorage.getItem("listColor"))|| []);

    useEffect(() => {
        localStorage.setItem("listColor", JSON.stringify(listColors));
        setSaveColor(false);
    }, [saveColor]);

    const handleClick = (color) => {
        setSelectedColor({a: color[0], b: color[1], c: color[2]});
    }

    const handleClickReset = (e) => {
        setSelectedColor({a: 0, b: 0, c: 0});
    }

    const handleClickSave = (e) => {
        setListColors([...listColors, selectedColor]);
        setSaveColor(true);
    }

    return (
        <div>
            <div className="view-color">
                <div
                    className="block-Color"
                    style={{
                        width: '300px',
                        height: '300px',
                        backgroundColor: `rgb(${selectedColor.a}, ${selectedColor.b}, ${selectedColor.c})`,
                    }}
                ></div>
                <button onClick={e => handleClickReset(e)}>Reset</button>
                <button onClick={e => handleClickSave(e)}>Save</button>
            </div>
            <div className="list-colors">
                {listColors.length > 0 ? (
                    <ul>
                    {listColors.map((color, index) => (
                        <button
                            key={index}
                            style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: `rgb(${color.a}, ${color.b}, ${color.c})`,
                            }}
                            onClick={() => setSelectedColor(color)}
                        ></button>
                    ))}
                    </ul>
                ) : null}
            </div>

            <div className="palette">
                {rgbColorsArray.map((color, index) => (
                    <button
                        key={index}
                        style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                        }}
                        onClick={e => handleClick(color)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;