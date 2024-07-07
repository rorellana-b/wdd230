const currentYear = document.querySelector("#currentYear");

const lastModified = document.querySelector("#lastModified");

const today = new Date;

currentYear.innerHTML = `&copy<span>${today.getFullYear()}</span> Lazy Load Images by Ronal Orellana`

lastModified.innerHTML = `Last Modification: ${document.lastModified}`
