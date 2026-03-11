"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { branches, DEFAULT_BRANCH, type Branch } from "@/data/branches";

interface BranchContextType {
  branch: Branch;
  setBranchId: (id: string) => void;
}

const BranchContext = createContext<BranchContextType | null>(null);

export function BranchProvider({ children }: { children: ReactNode }) {
  const [branchId, setBranchIdState] = useState(DEFAULT_BRANCH);

  useEffect(() => {
    const stored = localStorage.getItem("myd-branch");
    if (stored && branches.some((b) => b.id === stored)) {
      setBranchIdState(stored);
    }
  }, []);

  const setBranchId = (id: string) => {
    setBranchIdState(id);
    localStorage.setItem("myd-branch", id);
  };

  const branch = branches.find((b) => b.id === branchId) ?? branches[0];

  return (
    <BranchContext.Provider value={{ branch, setBranchId }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const ctx = useContext(BranchContext);
  if (!ctx) throw new Error("useBranch must be used within BranchProvider");
  return ctx;
}
