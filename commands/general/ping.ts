import { ICommand } from "wokcommands";

export default {
    category: "General",
    description: "Tests latency by replying with Pong!",

    slash: "both",
    testOnly: true,

    callback: ({}) => {
        return "Pong!"
    }
} as ICommand