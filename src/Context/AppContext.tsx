import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Task } from "../Types/Task";
import { AppContext } from "./AppContextValue";
import { useAuth0 } from "@auth0/auth0-react";

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth0();
    const [tasks, setTasks ] = useState<Task[]>([]);


    useEffect(() => {
        if (user?.email) {
            const stored = localStorage.getItem(user.email)
            setTasks(stored ? JSON.parse(stored) : [])
        }
    }, [user]);

    const addTask = (title: string, description?: string ) => {
        const newTask: Task = {
            id: (globalThis.crypto?.randomUUID?.() ?? Date.now().toString()),
            title,
            description: description ?? "",
            completed: false,
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const toggleTask = (id: string) => {
        setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    };

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    const updateTask = (id: string, updatedTask: Task) => {
        setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...updatedTask } : task ))
    );
    };

    useEffect(() => {
        if (user?.email) {
            localStorage.setItem(user.email, JSON.stringify(tasks));
        }
    }, [tasks, user]);

    return (
        <AppContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, updateTask }}>
            {children}
        </AppContext.Provider>
    );
};