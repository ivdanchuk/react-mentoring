// The Dialog component should accept the following props:
//     a string or JSX for title
//     JSX for body content in "children" property
// a callback function for handling clicks on close button (×) in the header
interface IDialog {
    title: string,
    onClose: Function,
    children: JSX.Element;
}

export default function Dialog({title, onClose, children}: IDialog) {

    let handleClose = () => {
        onClose();
    };

    return (
        <>
            {/*<FocusTrap>*/}
            <div className="dialog-content">
                {title}
                <button onClick={handleClose}>&times;</button>
                {children}
            </div>
            {/*</FocusTrap>,*/}
        </>
    );
}