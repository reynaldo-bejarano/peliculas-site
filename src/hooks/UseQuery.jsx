import { useLocation } from "react-router";

export function UseQuery(){
    return new URLSearchParams(useLocation().search);
}