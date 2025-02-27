const PopupMessage = ({ imageSrc, text, buttonText, secondaryButtonText, onClose, onConfirm, onSecondaryAction }) => {
    return (
        <>
            {/* Затемнений фон (Backdrop) */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 999
                }}
                onClick={onClose}
            ></div>

            {/* Спливаюче вікно */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#DCE9F9',
                padding: '20px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                textAlign: 'center',
                zIndex: 1000
            }}>
                <img src={imageSrc} style={{width: '100px', height: '100px'}} alt="Icon"/>
                <p style={{
                    fontFamily: 'Manrope',
                    fontWeight: 700,
                    fontSize: '36px',
                    lineHeight: '36px',
                    color: '#0B2545',
                    margin: '16px'
                }}>
                    {text}
                </p>

                <div className="popup-buttons" style={{display:"flex", justifyContent: "space-between"}}>
                <button style={{
                    // width: '200px',
                    // height: '45px',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Manrope',
                    fontWeight: 700,
                    fontSize: '18px',
                    // lineHeight: '36px',
                    color: '#0B2545',
                    margin: '16px',
                    padding: '8px'
                }}
                        onClick={onConfirm}>
                    {buttonText}
                </button>

                <button style={{
                    // width: '200px',
                    // height: '45px',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Manrope',
                    fontWeight: 700,
                    fontSize: '18px',
                    // lineHeight: '36px',
                    color: '#0B2545',
                    margin: '16px',
                    padding: '8px'
                }}
                        onClick={onSecondaryAction}>
                    {secondaryButtonText}
                </button>
                    </div>
            </div>
        </>
    );
};

export default PopupMessage;
