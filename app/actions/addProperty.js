"use server";

async function addProperty(formData) {
  const amenities = formData.getAll("amenities"); // gets all values by form field "name" as an Array

  const images = formData
    .getAll("images")
    .filter((image) => image.name !== "") // filter out with no name
    .map((image) => image.name); // only save image name in DB

    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        nightly: formData.get("rates.nightly"),
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
      },
      seller_info: {
        name: FormDataEvent.get("seller_info.name"),
        email: FormDataEvent.get("seller_info.email"),
        phone: FormDataEvent.get("seller_info.phone"),
      },
      images,
    }
}

export default addProperty;
