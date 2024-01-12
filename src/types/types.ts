import React from "react";

export type HandleAddAppType = (
  e: null | any,
  setters: {
    [key: string]: React.Dispatch<React.SetStateAction<any>>;
  },
  companyName: string,
  jobTitle: string,
  notes: string,
  applications: {}[],
) => Promise<void>;

export type Setters = {
  setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNeedRetry: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setApplications: React.Dispatch<React.SetStateAction<any>>;
};

export interface RetryButtonArgs {
  funcToRetry: HandleAddAppType;
  companyName: string;
  jobTitle: string;
  notes: string;
  setters: Setters;
  applications: any[];
}

export type ButtonClick = React.MouseEvent<HTMLButtonElement>;

export interface Application {
  jobTitle: string;
  companyName: string;
  userId: string;
  notes: string;
  status: string;
}

export type OperationCheck = React.ComponentProps<any>;

export interface UpdateAppInput {
  jobTitle?: string | undefined;
  companyName?: string | undefined;
  notes?: string | undefined;
  appliedDate?: string | undefined;
}

export interface ControlHubProps {
  setFilterStatus: (status: any) => void; // Replace 'any' with a more specific type as needed
  applications: any[]; // Replace 'any' with a more specific type as needed
  setApplications: (apps: any[]) => void; // Replace 'any' with a more specific type as needed
}
