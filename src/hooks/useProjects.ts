import { useEffect, useState } from "react";
import type { Project } from "../types/project";
import api from "../api/axios";


export const useProjects = () => {

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

   
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await api.get<Project[]>("/projects");
                setProjects(res.data);
            } catch (err: any) {
                console.error("Error fetching projects:", err);
                setError(err.response?.data?.message || "Failed to fetch projects");
            } finally {
                setLoading(false);
            }
        }

    useEffect(() => {
        fetchProjects();
    }, []);

    return  { projects, loading, error, refetch: fetchProjects };
};