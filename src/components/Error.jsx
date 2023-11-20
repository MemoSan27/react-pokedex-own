import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    max-width: 70rem;
    margin: 0 auto;
    margin-top: 5rem;
    border-radius: 2rem;
`

const Error = ({ children }) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
