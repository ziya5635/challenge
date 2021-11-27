import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-basis: 30%;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;

const Box = styled.input`
`;


const Checkbox = ({Icon, state, set_state}) => {
    return(
        <Container>
            <Box type="checkbox" onClick={() => set_state(!state)} />
            <Icon/>
        </Container>
    )
};

export default Checkbox;