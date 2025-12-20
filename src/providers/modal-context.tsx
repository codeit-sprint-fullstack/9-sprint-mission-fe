"use client"

import { createContext, type ReactNode, useCallback, useContext, useState } from "react"

interface DialogContextType {
  isOpen: boolean;
  dialogContent: ReactNode;
  openDialog: (content: ReactNode) => void;
  closeDialog: () => void;
}

interface DialogProviderProps {
  children: ReactNode
}
const DialogContext = createContext<DialogContextType | undefined>(undefined);

export default function DialogProvider({ children }: DialogProviderProps) {
  const [dialogContent, setDialogContent] = useState<ReactNode>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = useCallback((content: React.ReactNode) => {
    setDialogContent(content);
    setIsOpen(true)
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    setDialogContent(null)
  }, [])

  return (
    <DialogContext.Provider value={{ isOpen, dialogContent, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  )
}

export const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider")
  }
  return context
}