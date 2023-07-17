exports.linkResolver = (doc) => {
  switch (doc.type) {
    case "Homepage": {
      return "/"
    }
    
    case "Subpage":
      return `/${doc.uid}/`;

    default:
      if (doc.uid==="homepage") return "/";
      return doc.uid;
  }
}
