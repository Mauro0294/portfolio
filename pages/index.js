import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'

const Name = styled.span`
    color: rgb(14, 182, 238);
`

const Wrapper = styled.div`
    width: 100%;
    margin-top: 14rem;
    color: white;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    font-weight: bold;
`

const Body = styled.body`
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,41,52,1) 80%);
`

const Button = styled.button`
    margin-top: 3rem;
    border: 1px solid white;
    padding: 0.75rem;
    background: none;
    color: white;
    background: none;
    font-size: 1.25rem;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background: palevioletred;
        border: 1px solid palevioletred;
    }
`

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Body>
                <Wrapper>
                    <span>Hello, I'm <Name>Mauro Scheltens</Name><br></br> I'm a Full-Stack Web Developer</span>
                    <Button><Link href='projects'>View my portfolio</Link></Button>
                </Wrapper>
            </Body>
        </>
  )
}