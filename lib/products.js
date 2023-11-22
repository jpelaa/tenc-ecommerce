export async function getAllProductIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("http://localhost:3000/api/products", {
    method: "POST",
  });
  const products = await res.json();
  return products.map((product) => {
    return {
      params: {
        id: product.image,
      },
    };
  });
}

export async function getProductData(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "POST",
    });

    const product = await res.json();

    // Combine the data with the id
    return {
      id,
      ...product,
    };
  } catch (err) {
    console.error("err : ", err);
  }
}
