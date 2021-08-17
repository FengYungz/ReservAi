import React from "react";

import { ContainerPage } from "./styles";

import Header from "../../components/header";
import Reserva from "../../components/reserva";

function Page() {
    return(
        <>
        <ContainerPage>
        <Header />
        <Reserva />
        </ContainerPage>
        </>
    )
}

export default Page;