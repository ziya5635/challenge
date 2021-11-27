import styled from "styled-components";

const Container = styled.div`
    grid-column: 2/4;
    grid-row: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
`;

const Text = styled.p`
    flex-basis: 30%;
    color: ${({theme}) => theme.colors.secondry};
    text-align: center;
`

const InputContainer = styled.div`
    flex-basis: 30%;
    display: flex;
    justify-content: center;
    input{
        width: 20%;
        margin: 0 auto;
    }
`


const Item = ({Icon, text, value}) => {
    return(
        <Container>
            <Icon style={{color: 'red', flexBasis:'30%', fontSize:'1.5rem'}} />
            <Text>{text}</Text>
            <InputContainer>
                <input type="number" defaultValue={value}/>
            </InputContainer>
        </Container>
    )
};

export default Item;