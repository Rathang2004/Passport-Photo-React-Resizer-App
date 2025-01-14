import React, { useState, useRef } from 'react'

function Logic() {

    const [image, setImage] = useState(null)
    const [widthI, setWidth] = useState('288px')
    const [heightI, setHeight] = useState('288px')
    const [DownloadURL, setDownloadURL] = useState(null)

    const canvasImage = useRef();

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        setImage(URL.createObjectURL(file))
        setHeight('288px')
        setWidth('288px')
        console.log(e.target.files[0])
        e.target.value = null;
    }

    const changeSize = (widthInput, heightInput) => {
        setWidth(widthInput);
        setHeight(heightInput);
        changeCanvasImageSize(widthInput, heightInput);
    };


    const changeCanvasImageSize = (widthInput2, heightInput2) => {
        const canvas = canvasImage.current;
        if (!canvas || !image) return;
        const context = canvas.getContext('2d');
        const img = new Image();
        img.src = image;

        img.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            const dimensionWidth = parseFloat(widthInput2.replace("px", ""));
            const dimensionHeight = parseFloat(heightInput2.replace("px", ""));
            canvas.width = dimensionWidth;
            canvas.height = dimensionHeight;
            context.drawImage(img, 0, 0, dimensionWidth, dimensionHeight);

            const dataURL = canvas.toDataURL('image/png');
            setDownloadURL(dataURL);
        };
    };


    return (
        <>
            <div className='container mt-4'>
                <div className="mb-4 text-center">
                    <label htmlFor="formFile" className="form-label">Please upload image below</label>
                    <input className="form-control" type="file" id="formFile" accept="image/*" onChange={handleImageUpload} />

                    {image && (<div className="text-center mb-4 my-3">
                        <img src={image} alt='input-image' className="img-fluid rounded" style={{ width: widthI, height: heightI, border: '3px solid black' }}></img>
                    </div>)}
                </div>
            </div>
            <div className="container" style={{ minHeight: '60vh' }}>
                <div className="row g-3 justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={() => changeSize('192px', '192px')} style={{ width: '100%', height: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">2in x 2in</h5>
                                <p className="card-text">Click to change picture to 2in by 2in</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={() => changeSize('132.28346457px', '170.07874016px')} style={{ width: '100%', height: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">35mm x 45mm</h5>
                                <p className="card-text">Click to change picture to 35mm by 45mm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={() => changeSize('132.28346457px', '132.28346457px')} style={{ width: '100%', height: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">35mm x 35mm</h5>
                                <p className="card-text">Click to change picture to 35mm by 35mm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={() => changeSize('188.97637795', '264.56692913')} style={{ width: '100%', height: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">50mm x 70mm</h5>
                                <p className="card-text">Click to change picture to 50mm by 70mm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="card" onClick={() => changeSize('124.72440945', '181.41732283')} style={{ width: '100%', height: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">33mm x 48mm</h5>
                                <p className="card-text">Click to change picture to 33mm by 48mm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <canvas ref={canvasImage} style={{ display: 'none' }} />
                <div className='container-download Link my-3'>
                    {DownloadURL && (<a href={DownloadURL} download="resized-image.png" className="btn btn-primary">Download Resized Picture</a>)}
                </div>
            </div>
        </>
    )
}

export default Logic