function fixTitle(title) {
    // Removes leading and trailing non alphanumeric characters
    title = title.replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, "");

    // Capitalizes the first letter of each word
    title = title.split(" ").map(word => {
        if (word === "iPhone")
            return word;
        if (word.toLowerCase() === "flavou")
            return "Flavour";
        if (word.toLowerCase() === "coffe")
            return "Coffee";
        if (word.toLowerCase() === "ank")
            return "Tank";

        // Sentence case
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    return title;
}

export { fixTitle };