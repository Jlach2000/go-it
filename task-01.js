const categoriesList = document.getElementById("categories");
  const categories = categoriesList.querySelectorAll(".item");

      console.log("Liczba kategorii:", categories.length);
  
      categories.forEach((category) => {
        const categoryName = category.querySelector("h2").textContent;
        const categoryElements = category.querySelectorAll("ul > li").length;
        console.log(`Kategoria: ${categoryName}`);
        console.log(`Elementy: ${categoryElements}`);
      });
