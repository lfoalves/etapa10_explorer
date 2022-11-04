// Criando o contexto
import { createContext } from "react";
export const MyContext = createContext({})


// Importado no componente
import { MyContext } from '../../hooks/myContext'
import { useContext } from "react";
const contexto = useContext(MyContext);
console.log("MEU CONTEXTO SIGNIN", contexto);