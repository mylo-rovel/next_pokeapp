import {FC, CSSProperties} from 'react'
import { useTheme, Text, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
import navbarStyles from "./Navbar.module.css";

const outerDivStylesObj:CSSProperties = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    padding: "0px 20px",
    backgroundColor:"red"
}

let stylesObj:CSSProperties = {
    ...outerDivStylesObj
}

const appLogo = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png";
const rootPath = "/";
const favouritesPath = "/favourites";

export const Navbar = () => {
    const {theme} = useTheme();

    const innerDivStylesObj: CSSProperties = {
        backgroundColor: undefined
    }

    stylesObj = {...stylesObj, ...innerDivStylesObj};

    return (
        <div style = {stylesObj}>
            <NextLink href={rootPath}>
            <Image
                loader={() => appLogo} 
                src={appLogo}
                alt="pokeApp"
                width={70}
                height={70}
                unoptimized
            />
            </NextLink>
            
            <NextLink href={rootPath}>
                <div className={navbarStyles['navbar-title']}>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>ókemon</Text>
                </div>
            </NextLink>

            <Spacer css={{flex:1}}/>

            <NextLink href={favouritesPath}>
                <Text color="white">Favoritos</Text>
            </NextLink>
        </div>
    )
}
