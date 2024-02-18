const darkModeHandler = () => {
    const isDarkMode = useState("darkMode", () =>
        false
    )

    const toggleDarkMode = () =>{
        isDarkMode.value = !isDarkMode.value;
    }

    return {
        isDarkMode,
        toggleDarkMode
    }
}

export default darkModeHandler;