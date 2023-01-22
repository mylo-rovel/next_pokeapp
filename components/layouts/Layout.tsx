import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../ui";
import { mainStylesObj } from "./index";
import { IMainLayoutProps } from "../../models";

const defaultTitle = "PokeApp";

const originServer = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout:FC<PropsWithChildren<IMainLayoutProps>> = ({children, title}) => {
    return (
      <>
        <Head>
            <title>{title || defaultTitle }</title>
            <meta name="author" content="Emilio Rojas Véliz" />
            <meta name="description" content={`Info sobre pokemon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ originServer }/img/banner.png`} />
        </Head>

        <Navbar/>

        <main style={mainStylesObj}>
            {children}
        </main>
    </>
    )
};