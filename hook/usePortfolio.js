import { useContext } from "react";
import PortfolioContext from "../context/PortfolioProvider";

const usePortfolio = () => {
    return useContext(PortfolioContext)
}

export default usePortfolio;