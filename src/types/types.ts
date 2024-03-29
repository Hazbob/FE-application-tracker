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
  setJobTitle: React.Dispatch<React.SetStateAction<any>>;
  setCompanyName: React.Dispatch<React.SetStateAction<any>>;
  setNotes: React.Dispatch<React.SetStateAction<any>>;
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
  jobTitle?: any;
  companyName?: string | undefined;
  notes?: string | undefined;
  appliedDate?: string | undefined;
}

export interface ControlHubProps {
  setFilterStatus: (status: any) => void;
  applications: any[];
  setApplications: (apps: any[]) => void;
  setLoading: (value: ((prevState: boolean) => boolean) | boolean) => void;
}
