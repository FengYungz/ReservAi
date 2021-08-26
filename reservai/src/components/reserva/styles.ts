import styled from "styled-components";

export const ContainerReserva = styled.div`

.cardReserva{
    margin-top: -8rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 50px;

    

    .card{
        background: white;
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        margin-bottom: 2rem;

        h3{
            color: black;
            font-size: 17px;
        }
        label{
            color: black;
            font-size: 17px;
        }

    }
}

.reservando{

    h1{
        color: #2D4A22;
    }
    
    button {
      font-size: 20px;
      justify-content: center;
      border: 0;
      cursor: pointer;
      color: #3C6E71;
      margin-top: 16px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      height: 50px;
      width: 200px;
      background-color: #2D4A22;
      
      :hover{
          color: white;
          background-color: #2D4A22;
          transition: 1.0s;
        }
    }
}

.agendamento{
    display: block;
    width: 100%;
    overflow-x: auto;

    h3{
        margin-left: 50px;
    }

    #data-table{
        width: 100%;
        border-spacing: 0 0.5rem;
        color: #969cb3;

        table thead tr th:first-child,
        table tbody tr td:first-child {
            border-radius: 0.25rem 0 0 0.25rem;
        }

        table thead tr th:last-child,
        table tbody tr td:last-child {
            border-radius:  0 0.25rem 0.25rem 0;
        }

        table thead th {
            background: white;
            font-weight: normal;
            padding: 1rem 2rem;
            text-align: left;
        }

        table tbody tr {
            opacity: 0.7;
        }

        table tbody tr:hover {
            opacity: 1;
        }

        table tbody td {
            background: white; 

            padding: 1rem 2rem;
        }
    }
}

.table-function{
    display: block;
    width: 100%;
    overflow-x: auto;

    width: 100%;
    border-spacing: 0 0.5rem;
    color: #969cb3;

    table thead tr th:first-child,
    table tbody tr td:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
    }

    table thead tr th:last-child,
    table tbody tr td:last-child {
        border-radius:  0 0.25rem 0.25rem 0;
    }

    table thead th {
        background: white;
        font-weight: normal;
        padding: 1rem 2rem;
        text-align: left;
    }

    table tbody tr {
        opacity: 0.7;
    }

    table tbody tr:hover {
        opacity: 1;
    }

    table tbody td {
        background: white; 

        padding: 1rem 2rem;
    }
}

footer {
    text-align: center;
    padding:  4rem 0 2rem;
    color: #363f5f;
    opacity: 0.4;

    p{
        font-size: 25px;
    }
}

`