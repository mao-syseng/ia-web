import { useSearch } from "@tanstack/react-router";

export const useCurrentCompany = () => {
  const { currentTurn, company, competitor } = useSearch({ from: "/" });
  return currentTurn === "company" ? company : competitor;
};
