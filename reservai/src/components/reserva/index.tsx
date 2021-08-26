import React,{useState} from "react";


import { ContainerReserva } from "./styles";

import { format } from "date-fns";

function Reserva(){
    const [homeState, setHomeState] = useState("")
    const [homeState2, setHomeState2] = useState("")
    const [homeState3, setHomeState3] = useState("")
    const [homeState4, setHomeState4] = useState("")

    const { format } = require("date-fns");
    const newYears = new Date();
    const formattedDate = format(newYears, "dd/mm/yyyy");
    console.log(formattedDate);

    return(
        <>
            <ContainerReserva>
                <form action="">
                    <section className="cardReserva">
                        <div className="card">
                            <h3>Selecione sua unidade:</h3>
                            <select name="unidades" id="unidades" onChange={(e)=>{
                                const selectedHome=e.target.value;
                                setHomeState(selectedHome);
                            }}>
                                <option value="casa">Casas:</option>
                                <option value="CASA 01">CASA 01</option>
                                <option value="CASA 02">CASA 02</option>
                                <option value="CASA 03">CASA 03</option>
                                <option value="CASA 04">CASA 04</option>
                                <option value="CASA 05">CASA 05</option>
                                <option value="CASA 06">CASA 06</option>
                                <option value="CASA 07">CASA 07</option>
                                <option value="CASA 08">CASA 08</option>
                                <option value="CASA 09">CASA 09</option>
                                <option value="CASA 10">CASA 10</option>
                                <option value="CASA 11">CASA 11</option>
                                <option value="CASA 12">CASA 12</option>
                                <option value="Casa 13">CASA 13</option>
                                <option value="Casa 14">CASA 14</option>
                                <option value="Casa 15">CASA 15</option>
                                <option value="Casa 16">CASA 16</option>
                                <option value="Casa 17">CASA 17</option>
                                <option value="Casa 18">CASA 18</option>
                                <option value="Casa 19">CASA 19</option>
                                <option value="Casa 20">CASA 20</option>
                                <option value="Casa 21">CASA 21</option>
                                <option value="Casa 22">CASA 22</option>
                                <option value="Casa 23">CASA 23</option>
                                <option value="Casa 24">CASA 24</option>
                                <option value="Casa 25">CASA 25</option>
                                <option value="Casa 26">CASA 26</option>
                                <option value="Casa 27">CASA 27</option>
                                <option value="Casa 28">CASA 28</option>
                                <option value="Casa 29">CASA 29</option>
                                <option value="Casa 30">CASA 30</option>
                                <option value="Casa 31">CASA 31</option>
                                <option value="Casa 32">CASA 32</option>
                                <option value="Casa 33">CASA 33</option>
                                <option value="Casa 34">CASA 34</option>
                                <option value="Casa 35">CASA 35</option>
                                <option value="Casa 36">CASA 36</option>
                                <option value="Casa 37">CASA 37</option>
                                <option value="Casa 38">CASA 38</option>
                                <option value="Casa 39">CASA 39</option>
                                <option value="Casa 40">CASA 40</option>
                                <option value="Casa 41">CASA 41</option>
                                <option value="Casa 42">CASA 42</option>
                                <option value="Casa 43">CASA 43</option>
                                <option value="Casa 44">CASA 44</option>
                                <option value="Casa 45">CASA 45</option>
                                <option value="Casa 46">CASA 46</option>
                                <option value="Casa 47">CASA 47</option>
                                <option value="Casa 48">CASA 48</option>
                                <option value="Casa 49">CASA 49</option>
                                <option value="Casa 50">CASA 50</option>
                                <option value="Casa 51">CASA 51</option>
                                <option value="Casa 52">CASA 52</option>
                                <option value="Casa 53">CASA 53</option>
                                <option value="Casa 54">CASA 54</option>
                                <option value="Casa 55">CASA 55</option>
                                <option value="Casa 56">CASA 56</option>
                            </select>
                        </div>
                        <div className="card">
                            <h1>Data da reserva:</h1>
                            <input type="date" onChange={(e)=>{
                                const selectedHome4=e.target.value;
                                setHomeState4(selectedHome4);
                            }}>
                            </input>
                        </div>
                        <div className="card">
                            <h3>Escolha um horário para sua reserva:</h3>
                            <select name="horaInicio" id="horaInicio" onChange={(e)=>{
                                const selectedHome2=e.target.value;
                                setHomeState2(selectedHome2);
                            }}>
                                <option value="hora">Horários:</option>
                                <option value="07:00 horas">07:00 horas</option>
                                <option value="08:00 horas">08:00 horas</option>
                                <option value="09:00 horas">09:00 horas</option>
                                <option value="10:00 horas">10:00 horas</option>
                                <option value="11:00 horas">11:00 horas</option>
                                <option value="12:00 horas">12:00 horas</option>
                                <option value="13:00 horas">13:00 horas</option>
                                <option value="14:00 horas">14:00 horas</option>
                                <option value="15:00 horas">15:00 horas</option>
                                <option value="16:00 horas">16:00 horas</option>
                                <option value="17:00 horas">17:00 horas</option>
                                <option value="18:00 horas">18:00 horas</option>
                                <option value="19:00 horas">19:00 horas</option>
                                <option value="20:00 horas">20:00 horas</option>
                                <option value="21:00 horas">21:00 horas</option>
                                <option value="22:00 horas">22:00 horas</option>
                                <option value="23:00 horas">23:00 horas</option>
                            </select>
                        </div>
                        <div className="card">
                            <h3>até:</h3>
                            <select name="horaFim" id="horaFim"onChange={(e)=>{
                                const selectedHome3=e.target.value;
                                setHomeState3(selectedHome3);
                            }}>
                                <option value="hora">Horário:</option>
                                <option value="07:00 horas">07:00 horas</option>
                                <option value="08:00 horas">08:00 horas</option>
                                <option value="09:00 horas">09:00 horas</option>
                                <option value="10:00 horas">10:00 horas</option>
                                <option value="11:00 horas">11:00 horas</option>
                                <option value="12:00 horas">12:00 horas</option>
                                <option value="13:00 horas">13:00 horas</option>
                                <option value="14:00 horas">14:00 horas</option>
                                <option value="15:00 horas">15:00 horas</option>
                                <option value="16:00 horas">16:00 horas</option>
                                <option value="17:00 horas">17:00 horas</option>
                                <option value="18:00 horas">18:00 horas</option>
                                <option value="19:00 horas">19:00 horas</option>
                                <option value="20:00 horas">20:00 horas</option>
                                <option value="21:00 horas">21:00 horas</option>
                                <option value="22:00 horas">22:00 horas</option>
                                <option value="23:00 horas">23:00 horas</option>
                            </select>               
                        </div>
                        <div className="reservando">
                            <h1>Tudo certo? Então reserva ai!</h1>
                            <button>Reservar</button>
                        </div>
                    </section>

                    <section className="agendamento">
                        <h3>Agendamentos:</h3>
                        <table id="data-table">
                            <thead>
                                <tr>
                                    <th>Unidade</th>
                                    <th>Data</th>
                                    <th>Início</th>
                                    <th>Término</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </section>
                    <div className="table-function">
                        <table>
                            <thead>
                                <tr>
                                    <th><p>CASA: </p>{homeState}</th>
                                    <th><p>DATA: </p>{homeState2}</th>
                                    <th><p>Início: </p>{homeState3}</th>
                                    <th><p>Término: </p>{homeState4}</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    
                    <footer><p>ReservAi</p></footer>
                </form>
            </ContainerReserva>
        </>
    )
}

export default Reserva;