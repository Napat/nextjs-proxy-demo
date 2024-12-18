"use client";

import React, { useEffect, useState } from "react";

const ProxyDemoPage = () => {
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Call the backend API
        const fetchStatus = async () => {
            try {
                const response = await fetch("/api/healthz");
                // const response = await fetch(
                //     "https://api-lotto-dev.th-service.co.in/pq/healthz"
                // );

                // Check if response is ok
                if (!response.ok) {
                    throw new Error("Failed to fetch status");
                }

                const data = await response.json();
                setStatus(data.message); // Set the message in state
            } catch (error) {
                setError("Error fetching the API");
                console.error(error);
            }
        };

        fetchStatus();
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            <h1>API Status</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {status ? <p>Status: {status}</p> : <p>Loading status...</p>}
        </div>
    );
};

export default ProxyDemoPage;
