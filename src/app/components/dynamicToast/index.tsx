"use client";
import { memo } from "react";
import { Toaster } from 'react-hot-toast';

const MemoToastContainers = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={true}
    />
  );
};

const ToastContainers = memo(MemoToastContainers);
export default ToastContainers;
