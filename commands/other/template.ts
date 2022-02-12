import { ICommand } from "wokcommands";

export default {
    category: "Other",
    description: "A command template. Command does nothing.",

    slash: "both",
    testOnly: true,

    callback: ({ message, interaction }) => {
        return null;
    }
} as ICommand