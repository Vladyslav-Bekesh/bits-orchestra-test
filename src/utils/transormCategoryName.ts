const transormCategoryName = (name: string): string => {
  switch (name) {
    case "Science Fiction":
      return "Sci-Fi";
    case "Coming-of-age":
      return "COA";
    case "Post-apocalyptic":
      return "Post-apoc";
    case "Young Adult":
      return "YA";
    default:
      return name;
  }
};

export {transormCategoryName};
