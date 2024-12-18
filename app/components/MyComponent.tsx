// app/components/MyComponent.tsx
import React from "react";

type Props = {
    message: string;
};

const MyComponent: React.FC<Props> = ({ message }) => {
    return <div>{message}</div>;
};

export default MyComponent;
