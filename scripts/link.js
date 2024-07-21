const baseUrl = "https://rorellana-b.github.io/wdd230/";

const linksUrl = "https://rorellana-b.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data);
}

getLinks();