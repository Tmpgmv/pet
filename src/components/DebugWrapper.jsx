import { createContext, useContext } from "react";
import { DEBUG } from "../general/constants";

const DebugContext = createContext({});


// Если DEBUG отключен — передаём значения, иначе — вычищаем.
// Но значения по умолчанию сохраняем.

export function DebugWrap({ values = {}, children, inheritDefaults = true }) {
  
  const defaults = { required: false, type: "text" };
  const result = DEBUG
    ? {}
    : inheritDefaults
    ? { ...defaults, ...values }
    : values;

  return (
    <DebugContext.Provider value={result}>
      {children}
    </DebugContext.Provider>
  );
}


export function useDebugAttr(attrName, fallback = undefined) {
  const ctx = useContext(DebugContext);
  return ctx[attrName] !== undefined ? ctx[attrName] : fallback;
}