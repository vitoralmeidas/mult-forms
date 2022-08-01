import styled from "styled-components";

// login page styles
export const Container = styled.div`
    z-index: 1;

    background-color: #02044a;
    height: 100vh;

    .content {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border: 2px solid;
        border-radius: 10px;
        box-shadow: 0px 0px 10px #ffff;
        padding: 100px;
        background-color: #ccc;
        text-align: center;
    }
    
    .content h1 {
        font-size: 30px;
        font-weight: bold;
        color: #AB182C;
        letter-spacing: 1.5px;
        margin-top: -20px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    input {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0px;
        font-size: 16px;
    }

    button, .btn {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0px;
        width: 100%;
        background-color: #02044a;
        opacity: 0.8;
        color: #fff;
        cursor: pointer;
        letter-spacing: 1.4px;
    }
`;

export const ModalLoadding = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 30%;
    opacity: 0.8;
    height: 50vh;
    border-radius: 10px;
    z-index: 9999;
    .content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
    }
`;

