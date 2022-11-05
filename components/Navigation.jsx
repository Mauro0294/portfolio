import styled from 'styled-components';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/Link';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,41,52,1) 80%);
    color: white;
    font-size: 1.25rem;
`

const NavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    li {
        margin-left: 3rem;
    }

    .active {
        color: #E31B6D;
    }
`

export const Navigation = () => {
    const router = useRouter();

    useEffect(() => {
        const navItems = document.querySelectorAll('li');
        navItems.forEach(item => {
            const itemText = `/${item.innerText.toLocaleLowerCase()}`;
            if (itemText === router.pathname) {
                item.classList.add('active');
            }
        });
    }), [];
    
    return (
        <Nav>
            <span>Mauro Scheltens</span>
            <NavItems>
                <Link href='/'><li>Home</li></Link>
                <Link href='projects'><li>Projects</li></Link>
                <Link href='contact'><li>Contact</li></Link>
            </NavItems>
        </Nav>
    )
}