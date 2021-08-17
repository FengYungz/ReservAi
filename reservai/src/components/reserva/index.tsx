import React from "react";


import { ContainerReserva } from "./styles";

function Reserva(){
    return(
        <>
            <ContainerReserva>
                <div className="cardReserva">
                    <div className="casas">
                        <h1>Selecione sua unidade:</h1>
                        <select name="unidades" id="unidades">
                            <option value="01">CASA 01</option>
                            <option value="02">CASA 02</option>
                            <option value="03">CASA 03</option>
                            <option value="04">CASA 04</option>
                            <option value="05">CASA 05</option>
                            <option value="06">CASA 06</option>
                            <option value="07">CASA 07</option>
                            <option value="08">CASA 08</option>
                            <option value="09">CASA 09</option>
                            <option value="10">CASA 10</option>
                            <option value="11">CASA 11</option>
                            <option value="12">CASA 12</option>
                            <option value="13">CASA 13</option>
                            <option value="14">CASA 14</option>
                            <option value="15">CASA 15</option>
                            <option value="16">CASA 16</option>
                            <option value="17">CASA 17</option>
                            <option value="18">CASA 18</option>
                            <option value="19">CASA 19</option>
                            <option value="20">CASA 20</option>
                            <option value="21">CASA 21</option>
                            <option value="22">CASA 22</option>
                            <option value="23">CASA 23</option>
                            <option value="24">CASA 24</option>
                            <option value="25">CASA 25</option>
                            <option value="26">CASA 26</option>
                            <option value="27">CASA 27</option>
                            <option value="28">CASA 28</option>
                            <option value="29">CASA 29</option>
                            <option value="30">CASA 30</option>
                            <option value="31">CASA 31</option>
                            <option value="32">CASA 32</option>
                            <option value="33">CASA 33</option>
                            <option value="34">CASA 34</option>
                            <option value="35">CASA 35</option>
                            <option value="36">CASA 36</option>
                            <option value="37">CASA 37</option>
                            <option value="38">CASA 38</option>
                            <option value="39">CASA 39</option>
                            <option value="40">CASA 40</option>
                            <option value="41">CASA 41</option>
                            <option value="42">CASA 42</option>
                            <option value="43">CASA 43</option>
                            <option value="44">CASA 44</option>
                            <option value="45">CASA 45</option>
                            <option value="46">CASA 46</option>
                            <option value="47">CASA 47</option>
                            <option value="48">CASA 48</option>
                            <option value="49">CASA 49</option>
                            <option value="50">CASA 50</option>
                            <option value="51">CASA 51</option>
                            <option value="52">CASA 52</option>
                            <option value="53">CASA 53</option>
                            <option value="54">CASA 54</option>
                            <option value="55">CASA 55</option>
                            <option value="56">CASA 56</option>
                        </select>
                    </div>
                    <div className="horaIni">
                        <h1>Escolha um horário para sua reserva:</h1>
                        <select name="horaInicio" id="horaInicio">
                            <option value="ini">07:00 horas</option>
                            <option value="ini">08:00 horas</option>
                            <option value="ini">09:00 horas</option>
                            <option value="ini">10:00 horas</option>
                            <option value="ini">11:00 horas</option>
                            <option value="ini">12:00 horas</option>
                            <option value="ini">13:00 horas</option>
                            <option value="ini">14:00 horas</option>
                            <option value="ini">15:00 horas</option>
                            <option value="ini">16:00 horas</option>
                            <option value="ini">17:00 horas</option>
                            <option value="ini">18:00 horas</option>
                            <option value="ini">19:00 horas</option>
                            <option value="ini">20:00 horas</option>
                            <option value="ini">21:00 horas</option>
                            <option value="ini">22:00 horas</option>
                            <option value="ini">23:00 horas</option>
                        </select>
                    </div>
                    <div className="horaFim">
                        <h1>até:</h1>
                        <select name="horaFim" id="horaFim">
                        <option value="ini">07:00 horas</option>
                            <option value="ini">08:00 horas</option>
                            <option value="ini">09:00 horas</option>
                            <option value="ini">10:00 horas</option>
                            <option value="ini">11:00 horas</option>
                            <option value="ini">12:00 horas</option>
                            <option value="ini">13:00 horas</option>
                            <option value="ini">14:00 horas</option>
                            <option value="ini">15:00 horas</option>
                            <option value="ini">16:00 horas</option>
                            <option value="ini">17:00 horas</option>
                            <option value="ini">18:00 horas</option>
                            <option value="ini">19:00 horas</option>
                            <option value="ini">20:00 horas</option>
                            <option value="ini">21:00 horas</option>
                            <option value="ini">22:00 horas</option>
                            <option value="ini">23:00 horas</option>
                        </select>
                    </div>
                    <div className="reservando">
                        <h1>Tudo certo? Então reserva ai!</h1>
                        <button>Reservar</button>
                    </div>
                </div>
            </ContainerReserva>
        </>
    )
}

export default Reserva;