fetch("../../README.md")
  .then((response) => response.text())
  .then((markdown) => {
    // Convert Markdown to HTML using Showdown
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdown);

    // Insert the HTML into the designated element
    document.getElementById("md").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
