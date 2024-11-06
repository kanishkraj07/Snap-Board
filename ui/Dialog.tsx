
"use client"

import { Button, Modal } from "antd";
import { ReactNode } from "react";

export interface DialogProps {
    title: string;
    open: boolean;
    setOpen: (T: boolean) => void;
    isCentered: boolean;
    children?: ReactNode;
    onClick: () => void;
    loading: boolean;
}

const Dialog: (props: DialogProps) => ReactNode = ({title, open, setOpen, isCentered, onClick, loading, children}: DialogProps) => {
    return (
        <Modal title={title} open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} centered={isCentered} footer={[
            <Button key="button" onClick={() => setOpen(false)}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={onClick}>
              Upload
            </Button>,
          ]}>
            {children}
        </Modal>
    )
};

export default Dialog;